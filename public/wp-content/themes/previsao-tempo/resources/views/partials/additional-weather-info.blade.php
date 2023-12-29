<div class="additional-content md:w-2/3 bg-black-one py-5 px-5 lg:px-10 overflow-hidden md:overflow-y-scroll">
  <h1 class="text-gray text-2xl font-black uppercase lg:pb-5">PREVISÃO DO TEMPO teste</h1>
  <div id="forecast-container" class="flex justify-between overflow-x-scroll w-screen md:w-full pl-0 pt-4 mb-12"></div>
  <div class="container" id="additional-weather-info">
    <h2 class="text-lg text-gray font-bold mb-4">Insights Meteorológicos</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="contentSunriseSunse bg-black-two rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center">
        <p class="text-gray-400 w-full mb-4 md:mb-10">Nascer do sol & Pôr do sol</p>

        <div class="sunriseInfos flex text-gray items-center">
          <span class="flex w-14" id="sunrise"></span>
          <span class="ml-4 text-xl" id="sunriseTime"></span>
        </div>

        <div class="sunsetInfos flex text-gray items-center">
          <span class="flex w-14" id="sunset"></span>
          <span class="ml-4 text-xl" id="sunsetTime"></span>
        </div>
      </div>

      <div class="bg-black-two rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center">
        <p class="text-gray-400 w-full mb-4">Velocidade do Vento</p>
        <div class="flex items-baseline text-gray">
          <p class="text-[4rem] font-light" id="windSpeed"></p>
          <span>km/h</span>
        </div>
        <span class="w-16 -mt-4" id="windSpeedIcon"></span>
      </div>

      <div class="bg-black-two rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center">
        <p class="text-gray-400 w-full mb-4">Sensação Térmica</p>
        <div class="flex items-baseline text-gray">
          <p class="text-[4rem] font-light" id="feelsLike"></p>
          <span>°C</span>
        </div>
        <span class="w-16 -mt-4" id="feelsLikeIcon"></span>
      </div>

      <div class="bg-black-two rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center">
        <p class="text-gray-400 w-full mb-4">Umidade</p>
        <div class="flex items-baseline text-gray">
          <p class="text-[4rem] font-light" id="humidity"></p>
          <span>%</span>
        </div>
        <span class="w-16 -mt-4" id="humidityIcon"></span>
      </div>

      <div class="bg-black-two rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center">
        <p class="text-gray-400 w-full mb-4">Visibilidade</p>
        <div class="flex items-baseline text-gray">
          <p class="text-[4rem] font-light" id="visibility"></p>
          <span>km</span>
        </div>
        <span class="w-16 -mt-4" id="visibilityIcon"></span>
      </div>

      <div class="bg-black-two rounded-2xl shadow-sm p-4 h-56 flex flex-col items-center">
        <p class="text-gray-400 w-full mb-4">Nebulosidade</p>
        <div class="flex items-baseline text-gray">
          <p class="text-[4rem] font-light" id="clouds"></p>
          <span>%</span>
        </div>
        <span class="w-16 -mt-4" id="cloudsIcon"></span>
      </div>
    </div>
  </div>
</div>
