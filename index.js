const $search = $('#search')
const $searching = $('#searching')
const $windows = $('#windows')
const $tabs = $('#tabs')
const $fileExp = $('#fileExp')
const $chrome = $('#chrome')
const $photos = $('#photos')
const $twitter = $('#twitter')
const $instagram = $('#instagram')
const $whatsapp = $('#whatsapp')
const $hr1 = $('.hr1')
const $searchBox = $('.search-box')
const $disConnect = $('.dis-connect')
const $music = $('#music')
const $pictures = $('#pictures')
const $wifiState = $('#wifiState')
const $picturesTextList = $('#pictures-text-list')
const $musicTextList = $('#music-text-list')

const today = new Date()
let hours = today.getHours()//getting the current hour(number: 24hour format)
let minutes = today.getMinutes()//getting the current minute (number)
const date = today.getDate()//getting the current date (number)
const monthNum = today.getMonth()//getting the current month (number)
const weekNum = today.getDay()//getting the current day of week (number)

//array containing the names of months in a year
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

//array containing the names of days in a week
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//getting the name of month from the monthNames array using monthNum
const month = monthNames[monthNum]

//concatinating 0 before hour and minute, if they are less than
if (hours < 10) {
    hours = "0" + hours
}
if (minutes < 10) {
    minutes = "0" + minutes
}

const time = `${hours}:${minutes}`//concatinating hour and minute
const day = `<em>${month} ${date}</em>`//concatinating month name and date

$('.weekDay').html(`<p>${weekDay[weekNum]}, ${day}</p>`)//getting the name of the week from the weekNames array using weekNum and adding the date
$('.time').html(`<p class="time-piece">${time}</p>`)

//clicking the volume icon
$('#volume').click(() => {
    if ($('#volumeState').attr('class') === 'progressBra') {
        volumeFocus()
    }
    else if ($('#volumeState').attr('class') === 'progressBar') {
        volumeBG()
    }
})

//expanding the volume div
function volumeFocus() {
    $('#wifi, #battery, #bluetooth').hide()
    $('#volumeState').removeClass('progressBra').addClass('progressBar')
}

//collapsing the volume div
function volumeBG() {
    $('#wifi, #battery, #bluetooth').fadeIn()
    $('#volumeState').removeClass('progressBar').addClass('progressBra')
}

//clicking the wifi icon
$('#wifi').click(() => {
    if ($wifiState.attr('class') === 'wifiBra') {
        wifiFocus()
    }
    else if ($wifiState.attr('class') === 'wifiBar') {
        wifiBG()
    }
})

//expanding the wifi div
function wifiFocus() {
    $('#battery, #volume, #bluetooth').hide()
    $wifiState
        .removeClass('wifiBra')
        .addClass('wifiBar')
        .html('<p>Home WiFi<br><em>Connected, Secure</em></p>')
}

//collapsing the wifi div
function wifiBG() {
    $('#battery, #volume, #bluetooth').fadeIn()
    $wifiState.removeClass('wifiBar').addClass('wifiBra').html('')
}

//clicking the battery icon
$('#battery').click(() => {
    if ($('#batteryState').attr('class') === 'batteryBra') {
        batteryFocus()
    }
    else if ($('#batteryState').attr('class') === 'batteryBar') {
        batteryBG()
    }
})

//expaning the battery div
function batteryFocus() {
    $('#wifi, #volume, #bluetooth').hide();
    navigator.getBattery().then(function checkLevel(battery) {
        const batteryLevel = parseInt(battery.level * 100)
        const batteryStatus = (battery.charging ? "Charging" : "Discharging")
        $('#batteryState')
            .html(`<p> ${batteryStatus} <br> ${batteryLevel}% Remaining</p>`)
            .removeClass('batteryBra')
            .addClass('batteryBar')
    }).catch(function (err) {
        console.error('Error getting battery information', err)
    });
}

