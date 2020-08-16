let a;
let date;
let time;
setInterval(() => {
  a = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  date = weekday[a.getDay()];
  time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
  document.getElementById("timescr").innerHTML = time;
  document.getElementById("datescr").innerHTML = date;
}, 1000);
