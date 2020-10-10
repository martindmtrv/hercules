const fs = require('fs');
const FormData = require('form-data');
const nodeFetch = require("node-fetch");
const fetch = require("fetch-cookie/node-fetch")(nodeFetch);
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// read in the file

const file = JSON.parse(fs.readFileSync("./exerciseIds.json", 'utf-8'));

const result = [];

let key = "";

// get security key
fetch("https://workoutlabs.com/fit/?utm_source=internal-wl&utm_campaign=wl-homepage&utm_medium=internal").then((res) => {
    const cookies = res.headers.get("set-cookie");
    key = cookies.substring(cookies.indexOf("PHPSESSID=")+10, cookies.lastIndexOf(";"));

    scrapeData();
});

let counter = 0;

function scrapeData() {
    const promises = [];
    file.forEach(id => {
        const payload = new FormData();
        
        payload.append("action", "get_ex_content");
        payload.append("exid", id);
        payload.append("security", key);

        let req = new XMLHttpRequest();

        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               result.push(JSON.parse(responseText));
               counter++;
               if (counter >= 478) {
                   console.log(result);
               }
            }
        };
        req.open("POST", "http://www.workoutlabs.com/fit/custom-ajax.php");
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // req.setRequestHeader("Referer", "https://workoutlabs.com/fit/workout-builder/");

        req.send(JSON.stringify(payload));

        
        // promises.push(fetch("https://www.workoutlabs.com/fit/custom-ajax.php", {method: "POST",headers: {"Content-Type": "application/x-www-form-urlencoded", "Referer": "https://workoutlabs.com/fit/workout-builder/"}, body: JSON.stringify(payload)}).then(res => res.json()).then(res => result.push(res)));
    });
}
