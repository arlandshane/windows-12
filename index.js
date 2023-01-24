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

$('#time').html('<p class="text">' + time + '</p>')
$('#date').html('<p class="text">' + day + '</p>')

$('#volume').click(function () {
    if ($('#volumeState').attr('class') === 'progressBra') {
        $('#wifi').css('display', 'none')
        $('#battery').css('display', 'none')
        $('#bluetooth').css('display', 'none')
        $('#volumeState').removeClass('progressBra').addClass('progressBar')
    }
    else if ($('#volumeState').attr('class') === 'progressBar') {
        $('#wifi').css('display', '')
        $('#battery').css('display', '')
        $('#bluetooth').css('display', '')
        $('#volumeState').removeClass('progressBar').addClass('progressBra')
    }
})

$('#wifi').click(function () {
    if ($('#wifiState').attr('class') === 'wifiBra') {
        $('#battery').css('display', 'none')
        $('#volume').css('display', 'none')
        $('#bluetooth').css('display', 'none')
        $('#wifiState').removeClass('wifiBra').addClass('wifiBar').html('<p class="text">Home WiFi<br><em>Connected, Secure</em></p>')
    }
    else if ($('#wifiState').attr('class') === 'wifiBar') {
        $('#battery').css('display', '')
        $('#volume').css('display', '')
        $('#bluetooth').css('display', '')
        $('#wifiState').removeClass('wifiBar').addClass('wifiBra').html('')
    }
})

$('#battery').click(function () {
    if ($('#batteryState').attr('class') === 'batteryBra') {
        $('#wifi').css('display', 'none')
        $('#volume').css('display', 'none')
        $('#bluetooth').css('display', 'none')
        navigator.getBattery().then(function checkLevel(battery) {
            var batteryLevel = battery.level * 100
            var batteryStatus = (battery.charging ? "Charging" : "Discharging")
            $('#batteryState').html('<p class="text">' + batteryLevel + '% Remaining<br><em>' + batteryStatus + '</em></p>')
        })
        $('#batteryState').removeClass('batteryBra').addClass('batteryBar')
    }
    else if ($('#batteryState').attr('class') === 'batteryBar') {
        $('#wifi').css('display', '')
        $('#volume').css('display', '')
        $('#bluetooth').css('display', '')
        $('#batteryState').removeClass('batteryBar').addClass('batteryBra').html('')
    }
})

$('#bluetooth').click(function () {
    if ($('#blueState').attr('class') === 'blueBra') {
        $('#wifi').css('display', 'none')
        $('#volume').css('display', 'none')
        $('#battery').css('display', 'none')
        $('#blueState').removeClass('blueBra').addClass('blueBar').html('<p class="text">Headphones<br><em>Airdopes 601ANC</em></p>')
    }
    else if ($('#blueState').attr('class') === 'blueBar') {
        $('#wifi').css('display', '')
        $('#volume').css('display', '')
        $('#battery').css('display', '')
        $('#blueState').removeClass('blueBar').addClass('blueBra').html('')
    }
})

$()
$('input:textbox').val()