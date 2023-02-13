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

$('#volume').click(() => {
    if ($('#volumeState').attr('class') === 'progressBra') {
        volumeFocus()
    }
    else if ($('#volumeState').attr('class') === 'progressBar') {
        volumeBG()
    }
})

$('#wifi').click(() => {
    if ($('#wifiState').attr('class') === 'wifiBra') {
        wifiFocus()
    }
    else if ($('#wifiState').attr('class') === 'wifiBar') {
        wifiBG()
    }
})

$('#battery').click(() => {
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

$('#windows').click(() => {
    if ($('#start').attr('class') === 'started') {
        toStart()
        fileOut()
    }
    else if ($('#start').attr('class') === 'toStart') {
        started()
    }

})

$('#tabs, #search').click(() => {
    if ($('#start').attr('class') === 'toStart' || $('#file').attr('class') === 'f-off') {
        started()
        fileOut()
    }
})

$('.dis-connect').click(() => {
    if ($('.dis-connect').html() === 'Disconnect') {
        $('.dis-connect').html('Connect')
    }
    else if ($('.dis-connect').html() === 'Connect') {
        $('.dis-connect').html('Disconnect')
    }
})

$('#fileExp').click(() => {
    if ($('#file').attr('class') === 'f-on') {
        started()
        fileIn()
    }
    else if ($('#file').attr('class') === 'f-off') {
        fileOut()
    }
})

$('#search').click(() => {
    if ($('#searching').attr('class') === 'searchOff') {
        $('#windows, #tabs, #fileExp, #chrome, #photos, #twitter, #instagram, #whatsapp, .hr1').css('display', 'none')
        $('#searching').removeClass('searchOff').addClass('searchOn')
    } else if ($('#searching').attr('class') === 'searchOn') {
        $('#windows, #tabs, #fileExp, #chrome, #photos, #twitter, #instagram, #whatsapp, .hr1').css('display', '')
        $('#searching').removeClass('searchOn').addClass('searchOff')
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
    $('#wifiState').removeClass('wifiBra').addClass('wifiBar').html('<p>Home WiFi<br><em>Connected, Secure</em></p>')
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
        $('#batteryState').html('<p>' + batteryStatus + '<br>' + batteryLevel + '% Remaining</p>')
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
        $('#blueState').removeClass('blueBra').addClass('blueBar').html('<p>Headphones<br><em>Airpods Max</em></p>')
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
    $("#start").removeClass('started').addClass('toStart')
}

function started() {
    $('.user, .start, .h2').css('display', 'none')
    $("#start").removeClass('toStart').addClass('started')
}

function fileIn() {
    $('.file-explorer').fadeIn('fast')
    $('#file').removeClass('f-on').addClass('f-off')
}

function fileOut() {
    $('.file-explorer').css('display', 'none')
    $('#file').removeClass('f-off').addClass('f-on')
}

function bisque() {
    $('.contain, .start, .file-explorer').css('background', 'rgba(210, 210, 200, .8)')
    $('.user').css('background', 'rgba(210, 210, 200, .6)')
    $('p, .text, em').css('color', 'black').css('opacity', '.8')
    $('hr, .hr1, .hr2, .hr3').css('color', 'black').css('background-color', 'black')
    $('.progress-bar').css('background-color', 'salmon')
    $('.progress').css('border', '1px solid salmon')
    $('.shortcut').css('color', 'black').css('font-size', 'small').css('opacity', '.85')
    $('.material-symbols-outlined').css('color', 'black').css('opacity', '.85')
}

function plum() {
    $('.contain, .start').css('background', 'rgba(100, 50, 150, .5)')
    $('.user').css('background', 'rgba(100, 50, 150, .3)')
    $('p, .text, em').css('color', 'black').css('opacity', '.8')
    $('.progress').css('border', '1px solid purple')
    $('.progress-bar').css('background-color', 'purple')
    $('.shortcut').css('color', 'black').css('font-size', 'small')
    $('.material-symbols-outlined').css('color', 'white')
}

function black() {
    $('.contain, .start').css('background', '')
    $('.user').css('background', '')
    $('p, .text, em').css('color', '').css('opacity', '')
    $('hr, .hr1, .hr2, .hr3').css('color', 'white').css('background-color', 'white')
    $('.progress').css('border', '1px solid lavender')
    $('.progress-bar').css('background-color', 'lavender')
    $('.shortcut').css('color', 'white').css('font-size', 'small')
    $('.material-symbols-outlined').css('color', 'white')
}

i = 0
if (i === 0) {
    $('.shortcut').css('color', 'white').css('font-size', 'small')
    $('.dis-connect').css('background', 'rgba(0, 0, 0, .4)').css('color', 'white')
    $('.material-symbols-outlined').css('color', 'white')
}
$('#darkMode').click(() => {
    if (i === 0) {
        bisque()
        i++
    } else if (i === 1) {
        plum()
        i++
    } else if (i === 2) {
        black()
        i = 0
    }
})

$('#music').mouseenter(() => {
    $('#songList').fadeIn('fast')
    $('#picList').css('display', 'none')
})

$('#pictures').mouseenter(() => {
    $('#picList').fadeIn('fast')
    $('#songList').css('display', 'none')
})