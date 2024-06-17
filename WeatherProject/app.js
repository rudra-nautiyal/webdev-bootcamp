const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    req.body.cityName

    const query = req.body.cityName;
    const apiKey = "3cefeed018cc282cb463502413aa4383";
    const metric = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&appid=" +apiKey+ "&units="+ metric;

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "https://openweathermap.org/img/wn/" +icon + "@2x.png"
            console.log(temp, desc);
            res.write("<h1>The temperature in "+query+" is " + temp + " Degrees Celsius.</h1>");
            res.write("<h1>The weather is currently " + desc + ".</h1>");
            res.write("<img src='"+ imageURL + "'>");
            res.send();
        })
    })
})


app.listen(3000, function() {
    console.log("Server is Online!");
})