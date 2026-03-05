const apiKey = "d4c4d289ec44bf44d8ac7c6021704aeb"
const handleWeather = () => {
    const inputForCity = document.getElementById("inputForCity")
    // console.log(inputForCity.value)
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputForCity.value}&appid=${apiKey}`
    fetch(URL)
        .then(resolve => resolve.json())
        .then(data => display(data))
        .catch(reject => console.log(reject))
}
const handleAsyncWeather = async () => {
    try {
        const inputForCity = document.getElementById("inputForCity")
        // console.log(inputForCity.value)
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputForCity.value}&appid=${apiKey}`
        const res = await fetch(URL)
        const data = await res.json()
        console.log("Async: ", data)
        display(data)
    } catch (err) {
        console.log(err)
    }
}
const display = data => {
    const root = document.getElementById("root")
    const weather = {
        temp: (data.main.temp - 273.15).toFixed(2),
        sunrise: new Date(data.sys.sunrise),
        sunset: new Date(data.sys.sunset),
        main: data.weather[0].main
    }
    root.innerHTML = `
    <div class = "alert alert-warning my-4">
    <div>Temp: ${weather.temp}<sup>o</sup>C</div>
    <div>Sunrise: ${weather.sunrise}</div>
    <div>Sunset: ${weather.sunset}</div>
    <div>Main: ${weather.main}</div>
    </div>
    `
}