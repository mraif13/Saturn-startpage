//
// ========
// + Good Morning text +
// ========
//
const determineGreet = (hours) =>
  (document.getElementById("good_morning").innerText =
    `Good ${
      hours < 12
        ? "morning, "
        : hours < 18
        ? "afternoon, "
        : hours < 21
        ? "evening, "
        : "night, "
    } ` +
    localStorage.getItem("user") +
    `.`);

// Get month:
determineGreet(new Date().getHours());

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
    "" +
    (hour < 10 ? "0" + hour : hour) +
    "<span>:</span>" +
    (min < 10 ? "0" + min : min)
  );
}

function getDate() {
  let date = new Date(),
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
  if (cnum < 10) {
    cnum = "0" + cnum;
  }
  return " " + cday + ", " + cnum + " " + cmonth;
}
// Set up the date only
document.getElementById("date").innerHTML = getDate();

// Set up the clock only
document.getElementById("time").innerHTML = getTime();

// Reload time after a certain amount of time [BETA, testing tbh]
setInterval(() => {
  document.getElementById("time").innerHTML = getTime();
}, 60 * 1000);

//
// ========
// + Settings Modal trigger + close button +
// ========
//

var modal = document.querySelector(".settings_modal");
var trigger = document.querySelector(".dropdown-settings");
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
// + Wallpaper Modal +
// ========
//

var wallpaperModal = document.querySelector(".wallpaper_modal");
var wallpaperButton = document.getElementById("wallpaper-button");
var closeWallpaperButton = document.querySelector(".close-wallpaper");

function toggleWallpaper() {
  wallpaperModal.classList.toggle("show-wallpaper-modal");
}

function windowOutclick3(event) {
  if (event.target === wallpaperModal) {
    toggleWallpaper();
  }
}

wallpaperButton.addEventListener("click", toggleWallpaper);
closeWallpaperButton.addEventListener("click", toggleWallpaper);
window.addEventListener("click", windowOutclick3);

//
// ========
// + Favorites Modal +
// ========
//

var favModal = document.querySelector(".fav_modal");
var FavBtntrigger = document.querySelector(".favorite-button");
var closeFavoritesButton = document.querySelector(".cancel-fav-btn");

function toggleFavorites() {
  favModal.classList.toggle("show-favorite-modal");
}

function windowOutclick2(event) {
  if (event.target === favModal) {
    toggleFavorites();
  }
}

FavBtntrigger.addEventListener("click", toggleFavorites);
closeFavoritesButton.addEventListener("click", toggleFavorites);
window.addEventListener("click", windowOutclick2);

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

