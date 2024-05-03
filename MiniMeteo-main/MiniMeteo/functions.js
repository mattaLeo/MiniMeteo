export default function fetchData(city, temperature, minMax, wind, cityName, img, imgText){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c063e5095eda83bde9bd074d1a9624c7&units=metric'

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cityName.innerHTML = data['name']
        temperature.innerHTML = Math.round(data['main']['temp'])+"°"
        minMax.innerHTML = "Max: " + Math.round(data['main']['temp_max']) + "°" + " Min: " + Math.round(data['main']['temp_min']) + "°"
        wind.innerHTML = data['wind']['speed']
        img.src = "http://openweathermap.org/img/w/"+data['weather'][0]['icon']+".png"
        imgText.innerHTML = data['weather'][0]['main']
    })
    .catch(err => alert("Error: " + err));
}

