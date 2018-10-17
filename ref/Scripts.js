var page = 0;

function discordLink() {
    window.open("https://discord.gg/UERTFYp");
}

function registerLink() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdFfkifcRA742UN7zZEtijdaB_Q2-rHXnAVoRRfBP-OAupRGg/viewform");
}


function leaderboardsLink() {
    location.replace("index.html");
}

function teamLink() {
    window.open("https://docs.google.com/spreadsheets/d/1R1t0qVo3brCcibsGtkVD9lLULXPeoKwaqNoXAwN1lN8/edit#gid=0");
}

function rulesLink() {
    location.replace("rules.html");
}

function prev() {
    if (page > 0) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("before " + page);
                page = page - 1;
                document.getElementById("data").innerHTML =
                    "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vQYTTehtnPAT-jqbBq99EvthWeA-E50PguTlcJUlV9iWazHXB6WM8i1io7sINUaKGTT0l6wmtLaTEdQ/pubhtml?gid=0&single=true&range=a" + (2 + 25 * page) + ":g" + (26 + page * 25) + "&widget=false&chrome=false\"></iframe>"
                
                console.log("after "+ page);
            }
        };
        xhttp.open("GET", "", true);
        xhttp.send();
    }
}

function next() {
    if (page < 12) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                console.log("before " + page);
                page = page + 1;
                document.getElementById("data").innerHTML =
                    "<iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vQYTTehtnPAT-jqbBq99EvthWeA-E50PguTlcJUlV9iWazHXB6WM8i1io7sINUaKGTT0l6wmtLaTEdQ/pubhtml?gid=0&single=true&range=a" + (2 + 25 * page) + ":g" + (26 + page * 25) + "&widget=false&chrome=false\"></iframe>"
                
                console.log("after "+ page);
            }
        };
        xhttp.open("GET", "", true);
        xhttp.send();
    }
}