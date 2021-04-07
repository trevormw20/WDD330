const api = {
    key: "eb0f0966f8ca6774077376063c359fb3",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const search = document.querySelector('.search');
  search.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(search.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hiAndLow = document.querySelector('.hiAndLow');
    hiAndLow.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round( weather.main.temp_max)}°f`;

    let windChill = document.querySelector('.windChill');
    windChill.innerText = `Wind speed ${Math.round( weather.wind.speed)} mph`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

  /*  const d = new Date();
  const todayDayNumber = d.getDay();

  const weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

  cityURL = "";

  if (window.location.href.indexOf("preston.html") > -1) {
    cityURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=eb0f0966f8ca6774077376063c359fb3&units=imperial";
  }

  if (window.location.href.indexOf("sodasprings.html") > -1) {
    cityURL = "//api.openweathermap.org/data/2.5/forecast?zip=83276&appid=eb0f0966f8ca6774077376063c359fb3&units=imperial";
  } 

  if (window.location.href.indexOf("fishhaven.html") > -1) {
    cityURL = "//api.openweathermap.org/data/2.5/forecast?zip=83287&appid=eb0f0966f8ca6774077376063c359fb3&units=imperial";
  } 

  const apiURL = cityURL;
  fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    document.getElementById("townName").textContent = weatherInfo.city.name;

    let mylist = weatherInfo.list;

    let forecastDayNumber = todayDayNumber;

    document.getElementById('condition').innerText = weatherInfo.list[todayDayNumber].weather[0].description;
    document.getElementById('highTemp').innerText = weatherInfo.list[todayDayNumber].main.temp;
    document.getElementById('windChill').innerText = Math.round(35.74 + (0.6215 * weatherInfo.list[todayDayNumber].main.temp) - (35.75 * Math.pow(weatherInfo.list[todayDayNumber].wind.speed, 0.16)) + (0.4275 * weatherInfo.list[todayDayNumber].main.temp * Math.pow(weatherInfo.list[todayDayNumber].wind.speed, 0.16)))
    document.getElementById('humidity').innerText = weatherInfo.list[todayDayNumber].main.humidity;
    document.getElementById('windSpeed').innerText = weatherInfo.list[todayDayNumber].wind.speed;

    for (i=0; i<mylist.length; i++) {
      let time = mylist[i].dt_txt;

      if (time.includes('21:00:00')) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7){forecastDayNumber = 0};
        let theDayName = document.createElement("p");
        theDayName.textContent = weekDay[forecastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src=iconPath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById('weatherForecast').appendChild(theDay);
      }
    }
  }  
);

*/