//collapsing the battery div
function batteryBG() {
    $('#wifi, #volume, #bluetooth').fadeIn();
    $('#batteryState')
        .removeClass('batteryBar')
        .addClass('batteryBra')
        .html('');
}

//clicking the bluetooth icon
$('.earbuds').click(blueFocused)
$('#bluetooth').click(blueBG)

//expanding the bluetooth div
function blueFocused() {
    if ($('#blueState').attr('class') === 'blueBar') {
        $('#wifi, #volume, #battery, #bluetooth').fadeIn()
        $('.dis-connect, .earbuds').hide()
        $('#blueState')
            .removeClass('blueBar')
            .addClass('blueBra')
            .html('')
    }
}

//collapsing the bluetooth div
function blueBG() {
    if ($('#blueState').attr('class') === 'blueBra') {
        $('.earbuds').css('display', '')
        $('#wifi, #volume, #battery, #bluetooth').hide()
        $disConnect.css('display', 'flex')
        $('#blueState')
            .removeClass('blueBra')
            .addClass('blueBar')
            .html('<p>Headphones<br><em>Airpods Max</em></p>')
    }
}

//music and weather
$('.musicDetails, .musicControls').hide()
$('.music').click(musicFocus)
$('.weather').click(weatherFocus)

//expanding teh music div and collapsing the weather div
function musicFocus() {
    $('.albumArt').css('border-radius', '20%')
    $('.weatherIcon').css('top', '1vh').css('padding', '0 .5vw')
    $('.place').hide()
    $('.weather')
        .css('display', 'flexbox')
        .css('flex-direction', 'column')
        .css('align-items', 'center')
    $('.musicDetails').fadeIn('fast')
    $('.musicControls').css('display', 'flex')
}

//expanding the weather div and collapsing the music div
function weatherFocus() {
    $('.albumArt').css('border-radius', '100%')
    $('.weatherIcon').css('top', '1rem').css('padding', '0')
    $('.place').fadeIn('fast')
    $('.weather')
        .css('display', 'flex')
        .css('flex-direction', '')
        .css('align-items', '')
        .css('justify-contents', 'space-between')
    $('.musicDetails, .musicControls').hide()
}

//clicking the tabs and search icons removes the start and file explorer divs
$('#tabs, #search').click(() => {
    if ($('#start').hasClass('toStart') || $('#file').hasClass('f-off')) {
        started()
        fileOut()
    }
})

//start functionality
$('#windows').click(() => {
    if ($('#start').hasClass('started')) {
        toStart()
        fileOut()
    }
    else if ($('#start').hasClass('toStart')) {
        started()
    }

})

//file explorer functionality
$('#fileExp').click(() => {
    if ($('#file').hasClass('f-on')) {
        started()
        fileIn()
    } else {
        fileOut()
    }
})

//expaning the start div
function toStart() {
    $('.user, .start, .h2, #windows+.progress').fadeIn('fast')
    $('.user').css('display', 'flex')
    $("#start")
        .removeClass('started')
        .addClass('toStart')
}

//cololapsing the start div
function started() {
    $('.user, .start, .h2, #windows+.progress').hide()
    $('#start')
        .removeClass('toStart')
        .addClass('started')
}

//expanding the file explorer div
function fileIn() {
    $('.file-explorer, #fileExp+.progress').fadeIn('fast')
    $('#file')
        .removeClass('f-on')
        .addClass('f-off')
}

//collapsing the file explorer div
function fileOut() {
    $('#file')
        .removeClass('f-off')
        .addClass('f-on')
    $('#picList, #songList, #fileExp+.progress, .file-explorer').hide()
}

//connect and disconnect in the expanded bluetooth div
$disConnect.click(() => {
    const currentText = $disConnect.text()
    $disConnect.text(currentText === 'Disconnect' ? 'Connect' : 'Disconnect')
})

