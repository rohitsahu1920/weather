var axios = require('axios');
var http = require('http');
var fs = require("fs");
var city, gb, temp1 ,temp_min1, temp_max1, wind_speed, wind_deg, cloud, lon1, lan1, rain;
http.createServer(function(req,res ){
    
    axios({
        method: "get",
        url : "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
    }).then(response => {
        for(let[key,value] of Object.entries(response.data)){
            if(key == "name"){
                city = value;
            }
            if(key == "sys"){
                gb = value.country;
            }
            if(key == "base"){
                rain = value;
            }
            if(key == "main"){
                temp1 = value.temp;
                temp_min1 = value.temp_min;
                temp_max1 = value.temp_max;
            }
            if(key == "wind"){
                wind_speed = value.speed;
                wind_deg = value.deg;
            }
            if(key == "clouds"){
                cloud = value.all;
            }
            if(key == "coord"){
                lon1 = value.lon;
                lan1 = value.lan;
            }
        }

        //console.log('*****');
        var x = "<html><head><style>.intro {background-color: #000000;}</style><title>Weather</title></head><body bgcolor=#f0b3ff><center> <p> <font color=red>" + city + ", " + gb +  "</font> <img class='logo' src= 'D:/js/uk.PNG'> <i>" + rain + "</i></p> <p><font color=#ffffff><span class='intro'>" + temp1 + "<sup> o </sup>" + "C" + "</span></font>" + "    temperature from " + temp_min1 + "<sup> o </sup> to " + temp_max1 + "<sup> o </sup> , " + "wind " + wind_speed + "m/s. " + "clouds  " + cloud + "%" + "</p> <p> Geo Coords [" + lon1 + "," + lan1 + "]</p> </center></body></html>";
        res.write(x);
        
        if(fs.existsSync('weather.html')){
            fs.appendFile('weather.html', x);
        }
    })
    .catch(error => {
        console.log('*****')
        console.log(error)
        console.log('*****')
      });
})
.listen(3000, () => {
    console.log("server is running at http://localhost:3000/");
  });