//
// ========
// + Hide Calendar Button +
// ========
//
$(function () {
  var status = localStorage.getItem("hide-calendar-btn");
  if (status == "true") {
    $(".calendar-btn").css("display", "none");
    $(".hide-apps-list").attr("checked", true);
  } else {
    $(".calendar-btn").css("display", "block");
    $(".hide-calendar-btn").attr("checked", false);
  }
  $(".hide-calendar-btn").click(function () {
    if (this.checked) {
      $(".calendar-btn").hide();
    } else {
      $(".calendar-btn").show();
    }
    localStorage.setItem("hide-calendar-btn", this.checked);
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
// ========
// + Keyboard Shortcuts +
// ========
//

var opnSetting = document.querySelector(".close-button");
document.body.addEventListener("keydown", function () {
  if (event.keyCode == 83 && event.shiftKey) {
    // Shift + S key
    opnSetting.click();
  }
});

// when ESC is pressed close the modal in vanilla js
document.addEventListener("keyup", function (e) {
  if (e.keyCode == 27) {
    document.querySelector(".settings_modal").classList.remove("show-modal");
    document
      .querySelector(".fav_modal")
      .classList.remove("show-favorite-modal");
    document
      .querySelector(".wallpaper_modal")
      .classList.remove("show-wallpaper-modal");
    // unfocus search-bar
    document.querySelector(".search-bar").blur();
  }
});

//
// ========
// + Apps Shortcut +
// ========
//

// Ctrl + Alt + G to open github.com
document.addEventListener("keyup", function (github) {
  if (github.key == "g" && github.altKey && github.ctrlKey) {
    window.location.replace("https://github.com");
  }
});

// Ctrl + Alt + Y to open youtube.com
document.addEventListener("keyup", function (youtube) {
  if (youtube.key == "y" && youtube.altKey && youtube.ctrlKey) {
    window.location.replace("https://youtube.com");
  }
});

// Ctrl + Alt + R to open reddit.com
document.addEventListener("keyup", function (reddit) {
  if (reddit.key == "r" && reddit.altKey && reddit.ctrlKey) {
    window.location.replace("https://reddit.com");
  }
});

// Ctrl + Alt + P to open protonmail.com
document.addEventListener("keyup", function (protonmail) {
  if (protonmail.key == "p" && protonmail.altKey && protonmail.ctrlKey) {
    window.location.replace("https://mail.proton.me");
  }
});

// Ctrl + Alt + T to open twitter.com
document.addEventListener("keyup", function (twitter) {
  if (twitter.key == "t" && twitter.altKey && twitter.ctrlKey) {
    window.location.replace("https://twitter.com");
  }
});

// Ctrl + Alt + C to open google_calendar
document.addEventListener("keyup", function (google_calendar) {
  if (
    google_calendar.key == "c" &&
    google_calendar.altKey &&
    google_calendar.ctrlKey
  ) {
    window.location.replace("https://calendar.google.com");
  }
});

// Ctrl + Alt + M to open mail.google.com
document.addEventListener("keyup", function (mail) {
  if (mail.key == "m" && mail.altKey && mail.ctrlKey) {
    window.location.replace("https://mail.google.com");
  }
});

// Ctrl + Alt + I to open instagram.com
document.addEventListener("keyup", function (instagram) {
  if (instagram.key == "i" && instagram.altKey && instagram.ctrlKey) {
    window.location.replace("https://instagram.com");
  }
});

// Ctrl + / to focus on searchbar
document.addEventListener("keyup", function (search) {
  if (search.key == "/" && search.ctrlKey) {
    document.querySelector(".search-bar").focus();
  }
});

// Ctrl + ArrowUp to click on se_icon
document.addEventListener("keyup", function (se_icon) {
  if (se_icon.key == "ArrowUp" && se_icon.ctrlKey) {
    document.querySelector(".se_icon").click();
  }
});
document.addEventListener("keyup", function (favModal) {
  if (favModal.keyCode == 90 && favModal.shiftKey) {
    document.querySelector(".favorite-button").click();
  }
});

//
// ========
// + Username feature v2 +
// ========
//
//
document.querySelector("#save").addEventListener("click", function () {
  var username = document.querySelector("#username_input").value;
  if (username == "") {
    document.querySelector("#username_input").style.border =
      "2px solid var(--delete-warning-bg)";
  } else {
    localStorage.setItem("user", username);
    location.reload();
  }
});
//
// ========
// + *New* Wallpaper Feature +
// ========
//
document.querySelector("#save-image").addEventListener("click", function () {
  var image_url = document.querySelector("#image_url").value;
  if (image_url == "") {
    document.querySelector("#image_url").style.border =
      "2px solid var(--delete-warning-bg)";
    // document.querySelector("#error-text-wallpaper").innerHTML =
    //   "Image URL cannot be empty.";
  } else {
    document.querySelector("#image_url").style.border = "2px solid #73d673";
    document.querySelector(".processing_bg").innerHTML =
      "<img class='loading-svg' src='/assets/img/loading.svg'>" +
      " Loading background...";
    setTimeout(function () {
      location.reload();
    }, 5000);
    localStorage.setItem("image_url", image_url);

    // Remove previously used images
    localStorage.removeItem("imageupload");
  }
});

// up-load image
const input = document.getElementById("imageupload");

input.addEventListener("change", (event) => {
  document.querySelector(".processing_bg").innerHTML =
    "<img class='loading-svg' src='/assets/img/loading.svg'>" +
    " Processing image... ";
  //
  // == First we remove any previously stored backgrounds. ==
  //
  localStorage.removeItem("imageupload");
  localStorage.removeItem("image_url");
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.addEventListener("load", () => {
    localStorage.setItem("imageupload", reader.result);
  });
  setTimeout(() => {
    location.reload();
  }, 2000);
});
// grab and set as background ;)
if (localStorage.getItem("imageupload")) {
  document.querySelector("body").style.backgroundImage =
    "url(" + localStorage.getItem("imageupload") + ")";
}

//
// ========
// + *New* Apply URL to body +
// ========
//
if (localStorage.getItem("image_url")) {
  document.querySelector("body").style.backgroundImage =
    "url(" + localStorage.getItem("image_url") + ")";
}

// copy to clipboard

let copy_image_url = document.getElementById("copy-backgroundurl");

if (localStorage.getItem("image_url") == null) {
  document.querySelector("#copy-backgroundurl").style.display = "none";
} else {
  copy_image_url.addEventListener("click", () => {
    navigator.clipboard.writeText(localStorage.getItem("image_url"));
    document.querySelector("#copy-backgroundurl").innerHTML =
      "🥳 Copied to clipboard";
  });
}

//
// ========
// + *New* Delete and clear image_url +
// ========
//
document
  .querySelector("#delete_custom_image")
  .addEventListener("click", function () {
    if (
      confirm("You're about to delete your custom background. Are you sure?")
    ) {
      localStorage.removeItem("image_url");
      localStorage.removeItem("imageupload");
      document.querySelector("body").style.backgroundImage = "";
      document.querySelector("#copy-backgroundurl").style.display = "none";
    }
  });

//
// ========
// + *New* display saved image_url inside your_image_url * +
// ========

if (localStorage.getItem("image_url") == null) {
  document.querySelector("#your_image_url").innerHTML = "No URL found";
} else {
  document.querySelector("#your_image_url").innerHTML =
    localStorage.getItem("image_url");
}

//
// ========
// + *New* Reset button  +
// ========
//

document.getElementById("reset_button").addEventListener("click", reset_data);
function reset_data() {
  if (confirm("⚠ Beep boop!? Are you sure you want to reset all your data?")) {
    document.getElementById("reset_button").innerHTML =
      "<img style='padding-bottom:10px;' class='loading-svg' src='/assets/img/loading-red.svg'> <span>Resetting...</span><span>Please wait!</span>";
    localStorage.clear();
    setTimeout(function () {
      location.reload();
    }, 5000);
  }
}

//
// ========
// + UI Tweaks  +
// These features are not essential, but they make everything look better & feel better.
// ========
//

// UI Tweaks: Force saturn header to use white color.
document
  .querySelector("#force_white_color_header")
  .addEventListener("click", function () {
    if (localStorage.getItem("force_white_color_header")) {
      localStorage.removeItem("force_white_color_header");
      document.querySelector(".sat-header").style.color = "var(--sat-ids)";
      document.querySelector(".apps_list").style.color = "var(--sat-ids)";
    } else {
      localStorage.setItem("force_white_color_header", true);
      document.querySelector(".sat-header").style.color = "#fff";
      document.querySelector(".apps_list").style.color = "#fff";
    }
  });

if (localStorage.getItem("force_white_color_header")) {
  document.querySelector(".sat-header").style.color = "#fff";
  document.querySelector(".apps_list").style.color = "#fff";
}

// UI Tweak: Make all text bold

document.querySelector("#bold_text").addEventListener("click", function () {
  if (localStorage.getItem("bold_text")) {
    localStorage.removeItem("bold_text");
    document.querySelector("body").style.fontWeight = "normal";
  } else {
    localStorage.setItem("bold_text", true);
    document.querySelector("body").style.fontWeight = "600";
  }
});

if (localStorage.getItem("bold_text")) {
  document.querySelector("body").style.fontWeight = "600";
}

// UI Tweak: Use Sans Serif as default font
document.querySelector("#browser_font").addEventListener("click", function () {
  if (localStorage.getItem("browser_font")) {
    localStorage.removeItem("browser_font");
    document.querySelector("body").style.fontFamily = "var(--default-font)";
  } else {
    localStorage.setItem("browser_font", true);
    document.querySelector("body").style.fontFamily = "sans-serif";
  }
});

if (localStorage.getItem("browser_font")) {
  document.querySelector("body").style.fontFamily = "sans-serif";
}

// Check internet connection status
window.addEventListener(
  "load",
  function (connection_ss) {
    if (navigator.onLine) {
    } else {
      document.getElementById("connection_status").style.display = "block";
    }
  },
  false
);

// $(".settings-content").on("scroll", function () {
//   var threshold = 1;

//   if ($(".settings-content").scrollTop() > threshold) {
//     $(".modal-title").addClass("default-font");
//   } else {
//     $(".modal-title").removeClass("default-font");
//   }
// });

// $(".settings-content").on("hide.bs.modal", function (e) {
//   $(".modal-title").removeClass("increase-font");
// });