const express = require('express');
const config = require('./config');
const uzytkownicy = require('./uzytkownicy').uzytkownicy;
const app = express();

const chartData = {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
        }, {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "North America",
            borderColor: "#c45850",
            fill: false
        }]
     
}
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (request, response) => {
    response.render(__dirname + '/index.html', {});
 });

app.get('/api/users', (request, response) =>{
    response.send(uzytkownicy)
})
app.get('/api/user/:id', (request, response) =>{
    const id = parseInt(request.params.id);
    if(id>=0 && id<uzytkownicy.length){
    response.send(uzytkownicy[id])}
})

app.get('/continents', (request, response) => {
    response.render(__dirname + '/continents.html', {chartData});
 });

app.listen(config.port, function(){
    console.log('Dziala na porcie 3000')
})
