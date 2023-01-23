var today = new Date()
var hours = today.getHours()
var minutes = today.getMinutes()
var AMPM = 'AM'

var monthNum = today.getMonth()
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var month = monthNames[monthNum]
var date = today.getDate()

if (hours < 10) {
    hours = "0" + hours
}
if (minutes < 10) {
    minutes = "0" + minutes
}
if (hours > 12) {
    AMPM = "PM"
    hours -= 12
}

var time = hours + ":" + minutes + " " + AMPM
var day = month + " " + date

$('#time').html(time)
$('#date').html(day)

$('#volume').click(function () {
    if ($('#volumeState').attr('class') === 'progressBra') {
        $('#wifi').css('display', 'none')
        $('#battery').css('display', 'none')
        $('#volumeState').removeClass('progressBra').addClass('progressBar')
    }
    else if ($('#volumeState').attr('class') === 'progressBar') {
        $('#wifi').css('display', '')
        $('#battery').css('display', '')
        $('#volumeState').removeClass('progressBar').addClass('progressBra')
    }
})

$('#wifi').click(function () {
    if ($('#wifiState').attr('class') === 'wifiBra') {
        $('#battery').css('display', 'none')
        $('#volume').css('display', 'none')
        $('#wifiState').removeClass('wifiBra').addClass('wifiBar').html('<p style="margin: 0;" class="text">HomeWiFi<br>Connected, Secured</p>')
    }
    else if ($('#wifiState').attr('class') === 'wifiBar') {
        $('#battery').css('display', '')
        $('#volume').css('display', '')
        $('#wifiState').removeClass('wifiBar').addClass('wifiBra').html('')
    }
})

$('#battery').click(function () {
    if ($('#batteryState').attr('class') === 'batteryBra') {
        $('#wifi').css('display', 'none')
        $('#volume').css('display', 'none')
        $('#batteryState').removeClass('batteryBra').addClass('batteryBar').html('<p style="margin: 0;" class="text">Battery Status: 69%</p>')
    }
    else if ($('#batteryState').attr('class') === 'batteryBar') {
        $('#wifi').css('display', '')
        $('#volume').css('display', '')
        $('#batteryState').removeClass('batteryBar').addClass('batteryBra').html('')
    }
})