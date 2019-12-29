const axios = require("axios");
var http = require("http");
var fs = require("fs");

http
  .createServer(function(req, res) {
    res.write("<html><head></head><body>");
    axios
      .get(
        "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
      )
      .then(response => {

        for (let [key, value] of Object.entries(response.data)) {
          res.write("<p>" + key + " ==>  " + JSON.stringify(value) + "</p>");
        }
        res.end("</body></html>");
      });
  })
  .listen(3000, () => {
    console.log("server is running at http://localhost:3000/");
  });

var fs = require('fs');
fs.writeFile("/weather.html", output, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});