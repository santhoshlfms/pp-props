import json from "../props.json"

(() => {
    if (!json.length > 0) { throw ("Data load failed") }
    //step 1 - see if the div with id pp-props exists
    var myEle = document.getElementById("pp-props");
    const style = document.createElement('style');
    style.innerHTML = `
      .note {
        background-color: yellow;
        color:red;
      }`;
    document.head.appendChild(style);
    style.innerHTML = `
      .pp-list {
        list-style-type: square;
      }
    `;
    document.head.appendChild(style);

    if (myEle) {
        // clear the div content and load our value props
        myEle.innerHTML = "";
        // find the type of the
        let type = myEle.getAttribute("type")
        let template = constructDom(type)
        myEle.innerHTML = template

    } else {
        // throw error in dom 
        throw ("Selector pp-props not found")
    }

    function constructDom(type) {
        let propValue = json.filter(i => i.selector === type)[0];
        let benefitsArray = propValue.benefits;
        let statistics = propValue.statistics
        let li = ""
        benefitsArray.forEach((msg, i) => {
            li += `<li>` + msg + `</li>`
        })

        let template = `<div id='pp-logo'><img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png"/></div>
                         <div><p><b>An instant global business.</b></p><p>One integration for all your online payment needs.</p></div>   
                        <div><p>Benefits</p><ul class='pp-list'>` + li + `</ul><div id='statistics'>`+statistics+`</div></div>`
        return template;
    }
})()