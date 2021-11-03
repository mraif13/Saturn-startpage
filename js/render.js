// Add Javascript here.
// Think this should be in Saturn Startpage? Feel free to make a PR.

const appsList = (x) => {
  $(x).append(`<div id="app-1" class="app-content current">
          <div class="popup">
            <div id="apps">
              <a href="https://github.com">
                <div class="app">
                  <i class="lab la-github"></i>
                  <span>Github</span>
                </div></a
              >
              <a href="https://youtube.com">
                <div class="app">
                  <span>YouTube</span>
                  <i class="lab la-youtube"></i></div
              ></a>
              <a href="https://reddit.com">
                <div class="app">
                  <span>Reddit</span>
                  <i class="lab la-reddit"></i></div
              ></a>
              <a href="https://mail.protonmail.com">
                <div class="app">
                  <span>Proton Mail </span>
                  <i class="las la-inbox"></i></div
              ></a>

              <a href="https://mail.google.com">
                <div class="app">
                  <span>Gmail</span>
                  <i class="las la-envelope"></i></div
              ></a>
            </div>
          </div>
        </div>
        
        <div id="app-2" class="app-content">
          <div class="popup">
            <div id="apps">
              <a href="https://udemy.com">
                <div class="app">
                  <i class="las la-chalkboard-teacher"></i>
                  <span>Udemy</span>
                </div></a
              >
              <a href="http://moodle.rbs.ac.mu/moodle/">
                <div class="app">
                  <i class="las la-file-alt"></i>
                  <span>Rushm.. Moodle</span>
                </div></a
              >
              <a href="https://learn-anything.xyz/">
                <div class="app">
                  <i class="lar la-map"></i>
                  <span>Learn Anything</span>
                </div></a
              >
              <a href="https://docs.google.com">
                <div class="app">
                  <i class="las la-file-alt"></i>
                  <span>Google Docs</span>
                </div></a
              >
              <a href="https://www.litcharts.com/">
                <div class="app">
                  <i class="las la-book"></i>
                  <span>Litcharts</span>
                </div></a
              >
            </div>
          </div>
        </div>

        <div id="app-3" class="app-content">
          <div class="popup">
            <div class="popup">
              <div id="apps">
                <a href="https://instagram.com">
                  <div class="app">
                    <i class="lab la-instagram"></i>
                    <span>Instagr..</span>
                  </div></a
                >
                <a href="https://twitter.com">
                  <div class="app">
                    <i class="lab la-twitter"></i>
                    <span>Twitter</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
        
                <div id="app-4" class="app-content">
          <div class="popup">
            <div class="popup">
              <div class="popup">
                <div id="apps">
                  <a href="https://youtube.com">
                    <div class="app">
                      <i class="lab la-youtube"></i>
                      <span>YouTube</span>
                    </div></a
                  >
                  <a href="https://netflix.com">
                    <div class="app">
                      <i class="las la-film"></i>
                      <span>Netflix</span>
                    </div></a
                  >
                  <a href="https://twitch.tv">
                    <div class="app">
                      <i class="lab la-twitch"></i>
                      <span>Twitch</span>
                    </div></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>`);
};

