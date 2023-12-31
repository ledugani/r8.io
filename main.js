/*-- /////////////// --*/
/*-- infopanel stuff --*/

// update time in real time
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const timeString = new Date().toLocaleTimeString([], {
        hourCycle: 'h23',
        hour: '2-digit', 
        minute:'2-digit'
    });
    timeDisplay.textContent = timeString;
}
setInterval(refreshTime, 1000);

// update date
function refreshDate() {
    const dateDisplay = document.getElementById("date");
    const dateString = new Date().toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'numeric'
    });
    dateDisplay.textContent = dateString;
}
setInterval(refreshDate, 1000);

// city toggle
function toggleCity2(e) {
    fetchWeather(e.target.getAttribute('value'));

    if(e.target.classList.contains('active')) {
        return;
    } else {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
}

function toggleCity1(e) {
    fetchWeather(e.target.getAttribute('value'));

    if(e.target.classList.contains('active')) {
        return;
    } else {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
}

window.onload = function() {
    fetchWeather('Nashville');
};

// fetch api key
function retrieveKeys() {
    return fetch('./keys.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data[0].key);
            return data[0].key;
        }).catch(err => {
            console.log(err)
        });
}

// fetch weather for selected city
function fetchWeather(location) {
    retrieveKeys().then(result => {
        let apiKey = result;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

        fetch(url).then(resp => {
            if(!resp.ok) throw new Error(resp.statusText);
            return resp.json();
        }).then((data) => {
            showWeather(data);
        }).catch(console.err)
    });
}

function showWeather(resp) {
    let weatherIcon = resp.weather[0].icon;
    let weatherImg;

    switch (weatherIcon) {
        case '01d':
            weatherImg = 'weather-d_sun.png';
            break;
        case '01n':
            weatherImg = 'weather-n_clear-sky.png';
            break;
        case '02d':
            weatherImg = 'weather-d_few-clouds.png';
            break;
        case '02d':
            weatherImg = 'weather-n_few-clouds.png';
            break;
        case '03d':
        case '03n':
            weatherImg = 'weather_scattered-clouds.png';
            break;
        case '04d':
        case '04n':
            weatherImg = 'weather_broken-couds.png';
            break;
        case '09d':
        case '09n':
            weatherImg = 'weather_shower-rain.png';
            break;
        case '10d':
            weatherImg = 'weather-d_rain.png';
            break;
        case '10n':
            weatherImg = 'weather-n_rain.png';
            break;
        case '11d':
            weatherImg = 'weather-d_thunderstorm.png';
            break;
        case '11n':
            weatherImg = 'weather-n_thunderstorm.png';
            break;
        case '13d':
        case '13n':
            weatherImg = 'weather_snow.png';
            break;
        case '50d':
        case '50n':
            weatherImg = 'weather_mist.png';
            break;
    }

    let weatherRead = document.querySelector('img#weather');
    weatherRead.setAttribute("src", `./images/weather/8bit/${weatherImg}`);

    let tempRead = document.querySelector('.infopanel__temp');
    tempRead.innerHTML = `<span>${Math.round(resp.main.temp)}&deg;F</span>`;
}
/*-- /////////////// --*/


/*-- /////////////// --*/
/*-- aside nav stuff --*/

// follow mouse on hover
function changeDef(e) {
    const figContainer = document.getElementById(e.target.id);
    const figCaption = document.getElementById(e.target.parentNode.children[1].children[1].id);
    figCaption.style.display = "block";

    function move(e) {
        var x = e.pageX;
        var y = e.pageY;
        figCaption.style.left =  x + 25 + "px";
        figCaption.style.top = y + 25 + "px";
    }

    figContainer.addEventListener("mousemove", (e) => {
        move(e);
    });

    figContainer.addEventListener("mouseout", () => {
        figCaption.style.display = "none";
        figContainer.removeEventListener("mousemove", (e) => {
            move(e);
        });
    });
}
/*-- /////////////// --*/
