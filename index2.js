const axios = require("axios");
var http = require("http");
var fs = require("fs");
var x;
http
  .createServer(function (req, res) {
    res.write("<html><head></head><body>");
    axios({
      method: "get",
      // url: "https://www.bewakoof.com"
      url: "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
    })
      .then(response => {

        // console.log('-----')
        // console.log(response)
        // console.log('-----')
        for (let [key, value] of Object.entries(response.data)) {

          if(key==="wind"){
            //console.log("---",value.deg)
            x = value.deg;
            console.log("----",x)
            res.write("<p>" + x + "</p>");
          }
          //res.write("<p>" + key + " ==>  " + JSON.stringify(value) + "</p>");
        }
        res.write("<p>" + x + "</p>");
        res.end("</body></html>");
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

// var fs = require('fs');
// fs.writeFile("/weather.html", output, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// });