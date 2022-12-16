const input = document.getElementById('input');
const button=document.getElementById('but');
const whetherImage =document.getElementById('weather_image');
const Condition = document.getElementById('condition');
const temparature=document.getElementById('temparature');
const wind=document.getElementById('wind');
const humidity=document.getElementById('humidity');
const precision =document.getElementById('precision');

init()

function init(){
button.addEventListener('click',getData);

}

async function getData(){
    const inputValue=input.value;
    const streamResponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    const textResponse= await streamResponse.text();
    const jsonData= JSON.parse(textResponse);
    temparature.innerText=jsonData.main.temp+' C';
    Condition.innerText=jsonData.weather[0].description;
    wind.innerText=jsonData.wind.speed+' Km/h';
    humidity.innerText=jsonData.main.humidity+' %';
    precision.innerText=jsonData.clouds.all+' %';
    whetherImage.setAttribute('src',`http://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`)
}