//toggling search on/off
$search.click(() => {
    $searching.toggleClass('searchOn searchOff')
    $windows.toggle()
    $tabs.toggle()
    $fileExp.toggle()
    $chrome.toggle()
    $photos.toggle()
    $twitter.toggle()
    $instagram.toggle()
    $whatsapp.toggle()
    $hr1.toggle()
    $searchBox.toggle()
    $search.css('margin-right', $searching.hasClass('searchOn') ? '0' : '')
})

//light colored theme
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

//purple colored theme
function plum() {
    $('.contain, .start, .file-explorer').css('background', 'rgba(100, 50, 150, .5)')
    $('.user').css('background', 'rgba(100, 50, 150, .3)')
    $('p, .text, em').css('color', 'black').css('opacity', '.8')
    $('.progress').css('border', '1px solid purple')
    $('.progress-bar').css('background-color', 'purple')
    $('.shortcut').css('color', 'black').css('font-size', 'small')
    $('.material-symbols-outlined').css('color', 'black').css('opacity', '.85')
}

//dark theme
function black() {
    $('.contain, .start, .file-explorer').css('background', '')
    $('.user').css('background', '')
    $('p, .text, em').css('color', '').css('opacity', '')
    $('hr, .hr1, .hr2, .hr3').css('color', 'white').css('background-color', 'white')
    $('.progress').css('border', '1px solid lavender')
    $('.progress-bar').css('background-color', 'lavender')
    $('.shortcut').css('color', 'white').css('font-size', 'small')
    $('.material-symbols-outlined').css('color', 'white')
}

let theme = 0
$('.shortcut').css('color', 'white').css('font-size', 'small')
$disConnect.css('background', 'rgba(0, 0, 0, .4)').css('color', 'white')
$('.material-symbols-outlined').css('color', 'white')
//changing the theme
$('#darkMode').click(() => {
    if (theme === 0) {
        bisque()
        theme++
    } else if (theme === 1) {
        plum()
        theme++
    } else if (theme === 2) {
        black()
        theme = 0
    }
})

//showing the music folder
$music.click(() => {
    $('.music-folder').css('background', 'rgba(0, 0, 0, .3)')
    $('.pictures-folder').css('background', '')
    $('#songList').fadeIn()
    $('#picList').hide()
    $musicTextList.fadeIn('fast')
    hidePictures()
})

//showing the pictures folder
$pictures.click(() => {
    $('.pictures-folder').css('background', 'rgba(0, 0, 0, .3)')
    $('.music-folder').css('background', '')
    $('#picList').fadeIn('fast')
    $picturesTextList.fadeIn('fast')
    $('#songList').hide()
})

$('#antilope').click(() => {
    $('#antilope-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#antilope-img').hide()
})
$('#barn-owl').click(() => {
    $('#barn-owl-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#barn-owl-img').hide()
})
$('#polar-bear').click(() => {
    $('#polar-bear-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#polar-bear-img').hide()
})
$('#cheetah').click(() => {
    $('#cheetah-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#cheetah-img').hide()
})
$('#crab').click(() => {
    $('#crab-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#crab-img').hide()
})
$('#dog').click(() => {
    $('#dog-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#dog-img').hide()
})
$('#dolphin').click(() => {
    $('#dolphin-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#dolphin-img').hide()
})
$('#elephant').click(() => {
    $('#elephant-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#elephant-img').hide()
})
$('#humming-bird').click(() => {
    $('#humming-bird-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#humming-bird-img').hide()
})
$('#sloth').click(() => {
    $('#sloth-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#sloth-img').hide()
})
$('#sparrow').click(() => {
    $('#sparrow-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#sparrow-img').hide()
})
$('#squirrel').click(() => {
    $('#squirrel-img').fadeIn('fast')
    $('#pictures-preview >.photo').not('#squirrel-img').hide()
})

function hidePictures() {
    $('#pictures-preview>.photo').hide()
}

$('#panah').click(() => {
    $('#panah-img').fadeIn('fast')
})