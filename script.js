const cityInput = document.querySelector('.cityInput')
const submit = document.querySelector('.countrySubmit')
const weathers = document.querySelector('.weatherOutput')

const getWeather = (event) => {
    const city = cityInput.value;
    const newWeather = document.createElement('figure');
    newWeather.innerHTML = `tu veux le temps de ${city} <br>`
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3093445492cdb55dd249833a687862f3&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.list.length; i++){
                let dateCurrent = new Date("2021-03-25");
                console.log(dateCurrent)
                let test = dateCurrent.getDate();
                console.log(test);
                newWeather.innerHTML += ` le ${data.list[i].dt_txt} il fait ${data.list[i].main.temp} <br> `;
            }
        }); 
    weathers.append(newWeather);
}

submit.addEventListener('click', getWeather)