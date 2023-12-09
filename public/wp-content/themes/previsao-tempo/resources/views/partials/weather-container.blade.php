<div>
    <div id="search-container">
        <h2>Pesquisar Cidade</h2>
        <input type="text" id="cityInput" placeholder="Digite o nome da cidade">
        {{-- <button onclick="searchWeather()">Pesquisar</button> --}}
        <button id="searchButton">Pesquisar</button>
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
