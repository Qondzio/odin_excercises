import {getCurrentTime} from "./getCurrentTime.js"

export function updateData(data){

    (function updateCity(){
        console.log(data);
        const city=document.getElementById("city_name");
        city.textContent=data.resolvedAddress;

        const temperature=document.getElementById("temperature");
        temperature.textContent=Math.round(data.days[0].hours[getCurrentTime()].temp)+"°";

        const weather=document.getElementById("weather");
        weather.textContent=data.days[0].hours[getCurrentTime()].conditions;

        document.getElementById('city').value='';
        document.querySelector('form').style.border="1px solid black";
    })();

    (function updateHourly(){
        document.querySelector(".weather_hourly").innerHTML='';
        for(let i=getCurrentTime(); i<=24+getCurrentTime(); i++){
            let dayIndex;
            if(i<23){
                dayIndex=0;
            }
            else{
                dayIndex=1;
            }
            const time=i%24;
            const temperature=Math.round(data.days[dayIndex].hours[time].temp);
            const weather=data.days[dayIndex].hours[time].icon;
            createHourlyWidget(time,weather,temperature);
        }
        document.querySelector('.weather_day').style.display='flex';
        document.querySelector('.weather').firstChild.textContent="Now";
    })();

    function createHourlyWidget(time,weather,temperature){
        const main=document.querySelector(".weather_hourly");
        
        const div=document.createElement("div");
        div.classList.add("weather");

        const h5=document.createElement("h5");
        h5.textContent=`${time}`;

        const img=document.createElement("img");
        img.alt="weather_icon";
        img.width=64;
        img.height=64;
        img.src=selectIcon(weather);
        


        const h4=document.createElement("h4");
        h4.textContent=`${temperature}`+"°";

        div.append(h5,img,h4);
        main.appendChild(div);
    }

    (function update10DayWidget(){
        document.querySelector('.weather_10days').innerHTML='';
        document.querySelector('.weather_week').style.display='flex';
        data.days.forEach(element => {
            const date=element.datetime.slice(5);
            const weather=element.icon;
            const tempMin=Math.round(element.tempmin);
            const tempMax=Math.round(element.tempmax);
            create10dayWidget(date,weather,tempMin,tempMax);
        });
        document.querySelector('.weather_10days span:first-of-type h5:nth-of-type(2)').textContent = 'Today';
    })();

    function create10dayWidget(date,weather,tempMin,tempMax){
        const main=document.querySelector('.weather_10days');

        const span=document.createElement('span');

        const day=new Date(`${date}`).getDay();
        const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


        const img=document.createElement('img');
        img.src=selectIcon(weather);
        img.width=40;
        img.height=40;

        const div=document.createElement('div');
        div.id='temperatureRange';
        const divider=document.createElement('div');
        divider.id='divider';
        
        const h5a=document.createElement('h5');
        const h5b=document.createElement('h5');
        const h5c=document.createElement('h5');
        const h5d=document.createElement('h5');

        h5a.textContent=date;
        h5b.textContent=weekdays[day];
        h5c.textContent=tempMin+'°';
        h5d.textContent=tempMax+'°';

        div.append(h5c,divider,h5d);
        span.append(h5a,h5b,img,div);
        main.appendChild(span);
    };

    function selectIcon(weather){
        switch (weather){
            case 'snow':
                return './images/snow.png'
            case 'snow-showers-day':
                return './images/snow-showers-day.png'
            case 'snow-showers-night':
                return './images/snow-showers-night.png'
            case 'thunder-rain':
                return './images/thunder-rain.png'
            case 'thunder-showers-day':
                return './images/thunder-showers-day.png'
            case 'thunder-showers-night':
                return './images/thunder-showers-night.png'
            case 'rain':
                return './images/rain.png'
            case 'showers-day':
                return './images/showers-day.png'
            case 'showers-night':
                return './images/showers-night.png'
            case 'fog':
                return './images/fog.png'
            case 'wind':
                return './images/wind.png'
            case 'cloudy':
                return './images/cloudy.png'
            case 'partly-cloudy-day':
                return './images/partly-cloudy-day.png'
            case 'partly-cloudy-night':
                return './images/partly-cloudy-night.png'
            case 'clear-day':
                return './images/clear-day.png'
            case 'clear-night':
                return './images/clear-night.png'
        }
    }
}