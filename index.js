var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var AMPM = "AM";

var monthNum = today.getMonth();
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var month = monthNames[monthNum]
var date = today.getDay();

if (hours < 10) {
    hours = "0" + hours;
}
if (hours > 12) {
    AMPM = "PM";
    hours -= 12;
}

var time = hours + ":" + minutes + " " + AMPM;
var day = month + " " + date;

$('#time').html(time);
$('#date').html(day);