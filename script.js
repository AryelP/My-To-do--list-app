
// for input

const dt = new Date();
const date = dt.getDate();
const mdex = dt.getMonth();
const year = dt.getFullYear();
let hours = dt.getHours();
const seconds = dt.getSeconds();
const minutes = dt.getMinutes().toString().padStart(2, 0);

const today = dt.toISOString().split('T')[0];
const mname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = mname[mdex];
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;

let disday = document.getElementById("setdate");
disday.min = today;
disday.value = today;

const time = month + " " + date + ", " + year + " " + hours + ":" + minutes + " " + ampm;
document.getElementById("curdate").value = time;

let distime = document.getElementById("timepick");

let setTime = hours + 1;
let sethours = setTime.toString().padStart(2, '0');
let setminutes = dt.getMinutes().toString().padStart(2, '0');
let formattedsetTime = sethours + ":" + minutes;
distime.value = formattedsetTime;
distime.min = formattedsetTime;



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("");
//     span.className = "t-data";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }


var i;
for (i = 0; i < myNodelist.length; i++) {
    var span1 = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span1.className = "setDate";
    span1.appendChild(txt);
    myNodelist[i].appendChild(span1);
}

var i;
for (i = 0; i < myNodelist.length; i++) {
    var span2 = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span2.className = "setHour";
    span2.appendChild(txt);
    myNodelist[i].appendChild(span2);
}

var i;
for (i = 0; i < myNodelist.length; i++) {
    var button1 = document.createElement("div");
    var txt = document.createTextNode(":");
    button1.className = "td-btn";
    button1.appendChild(txt);
    myNodelist[i].appendChild(button1);
}

var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}





// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");

    var span01 = document.createElement("span");
    var inputValue = document.getElementById("myInput").value;
    var txt3 = document.createTextNode(inputValue);
    span01.className = "t-data";
    span01.appendChild(txt3);
    li.appendChild(span01);


    //for date
    var span1 = document.createElement("span");
    var dateinput = document.getElementById("setdate").value;
    // dt.setDate(dateinput);
    let st = new Date(dateinput);
    let gm = st.getMonth();
    let gd = st.getDate();
    let gy = st.getFullYear();
    let gmn = mname[gm];

    let fd = gmn + " " + gd + ", " + gy;

    var txt1 = document.createTextNode(fd);
    span1.className = "setDate";
    span1.appendChild(txt1);

    // document.body.innerHTML = dateinput;



    //for hour

    var span2 = document.createElement("span");
    var hourinput = document.getElementById("timepick").value;
    let hour = parseInt(hourinput.split(":")[0]);
    let minutes = parseInt(hourinput.split(":")[1]);
    minutes = minutes.toString().padStart(2, 0);
    let setampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    let mh = hour.toString().padStart(2, 0);
    let cm = mh + ":" + minutes + " " + setampm;



    var txt2 = document.createTextNode(cm);
    span2.className = "setHour";
    span2.appendChild(txt2);

    //for input

    //3 input
    // var allinput = inputValue + " " + date1 + " " + hour1;




    li.appendChild(span1);
    li.appendChild(span2);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";


    var button1 = document.createElement("div");
    var txt = document.createTextNode(":");
    button1.className = "td-btn";
    button1.appendChild(txt);
    myNodelist[i].appendChild(button1);


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }



}

//for button



