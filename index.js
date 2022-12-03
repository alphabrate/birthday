const ml = ["01","02","03","04","05","06","07","08","09","10","11","12","01"]
const dl = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","01"]
const dateNow = new Date();
const dateToday = {
    "y": `${dateNow.getFullYear()}`,
    "m": `${ml[dateNow.getMonth()]}`,
    "d": `${ml[dateNow.getDate()-1]}`
}
var dateSep = {
    "y": [
        `${dateToday.y.split("")[0]}`,
        `${dateToday.y.split("")[1]}`,
        `${dateToday.y.split("")[2]}`,
        `${dateToday.y.split("")[3]}`
    ],
    "m": [
        `${dateToday.m.split("")[0]}`,
        `${dateToday.m.split("")[1]}`
    ],
    "d": [
        `${dateToday.d.split("")[0]}`,
        `${dateToday.d.split("")[1]}`
    ]
};

document.getElementById("y1").placeholder = dateSep.y[0];
document.getElementById("y2").placeholder = dateSep.y[1];
document.getElementById("y3").placeholder = dateSep.y[2];
document.getElementById("y4").placeholder = dateSep.y[3];
document.getElementById("m1").placeholder = dateSep.m[0];
document.getElementById("m2").placeholder = dateSep.m[1];
document.getElementById("d1").placeholder = dateSep.d[0];
document.getElementById("d2").placeholder = dateSep.d[1];

var a = document.getElementsByTagName("input");
for(let i=0;i<a.length;i++){
    a[i].addEventListener("keydown",w=>{
        if(w.key=="Backspace"){
            try{
                a[i].value = "";
                a[i-1].value = "";
                a[i-1].focus();
            }catch{}
        }
        if(w.key=="Delete"){
            try{
                a[i].value = "";
                a[i+1].value = "";
                a[i+1].focus();
            }catch{}
        }
        if(w.key=="ArrowRight"){
            try{
                a[i+1].focus();
            }catch{}
        }
        if(w.key=="ArrowLeft"){
            try{
                a[i-1].focus();
            }catch{}
        }
    });
    a[i].addEventListener("input",w=>{
        w.preventDefault();
        let q = w.data;
        q=parseInt(q);
        if(isNaN(q)){a[i].value = 9;return;}
        if(a[i].value.length>1) a[i].value = q;
        var bok=0;
        for(let j=0;j<a.length;j++){
            if(a[j].value!='') bok++;
        }
        if(bok==8) {
            document.getElementById("submit").style.height = "45px";
            document.getElementById("submit").style.padding = "15px";
            document.getElementById("submit").style.background = "rgba(0, 0, 0, 0.5)";
            document.getElementById("submit").addEventListener("click",()=>{
                var y="";
                var m="";
                var d="";
                for(let j=0;j<4;j++){
                    y+=a[j].value;
                }
                for(let j=4;j<6;j++){
                    m+=a[j].value;
                }
                for(let j=6;j<8;j++){
                    d+=a[j].value;
                }
                console.log(y);
                console.log(m);
                console.log(d);
                top.location = "birthday.html?date="+y+m+d+"&ap=n";
            });
        }
        if(bok<8) {
            document.getElementById("submit").style.height = "0px";
            document.getElementById("submit").style.padding = "0px";
            document.getElementById("submit").style.background = "rgba(0, 0, 0, 0.2)";
        }
        try{
            a[i+1].focus();
        }catch{}
    });
}

