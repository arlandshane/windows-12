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

$('#volume').click(function () {
    if ($('#volumeState').attr('class') === 'progressBra') {
        volumeFocus()
    }
    else if ($('#volumeState').attr('class') === 'progressBar') {
        volumeBG()
    }
})

$('#wifi').click(function () {
    if ($('#wifiState').attr('class') === 'wifiBra') {
        wifiFocus()
    }
    else if ($('#wifiState').attr('class') === 'wifiBar') {
        wifiBG()
    }
})

$('#battery').click(function () {
    if ($('#batteryState').attr('class') === 'batteryBra') {
        batteryFocus()
    }
    else if ($('#batteryState').attr('class') === 'batteryBar') {
        batteryBG()
    }
})

$('.earbuds').click(blueFocused)
$('#bluetooth').click(blueBG)

$('.musicDetails, .musicControls').css('display', 'none')
$('.music').click(musicFocus)
$('.weather').click(weatherFocus)

$('#windows').click(function () {
    if ($('#start').attr('class') === 'started') {
        toStart()
        fileOut()
    }
    else if ($('#start').attr('class') === 'toStart') {
        started()
    }

})

$('#tabs, #search').click(function () {
    if ($('#start').attr('class') === 'toStart' || $('#file').attr('class') === 'f-off') {
        started()
        fileOut()
    }
})

$('.dis-connect').click(function () {
    if ($('.dis-connect').html() === 'Disconnect') {
        $('.dis-connect').html('Connect')
    }
    else if ($('.dis-connect').html() === 'Connect') {
        $('.dis-connect').html('Disconnect')
    }
})

$('#fileExp').click(function () {
    if ($('#file').attr('class') === 'f-on') {
        started()
        fileIn()
    }
    else if ($('#file').attr('class') === 'f-off') {
        fileOut()
    }
})

function volumeFocus() {
    $('#wifi, #battery, #bluetooth').css('display', 'none')
    $('#volumeState').removeClass('progressBra').addClass('progressBar')
}

function volumeBG() {
    $('#wifi, #battery, #bluetooth').fadeIn()
    $('#volumeState').removeClass('progressBar').addClass('progressBra')
}

function wifiFocus() {
    $('#battery, #volume, #bluetooth').css('display', 'none')
    $('#wifiState').removeClass('wifiBra').addClass('wifiBar').html('<p class="text">Home WiFi<br><em>Connected, Secure</em></p>')
}

function wifiBG() {
    $('#battery, #volume, #bluetooth').fadeIn()
    $('#wifiState').removeClass('wifiBar').addClass('wifiBra').html('')
}

function batteryFocus() {
    $('#wifi, #volume, #bluetooth').css('display', 'none')
    navigator.getBattery().then(function checkLevel(battery) {
        var batteryLevel = parseInt(battery.level * 100)
        var batteryStatus = (battery.charging ? "Charging" : "Discharging")
        $('#batteryState').html('<p class="text">' + batteryStatus + '<br><em>' + batteryLevel + '% Remaining</em></p>')
    })
    $('#batteryState').removeClass('batteryBra').addClass('batteryBar')
}

function batteryBG() {
    $('#wifi, #volume, #bluetooth').fadeIn()
    $('#batteryState').removeClass('batteryBar').addClass('batteryBra').html('')
}

function blueFocused() {
    if ($('#blueState').attr('class') === 'blueBar') {
        $('#wifi, #volume, #battery, #bluetooth').fadeIn()
        $('.dis-connect, .earbuds').css('display', 'none')
        $('#blueState').removeClass('blueBar').addClass('blueBra').html('')
    }
}

function blueBG() {
    if ($('#blueState').attr('class') === 'blueBra') {
        $('.earbuds').css('display', '')
        $('#wifi, #volume, #battery, #bluetooth').css('display', 'none')
        $('.dis-connect').css('display', 'flex')
        $('#blueState').removeClass('blueBra').addClass('blueBar').html('<p class="text">Headphones<br><em>Airpods Pro</em></p>')
    }
}

function musicFocus() {
    $('.albumArt').css('border-radius', '20%')
    $('.weatherIcon').css('top', '1vh').css('padding', '0 .5vw')
    $('.place').css('display', 'none')
    $('.weather').css('display', 'flexbox').css('flex-direction', 'column').css('align-items', 'center')
    $('.musicDetails').fadeIn('fast')
    $('.musicControls').css('display', 'flex')
}

function weatherFocus() {
    $('.albumArt').css('border-radius', '100%')
    $('.weatherIcon').css('top', '1rem').css('padding', '0')
    $('.place').fadeIn('fast')
    $('.weather').css('display', 'flex').css('flex-direction', '').css('align-items', '').css('justify-contents', 'space-between')
    $('.musicDetails, .musicControls').css('display', 'none')
}

function toStart() {
    $('.user, .start, .h2').fadeIn('fast')
    $('.user').css('display', 'flex')
    $('.dis-connect').css('display', 'none')
    $("#start").removeClass('started').addClass('toStart')
}

function started() {
    $('.user, .start, .h2').css('display', 'none')
    $("#start").removeClass('toStart').addClass('started')
}

function fileIn() {
    $('.file-explorer').fadeIn()
    $('#file').removeClass('f-on').addClass('f-off')
}

function fileOut() {
    $('.file-explorer').css('display', 'none')
    $('#file').removeClass('f-off').addClass('f-on')
}