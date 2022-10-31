import json from "../props.json";
(() => {
    if (!json.length > 0) {
        throw "Data load failed";
    }
    //step 1 - see if the div with id pp-props exists
    var myEle = document.getElementById("pp-props");
    const style = document.createElement("style");
    style.innerHTML = `
    .pp-list {
        list-style-type: square;
      }
      #pp-recommended {
        margin-top: 10px;
        overflow: auto;
      }
      #pp-logo {
        overflow: auto;
        margin: 0px !important;
      }
      .main-log-pp {
        float: left;
      }
      .pp-wallet {
        float: right;
      }
  
      #content {
        margin-top: 10px;
      }
      .pp-account-connected {
        padding: 5px 0px 0px 15px;
        float: left;
      }
      #container-content {
        margin-left: 7%;
        float: left;
      }
      #connected-statistics {
        margin-bottom: 5%;
      }
      .connected-content {
        overflow: auto;
        margin-top: 5px;
      }
      .clear {
        clear: both;
      }
      .get-started-button {
        color: white;
        background-color: #222D65;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        padding: 10px 35px;
        margin-top: 10px;
        display: inline-block;
        margin-left: 20px;
      }
      @media only screen and (max-width: 600px) {
        .pp-wallet {
            display: none
        }
      }
      @media only screen and (min-width: 600px and max-width: 992px) {
        .pp-container {
            max-width: 50% !important;
          }
      }
      @media only screen and (min-width: 992px) {
        .pp-container {
            max-width: 70% !important;
          }
      } 
    
    `;
    document.head.appendChild(style);

    if (myEle) {
        // clear the div content and load our value props
        myEle.innerHTML = "";
        // find the type of the
        let type = myEle.getAttribute("data-pp-type");
        let isConnected = myEle.getAttribute("data-pp-connected") === "false" ? false : true;
        let onboardURL = myEle.getAttribute("data-pp-onboardlink");
        let emailVerified = myEle.getAttribute("data-pp-email-verified") === "false" ? false : true;
        let template = constructDom(type, isConnected, onboardURL, emailVerified);

        setTimeout(() => {
            myEle.innerHTML = template;
            loadScript();
            if (onboardURL.length > 0 && !isConnected) {
                var link = document.getElementById("onboardURL");
                link.setAttribute("href", onboardURL + "&displayMode=minibrowser");
            } else {
                var ele = document.getElementById("onboardURL");
                ele.remove()
            }
            if (isConnected) {
                myEle.removeAttribute('data-pp-onboardlink')
            }
        }, 1000);
        // let inject the script for mini browser"
    } else {
        // throw error in dom
        throw "Selector pp-props not found";
    }

    function constructDom(type, isConnected, onboardURL, emailVerified) {
        let propValue = json.filter((i) => i.selector === type)[0];
        let benefitsArray = propValue.benefits;
        let statistics = propValue.statistics;
        let li = "";
        benefitsArray.forEach((msg, i) => {
            li += `<li>${msg}</li>`;
        });
        let emailVerifiedTemplate =
            emailVerified ? `<div class="connected-content">
                    <div class="main-log-pp">
                    <img src="./public/img/pp-connected.png" />
                    </div>
                    <div class="pp-account-connected">
                    Email Verified
                    </div>
                    <div class="clear"></div>
                </div>`
                : ``;

        let template = `
                    <div class="pp-container">
                    <div id="pp-recommended">
                    <img src="./public/img/pp-recom.png" height="15" />
                    </div>
                    ${isConnected ? ` <div id="connected">
                    <div id='pp-logo'>
                        <div class="main-log-pp">
                        <img src="./public/img/pp-main-logo.png" />
                        </div>
                        <div id="container-content">
                        <div id='connected-statistics'>${statistics}</div>
                        <div class="connected-content">
                            <div class="main-log-pp">
                            <img src="./public/img/pp-connected.png" />
                            </div>
                            <div class="pp-account-connected">
                            Your PayPal account is connected
                            </div>
                            <div class="clear"></div>
                        </div>
                            ${emailVerifiedTemplate}
                        </div>
                        <div class="pp-wallet">
                        <img src="./public/img/logo-pp.png" style="height:70px" />
                        </div>
                        <div class="clear"></div>
                    </div>
                    </div>`
                : `
                    <div id="not-connected">
                    <div id='pp-logo'>
                        <div class="main-log-pp">
                        <img src="./public/img/pp-main-logo.png" />
                        </div>
                        <div class="pp-wallet">
                        <img src="./public/img/logo-pp.png" style="height:70px" />
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div id="content">
                        <div id='statistics'>${statistics}</div>
                        <ul class='pp-list'>
                        ${li}
                        </ul>
                
                        <div dir="ltr" style="text-align: left;" trbidi="on">
                        <script>
                            (function (d, s, id) {
                            var js, ref = d.getElementsByTagName(s)[0];
                            if (!d.getElementById(id)) {
                                js = d.createElement(s);
                                js.id = id;
                                js.async = true;
                                js.src = "https://www.paypal.com/webapps/merchantboarding/js/lib/lightbox/partner.js";
                                ref.parentNode.insertBefore(js, ref);
                            }
                            }(document, "script", "paypal-js"));
                
                        </script>
                        <a data-paypal-button="true" href="" class="get-started-button"
                            target="PPFrame" id="onboardURL">Get started</a>
                        </div>
                    </div>
                    </div> `
            }
                </div > `;
        return template;
    }

    //util functions
    function loadScript() {
        (function (d, s, id) {
            var js,
                ref = d.getElementsByTagName(s)[0];
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.async = true;
                js.src =
                    "https://www.paypal.com/webapps/merchantboarding/js/lib/lightbox/partner.js";
                ref.parentNode.insertBefore(js, ref);
            }
        })(document, "script", "paypal-js");
    }
})();
