const determineGreet = (
  hours // Good morning/night text.
) =>
  (document.getElementById("greetings").innerText = `Good ${
    hours < 12
      ? "morning! "
      : hours < 18
      ? "afternoon! "
      : hours < 23 // After 11pm switch to night instead of evening.
      ? "evening! "
      : "night! "
  } `);
// Get month for GM/GN:
determineGreet(new Date().getHours());

// Time v2
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return (
    "" + (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min)
  ); // + ":" +
  //(sec < 10 ? ("0" + sec) : sec);
}
function getDate() {
  let date = new Date(),
    months = [
      "Jan",
      "Febr",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    satmonth = months[date.getMonth()],
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    satday = days[date.getDay()],
    satnum = date.getDate();
  return " " + satday + " " + satnum + " " + satmonth;
}
// Weather system, add your api key here
window.onload = () => {
  let xhr = new XMLHttpRequest();
  // Request to open weather map
  xhr.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?id=934154&&units=metric&appid=APIKEY"
  );
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var prefix = "wi-";
        var today = new Date();
        var hour = today.getHours();
        var dn = "";
        if (hour > 5 && hour < 19) {
          dn = "";
        } else {
          dn = "night-";
        }
        let json = JSON.parse(xhr.responseText);
        console.log(json);
        var code = json.weather[0].id;
        wIcon = prefix + "owm-" + dn + code;
        console.log(wIcon);
        document.getElementById("temp").innerHTML =
          json.main.temp.toFixed(0) + "°";
        document.getElementById("weather-icon").classList.add(wIcon);
      } else {
        console.log("error msg: " + xhr.status);
      }
    }
  };
  xhr.send();
  // Set up the clock and date
  document.getElementById("time").innerHTML =
    `It's ` + getDate() + `, ` + getTime();
};

// Settings/Modal trigger + close button.
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".btn-modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Dark mode Switch. Light > Dark | Dark < light
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
