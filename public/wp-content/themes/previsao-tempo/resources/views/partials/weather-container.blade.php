<div class="bg-black-one p-3">
  <div id="search-container" class="mt-3">
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="text" id="cityInput" class=" text-white block w-full p-2 ps-10 text-sm bg-black-two rounded-full" placeholder="Digite a cidade" required>
      <button id="searchButton" class="text-white absolute top-1/2 right-3 transform -translate-y-1/2"k:focus:ring-blue-800>
        <svg class="w-4 h-4" fill="#9ca3af" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"viewBox="0 0 297 297" xml:space="preserve"><g><path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
          c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"/><path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104C179.265,127.948,165.464,141.901,148.5,141.901z"/></g></svg>
      </button>
    </div>
  </div>

  <div id="weather-container" class="text-gray py-2">
    <div class="mt-5">
      <div id="lottie-container" class="icon w-24 md:w-56 h-24 md:h-56"></div>
      <p id="temperature"></p>
    </div>

    <div>
      <p id="cityName"></p>
      <p id="dayWeek"></p>
    </div>
    <p id="weather__description"></p>
    <p id="dateTime"></p>
  </div>
</div>
