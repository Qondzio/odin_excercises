import {getData} from "/fetch.js"
import {updateData} from "./updateData.js"


const form=document.getElementById('form');
form.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const input=document.getElementById('city');
    const data= await getData(input.value);
    updateData(data);
})