

document.getElementById("artistSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  let value = document.getElementById("artistInput").value;
  if (value === "")
    return;
  //console.log(value);

  //const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=8238befcdc132d4bde8142ab1f63927e";
  value1 = value.split(', ').join(",");
  value1 = value.split(' ,').join(",");
  value1 = value1.split(',').join(", ");


  value = value.split(', ').join("%2C");
  value = value.split(',').join("%2C");   //Handles both comma-delimited and comma-space-delimited entries
  value = value.split(' ').join('+');

  console.log(value);

  const url = "https://tastedive.com/api/similar?q=" + value + "&type=music&info=1&k=330172-FindMeMu-V539BPIE";

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  //const url = "https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction";

  console.log(url);

  let results1 = "";
  results1 += "<br/><br/>";
  results1 += "<h1 style=\"text-align: left\"> You entered: </h1>";
  results1 += "<h3> " + value1 + "</h3>";
  results1 += "<br/><br/>";
  results1 += "<h1 style=\"text-align: left\"> Your suggested artists: </h1>";

  document.getElementById("artistsEntered").innerHTML = results1;
  document.getElementById("artistResults").innerHTML = "<h3 style=\"text-align: left\"> Loading... </h3>";


  fetch(proxyurl + url)
   .then(function(response) {
     console.log(response);
     return response.json();
   }).then(function(json) {
     console.log(json);
     /*let results = "";
     results += '<h2>Weather in ' + json.name + "</h2>";
     for (let i=0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
     }
     results += '<h2>' + json.main.temp + " &deg;F</h2>"
     results += "<p>"
     for (let i=0; i < json.weather.length; i++) {
        results += json.weather[i].description
     if (i !== json.weather.length - 1)
        results += ", "
     }
     results += "</p>";*/

     //results = json;

     let results = "";

     let resultJSON = json.Similar.Results;

     results += "<hr/>";

     for (let i = 0; i < resultJSON.length; i++) {
       results += "<h2><a href=\"" + resultJSON[i].wUrl + "\">" + resultJSON[i].Name + "</a></h2>";
       results += "<h5 style=\"text-align: left\">" + resultJSON[i].wTeaser + "</h5>";
       results += "<iframe src=\"" + resultJSON[i].yUrl + "\"></iframe>";
       results += "<br/>"
       results += "<hr/>";
     }

     //, margin-left: auto, margin-right: auto, width: 90%

     /*let results = "";
     results += "<div style=\"margin-left: 100px; margin-right: 200px; width: 100%;\">"
     results += "<div style=\"font-size: 40px; font-weight: bold; margin-bottom: 0px ;\">" + json.name + "</div>"
     results += "<div style=\"float: left;\">";
     results += "<div style=\"display: block; clear: left;\">";
     results += "<div style=\"float: left;\" title=\"Title\">";
        //results += "<img height=\"45\" width=\"45\" style=\"border: medium none; width: 45px; height: 45px; background: ";

        for (let i=0; i < json.weather.length; i++) {
           results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png" height=\"90\" width=\"90\" />';
        }
     results += "</div>";
     results += "<div style=\"float: left;\">"
     results += "<div style=\"display: block; clear: left; font-size: 25px; font-weight: bold; padding: 0pt 3pt;\" title=\"Current Temperature\">" + parseInt(json.main.temp) + "°F" + "</div>";
      results += "<div style=\"display: block; width: 85px; overflow: visible;\"></div>";
    results += "</div>";
  results+= "</div>";
  results += "<div style=\"display: block; clear: left; font-size: 25px;\">Clouds: " + json.clouds.all + "%</div>";
  results += "<div style=\"display: block; clear: left; color: gray; font-size: 20px;\" >Humidity: " + json.main.humidity + "%</div>";
  results += "<div style=\"display: block; clear: left; color: gray; font-size: 20px;\" >Wind: " + json.wind.speed + " m/h</div>";
  results += "<div style=\"display: block; clear: left; color: gray; font-size: 20px;\" >Pressure: " + json.main.pressure + " hpa</div>";
results += "</div>";
results += "</div>";
results += "<br/><br/>";
results += "<p>    </p>";*/
/*results += "<div style=\"display: block; clear: left; color: gray; font-size: x-small;\">";
  results += "<a href=\"http://openweathermap.org/city/5779334?utm_source=openweathermap&utm_medium=widget&utm_campaign=html_old\" target="_blank">More..</a>";
</div>*/

     document.getElementById("artistResults").innerHTML = results;
   });
});

function openButton(event) {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
