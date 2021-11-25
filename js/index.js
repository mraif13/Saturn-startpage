//
// ========
// + Good Morning text +
// ========
//
const determineGreet = (hours) =>
  (document.getElementById("greetings").innerText =
    `Good ${
      hours < 12
        ? "morning, "
        : hours < 18
        ? "afternoon, "
        : hours < 21 // After 21:00/9:00 display night instead.
        ? "evening, "
        : "night, "
    } ` + localStorage.getItem("user"));

// Get month:
determineGreet(new Date().getHours());

//
// ========
// + Settings Modal trigger + close button +
// ========
//
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".setting-button");
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

//
// ========
// + Time and month text +
// ========
//
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    //sec = date.getSeconds(),
    hour = date.getHours();
  return (
    "" + (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min)
  );
}
function getDate() {
  let date = new Date(),
    months = [
      "Jan",
      "Feb",
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
    cmonth = months[date.getMonth()],
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    cday = days[date.getDay()],
    cnum = date.getDate();
  return " " + cday + " " + cnum + " " + cmonth;
}
// Set up the clock and date
document.getElementById("time").innerHTML =
  `It's ` + getDate() + `, ` + getTime();

//
// ========
// + Hide Favorites feature +
// ========
//

$(function () {
  var status = localStorage.getItem("favorites_hidden");
  if (status == "true") {
    $(".fav-container").css("display", "none");
    $(".hide-favorite").attr("checked", true);
  } else {
    $(".fav-container").css("display", "block");
    $(".hide-favorite").attr("checked", false);
  }
  $(".hide-favorite").click(function () {
    if (this.checked) {
      $(".fav-container").hide();
    } else {
      $(".fav-container").show();
    }
    localStorage.setItem("favorites_hidden", this.checked);
  });
});

//
// ========
// + Hide searchbar +
// ========
//
$(function () {
  var status = localStorage.getItem("search_hidden");
  if (status == "true") {
    $(".search_block").css("display", "none");
    $(".hide-search").attr("checked", true);
  } else {
    $(".search_block").css("display", "block");
    $(".hide-search").attr("checked", false);
  }
  $(".hide-search").click(function () {
    if (this.checked) {
      $(".search_block").hide();
    } else {
      $(".search_block").show();
    }
    localStorage.setItem("search_hidden", this.checked);
  });
});

$(function () {
  var status = localStorage.getItem("apps_hidden");
  if (status == "true") {
    $(".apps_list").css("display", "none");
    $(".hide-apps-list").attr("checked", true);
  } else {
    $(".apps_list").css("display", "block");
    $(".hide-apps-list").attr("checked", false);
  }
  $(".hide-apps-list").click(function () {
    if (this.checked) {
      $(".apps_list").hide();
    } else {
      $(".apps_list").show();
    }
    localStorage.setItem("hide-apps-list", this.checked);
  });
});

$(function () {
  var status = localStorage.getItem("didyouknow_hidden");
  if (status == "true") {
    $(".didyouknow").css("display", "none");
    $(".hide-didyouknow").attr("checked", true);
  } else {
    $(".didyouknow").css("display", "block");
    $(".hide-didyouknow").attr("checked", false);
  }
  $(".hide-didyou-know").click(function () {
    if (this.checked) {
      $(".didyouknow").hide();
    } else {
      $(".didyouknow").show();
    }
    localStorage.setItem("hide-didyou-know", this.checked);
  });
});

//
// ========
// + Settings navigation +
// ========
//
$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});

//
// ========
// + App list category +
// ========
//
$(document).ready(function () {
  $("ul.apps-category li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.apps-category li").removeClass("current");
    $(".app-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});
//
//
// ========
// + Saturn's theme engine v2.0-m&ms +
// ========
//

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const spaceButton = document.getElementById("space");
const linkinParkButton = document.getElementById("linkin-park");
const dracula_themeButton = document.getElementById("dracula_theme");
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

// Dark theme

darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  body.classList.replace("space", "dark");
  body.classList.replace("linkin-park", "dark");
  localStorage.setItem("theme", "dark");
};

// Default light theme

lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  body.classList.replace("space", "light");
  body.classList.replace("linkin-park", "light");
  localStorage.setItem("theme", "light");
};

// Material-ish dark theme

spaceButton.onclick = () => {
  body.classList.replace("dark", "space");
  body.classList.replace("light", "space");
  body.classList.replace("linkin-park", "space");
  localStorage.setItem("theme", "space");
};

// linkinPark theme
linkinParkButton.onclick = () => {
  body.classList.replace("dark", "linkin-park");
  body.classList.replace("light", "linkin-park");
  body.classList.replace("space", "linkin-park");
  localStorage.setItem("theme", "linkin-park");
};

//
// ========
// + *New* Username feature +
// ========
//

$(document).ready(function () {
  $("#save").click(function () {
    var username = $("#userSet").val();
    if (typeof Storage !== "undefined") {
      localStorage.user = username;
      $("#Uname").val(localStorage.getItem("user"));
    } else {
      $("#Uname").val("Sorry, your browser does not support Web Storage..");
    }
  });
});

//
// ========
// + Username feature: When the user save show this:  +
// ========
//

$(document).ready(function () {
  $("#save").click(function () {
    $("#sv-msg").text(
      "🔔 Your username has been saved. Please reload or open a new tab to see the changes. "
    );
  });
});

//
// ========
// + More apps overlay stuff (This handles the very simple height
// animation when the user presses on the button.)  +
// ========
//

navy.addEventListener("click", openNav);
navyclose.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
