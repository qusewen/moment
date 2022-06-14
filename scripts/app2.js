
const log = console.log
const deg = document.querySelector('#deg')
const wind = document.querySelector('#wind')
const humidity = document.querySelector('#humidity')
const icons = document.querySelector('#wather-img')
const countryValue = document.querySelector('#country')
let country = '';
let iconId = '';
let urlIcon ='';

getweather()
function getweather(){
    let wetherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryValue.value}&lang=ru&appid=ce616969cd740fccc2086080fbc71d41&units=metric`
    fetch(wetherUrl)
    .then((response) => response.json())
    .then((responseData) =>showWeather(responseData) )


function showWeather(responseData){
    deg.innerHTML = `${responseData.main.temp} °C ${responseData.weather[0].main}`
    wind.innerHTML = `Wind speed ${responseData.wind.speed}`
    humidity.innerHTML = `Humidity: ${responseData.main.humidity}%`
    iconId = responseData.weather[0].icon
    urlIcon = `http://openweathermap.org/img/wn/${iconId}@2x.png`
    icons.src = urlIcon;
}

}
countryValue.addEventListener('change', getweather);