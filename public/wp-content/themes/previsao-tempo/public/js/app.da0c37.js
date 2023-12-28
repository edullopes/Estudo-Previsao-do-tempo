"use strict";(self.webpackChunk_roots_bud_sage_sage=self.webpackChunk_roots_bud_sage_sage||[]).push([[143],{"./styles/app.css":()=>{},"./scripts/app.js":()=>{(e=>{window.requestAnimationFrame((async function t(){document.body?await e():window.requestAnimationFrame(t)}))})((async()=>{const e="wp-content/themes/previsao-tempo/resources/images/icones/",t={"01d":`${e}clear-day.json`,"01n":`${e}clear-night.json`,"02d":`${e}few-clouds.json`,"02n":`${e}few-clouds-night.json`,"03d":`${e}scattered-clouds.json`,"03n":`${e}scattered-clouds.json`,"04d":`${e}broken-clouds.json`,"04n":`${e}broken-clouds.json`,"09d":`${e}shower-rain.json`,"09n":`${e}shower-rain.json`,"10d":`${e}rain.json`,"10n":`${e}rain-night.json`,"11d":`${e}thunderstorm.json`,"11n":`${e}thunderstorm.json`,"13d":`${e}snow.json`,"13n":`${e}snow.json`,"50d":`${e}mist.json`,"50n":`${e}mist.json`};function n(e){const t=document.getElementById(e);t&&(t.innerHTML="")}function o(e,t,n){const o=document.getElementById(e);if(o){const e={container:o,renderer:"svg",loop:!0,autoplay:!0,animationData:t||null,path:n||null};!e.animationData&&e.path||e.animationData?lottie.loadAnimation(e):console.error("Erro: animationData ou path deve ser fornecido.")}}async function i(e){try{return(await fetch(e)).json()}catch(e){throw console.error("Erro ao buscar JSON:",e),e}}const s=document.getElementById("cityInput");async function a(){const a="0a2240a2bf3cc04ab027bccd0fc67376",c=document.getElementById("cityInput").value,r=`https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=${a}&lang=pt_br`,d=await i(r),{lat:l,lon:m}=d.coord,u=`https://api.timezonedb.com/v2.1/get-time-zone?key=2ZIV7MHCVXTW&format=json&by=position&lat=${l}&lng=${m}`,p=await fetch(u),y=(await p.json()).zoneName,g=new Date((new Date).toLocaleString("en-US",{timeZone:y})).toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"});document.getElementById("dateTime").innerText=`${g}`;const h=new Date(1e3*d.sys.sunrise),$=new Date(1e3*d.sys.sunset),w=h.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!1,timeZone:y}),I=$.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!1,timeZone:y});document.getElementById("sunriseTime").innerText=w,document.getElementById("sunsetTime").innerText=I;const f=`${e}clear-day.json`;n("sunrise"),f&&o("sunrise",null,f);const x=`${e}clear-night.json`;n("sunset"),x&&o("sunset",null,x);const j=`${e}wind.json`;n("windSpeedIcon"),j&&o("windSpeedIcon",null,j);const E=`${e}thermometer-celsius.json`;n("feelsLikeIcon"),E&&o("feelsLikeIcon",null,E);const T=`${e}humidity.json`;n("humidityIcon"),T&&o("humidityIcon",null,T);const b=`${e}mist.json`;n("visibilityIcon"),b&&o("visibilityIcon",null,b);const v=`${e}overcast.json`;n("cloudsIcon"),v&&o("cloudsIcon",null,v);const B={weekday:"long",month:"short",day:"numeric",timeZone:y};s&&(s.value="");const k=d.weather[0].icon,L=t[k];if(n("lottie-container"),L){o("lottie-container",await i(L))}else{const e=`<img src="http://openweathermap.org/img/wn/${k}.png" alt="Icone do Tempo">`;document.getElementById("lottie-container").innerHTML=e}document.getElementById("temperature").innerText=`${parseInt(d.main.temp).toFixed(0)}`,document.getElementById("cityName").innerText=`${d.name}`;const S=new Date(1e3*d.dt).toLocaleDateString("pt-BR",B).split(" "),_=`${S[0]} ${S[3]} ${S[1]}`;document.getElementById("dayWeek").innerText=_,document.getElementById("weather__description").innerText=`${d.weather[0].description}`,document.getElementById("feelsLike").innerText=`${parseInt(d.main.feels_like).toFixed(0)}`,document.getElementById("humidity").innerText=`${d.main.humidity}`,document.getElementById("visibility").innerText=`${d.visibility}`,document.getElementById("windSpeed").innerText=`${d.wind.speed}`,document.getElementById("clouds").innerText=`${d.clouds.all}`;const D=(3.6*d.wind.speed).toFixed(2);document.getElementById("windSpeed").innerText=`${D}`;const F=(d.visibility/1e3).toFixed(0);document.getElementById("visibility").innerText=`${F}`;const H=`https://api.openweathermap.org/data/2.5/forecast?q=${c}&units=metric&appid=${a}&lang=pt_br`,M=await i(H);document.getElementById("forecast-container").innerHTML="";const Z=[];for(let e=0;e<M.list.length;e++){const n=new Date(1e3*M.list[e].dt),s=n.toLocaleDateString(),a=n.toLocaleDateString("pt-BR",{weekday:"long"});if(!Z.includes(s)){Z.push(s);const n=M.list[e].weather[0].icon,c=M.list[e].main.temp_max,r=M.list[e].main.temp_min,d=0===e?"Hoje":a.slice(0,3),l=document.createElement("div");l.classList.add("forecast-column","flex","flex-col","m-2","bg-black-two","shadow-lg","py-6","px-7","rounded-lg","justify-center","items-center","transition-all","hover:translate-y-5","mb-5"),l.innerHTML=`\n          <p class="capitalize text-gray">${d}</p>\n          <div id="lottie-container-${e}" class="h-[84px] w-[84px]"></div>\n          <div class="flex items-center">\n            <p class="text-gray font-medium text-base">${parseInt(c).toFixed(0)}\xb0</p>\n            <p class="text-gray-400 text-xs">${parseInt(r).toFixed(0)}\xb0</p>\n          </div>\n        `,document.getElementById("forecast-container").appendChild(l);const m=document.getElementById(`lottie-container-${e}`),u=t[n];if(u){o(`lottie-container-${e}`,await i(u))}else m.innerHTML=`<img src="http://openweathermap.org/img/wn/${n}.png" alt="Icone do Tempo">`}}}s&&(s.value="S\xe3o Paulo",s.addEventListener("keyup",(e=>{"Enter"===e.key&&a()})),await a(),s.value=""),searchButton.addEventListener("click",a)}))}},e=>{var t=t=>e(e.s=t);t("./scripts/app.js"),t("./styles/app.css")}]);