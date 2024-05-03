import fetchData from "./functions.js"

const selectedCity = document.getElementById("selectedCity")
const temperature = document.getElementById("temperature")
const cerca = document.getElementById("cerca")
const temperatureMaxMin = document.getElementById("maxMin");
const wind = document.getElementById("windSpeed")
const cityName = document.getElementById("cityName")
const imgMeteo = document.getElementById("imgMeteo")
const imgText = document.getElementById("weatherText")

cerca.addEventListener('click', function(){
    fetchData(selectedCity.value, temperature, temperatureMaxMin, wind, cityName, imgMeteo, imgText)
})
