import domReady from '@roots/sage/client/dom-ready';

/**
 * Application entrypoint
 */

domReady(async () => {
  const iconBaseUrl = 'wp-content/themes/previsao-tempo/resources/images/icones/';
  const customIcons = {
    '01d': `${iconBaseUrl}clear-day.json`,
    '01n': `${iconBaseUrl}clear-night.json`,
    '02d': `${iconBaseUrl}few-clouds.json`,
    '02n': `${iconBaseUrl}few-clouds-night.json`,
    '03d': `${iconBaseUrl}scattered-clouds.json`,
    '03n': `${iconBaseUrl}scattered-clouds.json`,
    '04d': `${iconBaseUrl}broken-clouds.json`,
    '04n': `${iconBaseUrl}broken-clouds.json`,
    '09d': `${iconBaseUrl}shower-rain.json`,
    '09n': `${iconBaseUrl}shower-rain.json`,
    '10d': `${iconBaseUrl}rain.json`,
    '10n': `${iconBaseUrl}rain-night.json`,
    '11d': `${iconBaseUrl}thunderstorm.json`,
    '11n': `${iconBaseUrl}thunderstorm.json`,
    '13d': `${iconBaseUrl}snow.json`,
    '13n': `${iconBaseUrl}snow.json`,
    '50d': `${iconBaseUrl}mist.json`,
    '50n': `${iconBaseUrl}mist.json`,
  };

  function clearElementContent(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = '';
    }
  }

  function createLottieAnimation(containerId, animationData, animationPath) {
    const container = document.getElementById(containerId);

    if (container) {
      const options = {
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData || null,
        path: animationPath || null,
      };

      // Verifica se animationData não está definido e path está definido
      if (!options.animationData && options.path) {
        // Carrega a animação Lottie a partir do caminho
        lottie.loadAnimation(options);
      } else if (options.animationData) {
        // Carrega a animação Lottie a partir do animationData
        lottie.loadAnimation(options);
      } else {
        console.error('Erro: animationData ou path deve ser fornecido.');
      }
    }
  }

  async function fetchJSON(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.error('Erro ao buscar JSON:', error);
      throw error;
    }
  }

  // Obtém a referência do input com o ID 'cityInput'
  const cityInput = document.getElementById('cityInput');

  // Adiciona um valor padrão ao input quando o DOM está pronto
  if (cityInput) {
    cityInput.value = 'São Paulo';

    // Adiciona um ouvinte de evento para a tecla Enter no input
    cityInput.addEventListener('keyup', (event) => {
      // Verifica se a tecla pressionada é a tecla Enter
      if (event.key === 'Enter') {
        // Chama a função de pesquisa quando a tecla Enter é pressionada
        searchWeather();
      }
    });

    // Chama a função searchWeather para buscar automaticamente os dados meteorológicos
    await searchWeather();

    // Limpa o campo de entrada após a busca bem-sucedida
    cityInput.value = '';
  }

  // Adiciona um ouvinte de evento ao botão de pesquisa com o ID 'searchButton'
  searchButton.addEventListener('click', searchWeather);

  async function searchWeather() {
    const apiKey = '0a2240a2bf3cc04ab027bccd0fc67376';
    const city = document.getElementById('cityInput').value;

    // Condições Atuais
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const currentWeatherData = await fetchJSON(currentWeatherURL);

    // Extrai as coordenadas geográficas da resposta da API
    const {
      lat,
      lon
    } = currentWeatherData.coord;

    // Consulta a API do GeoNames Timezone para obter o fuso horário
    // const timezoneURL = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=lopesdeveloper`;
    const timezoneApiKey = '2ZIV7MHCVXTW'
    const timezoneURL = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneApiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
    const timezoneResponse = await fetch(timezoneURL);
    const timezoneData = await timezoneResponse.json();

    // Verifica se obteve sucesso na obtenção do fuso horário
    // const timezone = timezoneData.timezoneId;
    const timezone = timezoneData.zoneName;

    // Cria uma nova data ajustada para o fuso horário
    const currentTime = new Date(new Date().toLocaleString("en-US", {
      timeZone: timezone
    }));

    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
    };

    const timeString = currentTime.toLocaleTimeString(undefined, timeOptions);

    document.getElementById('dateTime').innerText = `${timeString}`;

    const sunriseTime = new Date(currentWeatherData.sys.sunrise * 1000);
    const sunsetTime = new Date(currentWeatherData.sys.sunset * 1000);

    // Aplica o fuso horário diretamente durante a formatação
    const sunriseTimeString = sunriseTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: timezone
    });

    const sunsetTimeString = sunsetTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: timezone
    });

    document.getElementById('sunriseTime').innerText = sunriseTimeString;
    document.getElementById('sunsetTime').innerText = sunsetTimeString;

    // Carrega a animação Lottie para o nascer do sol
    const sunriseIconPath = `${iconBaseUrl}clear-day.json`;
    clearElementContent('sunrise');
    if (sunriseIconPath) {
      createLottieAnimation('sunrise', null, sunriseIconPath);
    }

    // Carrega a animação Lottie para o pôr do sol
    const sunsetIconPath = `${iconBaseUrl}clear-night.json`;
    clearElementContent('sunset');
    if (sunsetIconPath) {
      createLottieAnimation('sunset', null, sunsetIconPath);
    }

     // Carrega a animação Lottie para a Velocidade do vento
     const windIconPath = `${iconBaseUrl}wind.json`;
     clearElementContent('windSpeedIcon');
     if (windIconPath) {
       createLottieAnimation('windSpeedIcon', null, windIconPath);
     }

     // Carrega a animação Lottie para a sensação termica
     const feelsLikeIconPath = `${iconBaseUrl}thermometer-celsius.json`;
     clearElementContent('feelsLikeIcon');
     if (feelsLikeIconPath) {
       createLottieAnimation('feelsLikeIcon', null, feelsLikeIconPath);
     }

     // Carrega a animação Lottie para a humidade
     const humidityIconPath = `${iconBaseUrl}humidity.json`;
     clearElementContent('humidityIcon');
     if (humidityIconPath) {
       createLottieAnimation('humidityIcon', null, humidityIconPath);
     }

     // Carrega a animação Lottie para a visibilidade
     const visibilityIconPath = `${iconBaseUrl}mist.json`;
     clearElementContent('visibilityIcon');
     if (visibilityIconPath) {
       createLottieAnimation('visibilityIcon', null, visibilityIconPath);
     }

     // Carrega a animação Lottie para o pôr do sol
     const cloudsIconPath = `${iconBaseUrl}overcast.json`;
     clearElementContent('cloudsIcon');
     if (cloudsIconPath) {
       createLottieAnimation('cloudsIcon', null, cloudsIconPath);
     }

    const dayWeekOptions = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      timeZone: timezone,
    };

    // Limpa o campo de entrada após a busca bem-sucedida
    if (cityInput) {
      cityInput.value = '';
    }

    const weatherIconCode = currentWeatherData.weather[0].icon;
    const lottieAnimation = customIcons[weatherIconCode];

    clearElementContent('lottie-container');
    if (lottieAnimation) {
      const animationData = await fetchJSON(lottieAnimation);
      createLottieAnimation('lottie-container', animationData);
    } else {
      const iconImage = `<img src="http://openweathermap.org/img/wn/${weatherIconCode}.png" alt="Icone do Tempo">`;
      document.getElementById('lottie-container').innerHTML = iconImage;
    }

    // Atualiza o restante das informações
    document.getElementById('temperature').innerText = `${parseInt(currentWeatherData.main.temp).toFixed(0)}`;
    document.getElementById('cityName').innerText = `${currentWeatherData.name}`;
    const dateWeek = new Date(currentWeatherData.dt * 1000);
    const dateParts = dateWeek.toLocaleDateString('pt-BR', dayWeekOptions).split(' ');
    const dayWeekWeather = `${dateParts[0]} ${dateParts[3]} ${dateParts[1]}`;
    document.getElementById('dayWeek').innerText = dayWeekWeather;
    document.getElementById('weather__description').innerText = `${currentWeatherData.weather[0].description}`;
    document.getElementById('feelsLike').innerText = `${parseInt(currentWeatherData.main.feels_like).toFixed(0)}`;
    document.getElementById('humidity').innerText = `${currentWeatherData.main.humidity}`;
    document.getElementById('visibility').innerText = `${currentWeatherData.visibility}`;
    document.getElementById('windSpeed').innerText = `${currentWeatherData.wind.speed}`;
    document.getElementById('clouds').innerText = `${currentWeatherData.clouds.all}`;

    // Converte a velocidade do vento de m/s para km/h
    const windSpeedInKmh = (currentWeatherData.wind.speed * 3.6).toFixed(2);
    document.getElementById('windSpeed').innerText = `${windSpeedInKmh}`;

    // Converte a visibilidade de metros para km
    const visibilityInKm = (currentWeatherData.visibility / 1000).toFixed(0);
    document.getElementById('visibility').innerText = `${visibilityInKm}`;

    // Previsão do Tempo para os Próximos 5 Dias
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const forecastData = await fetchJSON(forecastURL);

    // Limpa o conteúdo anterior da previsão
    document.getElementById('forecast-container').innerHTML = '';

    // Armazena os dias já processados para evitar duplicatas
    const processedDays = [];

    // Exibe a previsão para cada dia em uma coluna
    for (let i = 0; i < forecastData.list.length; i++) {
      const date = new Date(forecastData.list[i].dt * 1000);
      const dateString = date.toLocaleDateString();
      const dayOfWeek = date.toLocaleDateString('pt-BR', {
        weekday: 'long'
      });

      // Verifica se já processamos a previsão para este dia
      if (!processedDays.includes(dateString)) {
        processedDays.push(dateString);

        const icon = forecastData.list[i].weather[0].icon;
        const tempMax = forecastData.list[i].main.temp_max;
        const tempMin = forecastData.list[i].main.temp_min;
        const abbreviatedDayOfWeek = i === 0 ? 'Hoje' : dayOfWeek.slice(0, 3);

        const column = document.createElement('div');
        column.classList.add('forecast-column', 'flex', 'flex-col', 'm-2', 'bg-black-two', 'shadow-lg', 'py-6', 'px-7', 'rounded-lg', 'justify-center', 'items-center', 'transition-all', 'hover:translate-y-5', 'mb-5');
        column.innerHTML = `
          <p class="capitalize text-gray">${abbreviatedDayOfWeek}</p>
          <div id="lottie-container-${i}" class="h-[84px] w-[84px]"></div>
          <div class="flex items-center">
            <p class="text-gray font-medium text-base">${parseInt(tempMax).toFixed(0)}°</p>
            <p class="text-gray-400 text-xs">${parseInt(tempMin).toFixed(0)}°</p>
          </div>
        `;

        document.getElementById('forecast-container').appendChild(column);

        // Carrega a animação Lottie
        const lottieContainer = document.getElementById(`lottie-container-${i}`);
        const lottieAnimation = customIcons[icon];

        if (lottieAnimation) {
          const animationData = await fetchJSON(lottieAnimation);
          createLottieAnimation(`lottie-container-${i}`, animationData);
        } else {
          // Caso não haja uma animação correspondente, usa um ícone padrão
          lottieContainer.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Icone do Tempo">`;
        }
      }
    }
  }
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (
  import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
