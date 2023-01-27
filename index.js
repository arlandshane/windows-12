var today = new Date()
var hours = today.getHours()
var minutes = today.getMinutes()
var date = today.getDate()

var monthNum = today.getMonth()
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

var weekNum = today.getDay()
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var month = monthNames[monthNum]

if (hours < 10) {
    hours = "0" + hours
}
if (minutes < 10) {
    minutes = "0" + minutes
}

var time = hours + ":" + minutes
var day = '<em>' + month + " " + date + '</em>'

$('.weekDay').html('<p>' + weekDay[weekNum] + ',' + ' ' + date + ' ' + monthNames[monthNum] + '</p>')
$('.time').html('<p class="time-piece">' + time + '</p>')
$('#time').html('<p class="text">' + time + '</p>')
$('#date').html('<p class="text">' + day + '</p>')

$('#volume').click(function () {
    if ($('#volumeState').attr('class') === 'progressBra') {
        $('#wifi, #battery, #bluetooth').css('display', 'none')
        $('#volumeState').removeClass('progressBra').addClass('progressBar')
    }
    else if ($('#volumeState').attr('class') === 'progressBar') {
        $('#wifi, #battery, #bluetooth').fadeIn()
        $('#volumeState').removeClass('progressBar').addClass('progressBra')
    }
})

$('#wifi').click(function () {
    if ($('#wifiState').attr('class') === 'wifiBra') {
        $('#battery, #volume, #bluetooth').css('display', 'none')
        $('#wifiState').removeClass('wifiBra').addClass('wifiBar').html('<p class="text">Home WiFi<br><em>Connected, Secure</em></p>')
    }
    else if ($('#wifiState').attr('class') === 'wifiBar') {
        $('#battery, #volume, #bluetooth').fadeIn()
        $('#wifiState').removeClass('wifiBar').addClass('wifiBra').html('')
    }
})

$('#battery').click(function () {
    if ($('#batteryState').attr('class') === 'batteryBra') {
        $('#wifi, #volume, #bluetooth').css('display', 'none')
        navigator.getBattery().then(function checkLevel(battery) {
            var batteryLevel = parseInt(battery.level * 100)
            var batteryStatus = (battery.charging ? "Charging" : "Discharging")
            $('#batteryState').html('<p class="text">' + batteryStatus + '<br><em>' + batteryLevel + '% Remaining</em></p>')
        })
        $('#batteryState').removeClass('batteryBra').addClass('batteryBar')
    }
    else if ($('#batteryState').attr('class') === 'batteryBar') {
        $('#wifi, #volume, #bluetooth').fadeIn()
        $('#batteryState').removeClass('batteryBar').addClass('batteryBra').html('')
    }
})

$('#bluetooth').click(function () {
    if ($('#blueState').attr('class') === 'blueBra') {
        $('#wifi, #volume, #battery').css('display', 'none')
        $('.dis-connect').css('display', 'flex')
        $('#blueState').removeClass('blueBra').addClass('blueBar').html('<p class="text">Headphones<br><em>Airdopes 601ANC</em></p>')
    }
    else if ($('#blueState').attr('class') === 'blueBar') {
        $('#wifi, #volume, #battery').fadeIn()
        $('.dis-connect').css('display', 'none')
        $('#blueState').removeClass('blueBar').addClass('blueBra').html('')
    }
})

$('.musicDetails, .musicControls').css('display', 'none')
$('.music').click(function () {
    $('.albumArt').css('border-radius', '20%')
    $('.weatherIcon').css('top', '1vh').css('padding', '0 .5vw')
    $('.place').css('display', 'none')
    $('.weather').css('display', 'flexbox').css('flex-direction', 'column').css('align-items', 'center')
    $('.musicDetails').fadeIn('fast')
    $('.musicControls').css('display', 'flex')

})

$('.weather').click(function () {
    $('.albumArt').css('border-radius', '100%')
    $('.weatherIcon').css('top', '1rem').css('padding', '0')
    $('.place').fadeIn('fast')
    $('.weather').css('display', 'flex').css('flex-direction', '').css('align-items', '').css('justify-contents', 'space-between')
    $('.musicDetails, .musicControls').css('display', 'none')
})

$('#windows').click(function () {
    if ($('#start').attr('class') === 'started') {
        $('.user, .start, .h2').fadeIn('fast')
        $('.user').css('display', 'flex')
        $('.dis-connect').css('display', 'none')
        $("#start").removeClass('started').addClass('toStart')
    }
    else if ($('#start').attr('class') === 'toStart') {
        $('.user, .start, .h2').fadeOut('fast')
        $("#start").removeClass('toStart').addClass('started')
    }
})

function alert() {
    alert('hello')
}