const moreApps = (y) => {
  $(y).append(`<div id="cutieapps">
              <a href="https://9to5mac.com/">
                <div class="cuteapps">
                  <i class="lab la-apple"></i>
                  <p>9to5mac</p>
                </div></a
              >
              <a href="https://aliexpress.com">
                <div class="cuteapps">
                  <i class="las la-shopping-basket"></i>
                  <p>AliExpress</p>
                </div></a
              >
              <a href="https://dev.to/">
                <div class="cuteapps">
                  <i class="lab la-dev"></i>
                  <p>Dev.to</p>
                </div></a
              >
              <a href="https://devdocs.io/">
                <div class="cuteapps">
                  <i class="las la-book"></i>
                  <p>Dev docs</p>
                </div></a
              >
              <a href="https://orchomenos.github.io/Design-resources/">
                <div class="cuteapps">
                  <i class="las la-pencil-ruler"></i>
                  <p>Design resources</p>
                </div></a
              >
              <a href="https://ebay.com">
                <div class="cuteapps">
                  <i class="lab la-ebay"></i>
                  <p>eBay</p>
                </div></a
              >
              <a href="https://facebook.com">
                <div class="cuteapps">
                  <i class="lab la-facebook-square"></i>
                  <p>Facebook</p>
                </div></a
              >
              <a href="https://freecodecamp.org">
                <div class="cuteapps">
                  <i class="lab la-free-code-camp"></i>
                  <p>Freecodecamp</p>
                </div></a
              >
              <a href="https://maps.google.com">
                <div class="cuteapps">
                  <i class="las la-map-marked"></i>
                  <p>Google Maps</p>
                </div></a
              >
              <a href="https://internetingishard.com/">
                <div class="cuteapps">
                  <i class="las la-wifi"></i>
                  <p>Interneting is hard</p>
                </div></a
              >
              <a href="https://learn-anything.xyz/">
                <div class="cuteapps">
                  <i class="las la-map"></i>
                  <p>Learn anything</p>
                </div></a
              >
              <a href="https://mail.protonmail.com/login">
                <div class="cuteapps">
                  <i class="las la-envelope"></i>
                  <p>Protonmail</p>
                </div></a
              >
              <a href="https://warez.now.sh/">
                <div class="cuteapps">
                  <i class="las la-skull-crossbones"></i>
                  <p>Warezz</p>
                </div></a
              >
              <a href="https://www.producthunt.com/">
                <div class="cuteapps">
                  <i class="lab la-product-hunt"></i>
                  <p>Product Hunt</p>
                </div></a
              >
              <a href="https://spotify.com">
                <div class="cuteapps">
                  <i class="lab la-spotify"></i>
                  <p>Spotify webplayer</p>
                </div></a
              >
              <a href="https://www.pinterest.com/">
                <div class="cuteapps">
                  <i class="lab la-pinterest"></i>
                  <p>Pinterest</p>
                </div></a
              >
              <a href="https://unsplash.com">
                <div class="cuteapps">
                  <i class="las la-image"></i>
                  <p>Unsplash</p>
                </div></a
              >
              <a href="https://wikipedia.com">
                <div class="cuteapps">
                  <i class="lab la-wikipedia-w"></i>
                  <p>Wikipedia</p>
                </div></a
              >
              <a href="https://web.whatsapp.com">
                <div class="cuteapps">
                  <i class="lab la-whatsapp"></i>
                  <p>WhatsApp</p>
                </div></a
              >
              <a href="https://raindrop.io">
                <div class="cuteapps">
                  <i class="las la-cloud-rain"></i>
                  <p>Raindrop</p>
                </div></a
              >
            </div>`);
};
const settingAbout = (z) => {
  $(z).append(`<div id="tab-3" class="tab-content slide-up-fade-in">
            <div class="settings-background">
              <h6>
                <i class="las la-folder-open"></i> |
                <i class="las la-cog"></i> Settings /
                <i class="las la-info-circle"></i> About /
              </h6>
              <h3><i class="las la-info-circle"></i> About</h3>
              <p>Version, created by & more..</p>
              <p>
                Version:
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  class="easter-egg1"
                  title="WARNING: if u click this, you're on your own. "
                  >🪐</a
                >
                <a
                  href="https://github.com/mraif13/Saturn-startpage/releases/tag/v3.1.0"
                  target="_blank"
                  >v3.2.0 [Milky Way] <i class="las la-external-link-alt"></i
                ></a>
                <br />
                Want to help make saturn better?
                <a
                  href="https://github.com/mraif13/Saturn-startpage/projects/1"
                  target="_blank"
                  >Contribute <i class="las la-external-link-alt"></i
                ></a>
              </p>
              <div class="socials">
                <div class="popup">
                  <div id="apps">
                    <a href="https://github.com/mraif13/saturn-startpage">
                      <div class="app">
                        <i class="las la-code"></i>
                        <span>Source Code</span>
                      </div></a
                    >
                    <a href="https://github.com/mraif13">
                      <div class="app">
                        <i class="lab la-github"></i>
                        <span>mraif13 Github</span>
                      </div></a
                    >
                    <a
                      href="https://github.com/mraif13/Saturn-startpage/blob/Chromium/info.md"
                    >
                      <div class="app">
                        <i class="lab la-chrome"></i>
                        <span>Chrome version</span>
                      </div></a
                    >
                  </div>
                </div>
              </div>
              <h1></h1>
              <div class="dark-mode-bg5">
                <h3><i class="lab la-paypal"></i> Support Saturn Startpage</h3>
                <br />
                <p>
                  Saturn Startpage is free and doesn't have any ads, if it has
                  saved you time or helped you and you'd like to help out,
                  Here's my
                  <a
                    href="https://www.paypal.com/paypalme/raifs"
                    target="_blank"
                    >Paypal <i class="las la-external-link-alt"></i
                  ></a>
                </p>

                <p>- Thanks! <i class="las la-grin-beam"></i></p>
              </div>
            </div>
          </div>`);
};
const render_in_js = (x, y, z) => {
  let apps_list = $("#apps_list");
  let more_apps = $("#more_apps");
  let setting_about = $("#setting_about");

  // pls dont break
  iLoadthings = setTimeout(function () {
    appsList(apps_list);
    moreApps(more_apps);
    settingAbout(setting_about);
  });
};
window.onload = render_in_js();
