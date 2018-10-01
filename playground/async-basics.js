const axios = require('axios');
const API_KEY = '2bbe0c3e7a31fbc13a839ee37bbe975f';
let data = null;

axios.get('http://api.openweathermap.org/data/2.5/weather?q=Irvine,us&units=imperial&APPID=' + API_KEY)
    .then(response => {
        console.log('starting fetching');

        data = response;
    });

setTimeout(() => {
    console.log(data);
}, 5000);
