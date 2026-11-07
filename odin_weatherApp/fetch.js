export async function getData(value){
    try {
        const conn=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}/next9days?key=ZQ36U6H5FRJMEKENXABR5RE7Q&unitGroup=metric&iconSet=icons2`);
        const data=await conn.json();     
        return data;
    } catch (error) {
        console.log("Error: "+error);
        document.getElementById('form').style.border="2px solid red";
    }
    
}