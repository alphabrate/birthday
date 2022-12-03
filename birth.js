var reminder = false;

const birthday = window.location.search.split("?date=")[1].split("&ap=")[0];
const allowpicture = window.location.search.split("?date=")[1].split("&ap=")[1];

const urlWithoutAP = window.location.href.split("&ap=")[0] + "&ap=";

document.getElementById("b").onclick = () => {
    history.back();
}

document.getElementById("t").onclick = () => {
    location.href = urlWithoutAP + "t";
}

document.getElementById("f").onclick = () => {
    location.href = urlWithoutAP + "f";
}

document.addEventListener("keydown",e=>{
    if(reminder) return;
    if(e.key==1)history.back();
    else if(e.key==2)location.href = urlWithoutAP + "t";
    else if(e.key==3)location.href = urlWithoutAP + "f";
});

const month = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec","Jan"];

var birthdaySep = {
    "y": [
        birthday.split("")[0],
        birthday.split("")[1],
        birthday.split("")[2],
        birthday.split("")[3]
    ],
    "m": [
        birthday.split("")[4],
        birthday.split("")[5]
    ],
    "d": [
        birthday.split("")[6],
        birthday.split("")[7]
    ],
    "Y": birthday.substr(0,4),
    "MM": birthday.substr(4, 2),
    "M": month[birthday.substr(4, 2)-1],
    "D": parseInt(birthday.substr(6,2))
}

var timestampdate = `${birthday.substr(0,4)}-${birthday.substr(4, 2)}-${birthday.substr(6,2)}`;
var Qate = new Date(timestampdate);
var timestamp = Qate.getTime();

var Nate = new Date();
var Ntimestamp = parseFloat(Nate.getTime().toPrecision(8));

var diff = Ntimestamp-timestamp;

var days = Math.floor(diff / 86400000);
var years = Math.floor(days/365);
var starSign = zodiac(parseInt(birthdaySep.D), parseInt(birthdaySep.MM));

document.getElementById("birth").value = birthdaySep.D + " " + birthdaySep.M + " " + birthdaySep.Y;
document.getElementById("last").value = days+" days";
document.getElementById("old").value = years+" years old";
document.getElementById("star").value = starSign;

if(allowpicture!="n"){
    document.getElementById("reminder").remove();
    reminder=true;
}

if(allowpicture=="t"){
    document.body.style.backgroundImage = `url(${starSign}.jpg)`;
    document.body.style.backgroundPosition = "center";
}

console.log(starSign);