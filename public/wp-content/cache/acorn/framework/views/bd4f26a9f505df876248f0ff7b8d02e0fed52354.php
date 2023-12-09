<?php $__env->startSection('content'); ?>
  <section>
    <div>
        <div id="search-container">
            <h2>Pesquisar Cidade</h2>
            <input type="text" id="cityInput" placeholder="Digite o nome da cidade">
            <button onclick="searchWeather()">Pesquisar</button>
        </div>

        <div id="weather-container">
            <h2>Condições Atuais</h2>
            <!-- Container para a animação Lottie -->
            <div id="lottie-container"></div>
            <p id="temperature"></p>
            <div>
                <p id="cityName"></p>
                <p id="dayWeek"></p>
            </div>
            <p id="weather__description"></p>
            <p id="dateTime"></p>
        </div>
    </div>

    <div id="forecast-container"></div>

    <div id="additional-weather-info">
        <h2>Informações Adicionais</h2>
        <p id="feelsLike">Sensação Térmica: <span></span></p>
        <p id="humidity">Umidade: <span></span>%</p>
        <p id="visibility">Visibilidade: <span></span> metros</p>
        <p id="windSpeed">Velocidade do Vento: <span></span> m/s</p>
        <p id="clouds">Cobertura de Nuvens: <span></span>%</p>
        <div class="contentSunriseSunset">
            <p id="sunrise"></p>
            <p id="sunset"></p>
        </div>
    </div>

  </section>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/wp-content/themes/previsao-tempo/resources/views/previsao-tempo.blade.php ENDPATH**/ ?>