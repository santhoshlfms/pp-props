import json from "../props.json"

(() => {
    if (!json.length > 0) { throw ("Data load failed") }
    //step 1 - see if the div with id pp-props exists
    var myEle = document.getElementById("pp-props");
    const style = document.createElement('style');
    style.innerHTML = `
      .pp-list {
        list-style-type: square;
      }
      #pp-logo {
        margin-top: 10px;
        overflow: auto;
      }
      .main-log-pp {
        float: left;
      }
      .pp-wallet {
        float: right;
      }
      #content {
        margin-top: 20px;
      }
      .pp-account-connected {
        padding: 5px 0px 0px 15px;
        float: left;
      }
      @media only screen and (min-width: 992px) {
        .pp-container {
          max-width: 50% !important;
        }
      }
    `;
    document.head.appendChild(style);

    if (myEle) {
        // clear the div content and load our value props
        myEle.innerHTML = "";
        // find the type of the
        let type = myEle.getAttribute("data-pp-type")
        let isConnected = myEle.getAttribute("data-pp-isConnected")
        let template = constructDom(type, isConnected)
        setTimeout(() => { myEle.innerHTML = template }, 1000)


    } else {
        // throw error in dom 
        throw ("Selector pp-props not found")
    }

    function constructDom(type, isConnected) {
        let propValue = json.filter(i => i.selector === type)[0];
        let benefitsArray = propValue.benefits;
        let statistics = propValue.statistics
        console.log("isConnected", isConnected, typeof isConnected)
        let li = ""
        benefitsArray.forEach((msg, i) => {
            li += `<li>${msg}</li>`
        })
        console.log(li)
        let template = `
        <div class="pp-container">
            <div id='pp-logo'>
            <span class="main-log-pp">
                <img src="./public/img/pp-main-logo.png" />
            </span>
            <span class="pp-wallet">
                <img src="./public/img/logo-pp.png" style="height:70px" />
            </span>
            <span style="clear:both"></span>
            </div>
            <div id="content">
            ${isConnected == "false" ?
                `<div id="not-connected">
                    <div id='statistics' style="font-weight: bold;">${statistics}</div>
                    <ul class='pp-list'>
                    ${li}
                    </ul>
                </div>` : `<div id='statistics' style="font-weight: bold;">${statistics}</div>
                <div id="connected">
                    <span class="main-log-pp">
                    <img src="./public/img/pp-connected.png" />
                    </span>
                    <span class="pp-account-connected">
                    Your PayPal account is connected
                    </span>
                    <span style="clear:both"></span>
                </div>`} 
            </div>
        </div>`
        return template;
    }
})()