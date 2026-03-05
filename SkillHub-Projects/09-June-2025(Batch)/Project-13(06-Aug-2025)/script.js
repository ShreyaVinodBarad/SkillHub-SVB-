const API_Key = "d4c4d289ec44bf44d8ac7c6021704aeb";
let cityName = document.getElementById("city");
const handleData = [];
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} => This URL is known as API End Point
// <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather Icon" /> => This URL is used to print image of the Weather. Here in place of 01d we have to give the icon's path. You can also remove @2x to make image small.

let handleWeather = () => {
    // console.log(cityName.value);
    let city = cityName.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_Key}`)
        .then((resolveMessage) => resolveMessage.json())
        .then((data) => {
            handleData.push({
                city: city,
                weather: data.weather[0].description,
                icon: data.weather[0].icon
            });
            let str = "";
            for (const item of handleData) {
                str += `<div class = "p-2 border border-black flex justify-between items-center mb-4 bg-white ">
                <div class = "flex gap-3">
            <h1>${item.city}</h1>
            <h1>${item.weather}</h1>
            </div>
            <img src="https://openweathermap.org/img/wn/${item.icon}.png" alt="Weather Icon"/>
            </div>`
            }

            document.getElementById("root").innerHTML = str;
        })
        .catch((rejectMessage) => console.log(rejectMessage));
    inpSetter();
};

let inpSetter = () => {
    cityName.value = "";
}
