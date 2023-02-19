//made by alrandshane
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const arland = 'ARLANDSHANE'
const madeBy = $('#arlandshane')
let interval = null

madeBy.mouseover(hyperplexed)
function hyperplexed() {
    madeBy.css('background-color', 'white').css('border-radius', '.2rem').css('opacity', '.8').css('padding', '0 .1rem')
    let iteration = 0
    clearInterval(interval)
    interval = setInterval(() => {
        $(this).text(() => {
            return $(this).text().split('').map((letter, index) => {
                if (index < iteration) {
                    return arland[index]
                }
                return letters[Math.floor(Math.random() * 10)]
            }).join('')
        })
        iteration += 0.33
    }, 30)
}

//jQuery elements
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
$('#play-button').hide() //the play button is hidden by default

//clicking the pause button switches it to the play button
$('#pause-button').click(() => {
    $('#pause-button').hide()
    $('#play-button').fadeIn('fast')
})
//clicking the play button, switches it to the pause button
$('#play-button').click(() => {
    $('#play-button').hide()
    $('#pause-button').fadeIn('fast')
})

$('#previous-song').click()

//expanding the music div and collapsing the weather div
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
    hideMusic()
    $('#songList').hide()
})

//when the name of a picture in the pictures folder is clicked
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

//hiding all the  images inside the pictures folder
function hidePictures() {
    $('#pictures-preview>.photo').hide()
}

let playMusic = [
    function aasPaas() {
        $('.albumArt').attr('src', 'Images/Music/Aas Pass.jpg')
        $('#now-playing-music').html('Aas Paas<br><em>Mitraz</em>')
        $('#aas-paas-img').fadeIn('fast')
        $('#music-preview >.photo').not('#aas-paas-img').hide()
    },
    function akhiyaan() {
        $('.albumArt').attr('src', 'Images/Music/Akhiyaan.jpg')
        $('#now-playing-music').html('Akhiyaan<br><em>Mitraz</em>')
        $('#akhiyaan-img').fadeIn('fast')
        $('#music-preview >.photo').not('#akhiyaan-img').hide()
    },
    function heeriye() {
        $('.albumArt').attr('src', 'Images/Music/Heeriye.jpg')
        $('#now-playing-music').html('Heeriye<br><em>Mitraz</em>')
        $('#heeriye-img').fadeIn('fast')
        $('#music-preview >.photo').not('#heeriye-img').hide()
    },
    function junoon() {
        $('.albumArt').attr('src', 'Images/Music/Junoon.jpg')
        $('#now-playing-music').html('Junoon<br><em>Mitraz</em>')
        $('#junoon-img').fadeIn('fast')
        $('#music-preview >.photo').not('#junoon-img').hide()
    },
    function kabhiNaKabhi() {
        $('.albumArt').attr('src', 'Images/Music/Kabhi Na Kabhi.jpg')
        $('#now-playing-music').html('Kabhi Na Kabhi<br><em>Mitraz</em>')
        $('#kabhi-na-kabhi-img').fadeIn('fast')
        $('#music-preview >.photo').not('#kabhi-na-kabhi-img').hide()
    },
    function muskurahat() {
        $('.albumArt').attr('src', 'Images/Music/Muskurahat.jpg')
        $('#now-playing-music').html('Muskurahat<br><em>Mitraz</em>')
        $('#muskurahat-img').fadeIn('fast')
        $('#music-preview >.photo').not('#muskurahat-img').hide()
    },
    function panah() {
        $('.albumArt').attr('src', 'Images/Music/Panah.jpg')
        $('#now-playing-music').html('Panah<br><em>Mitraz</em>')
        $('#panah-img').fadeIn('fast')
        $('#music-preview >.photo').not('#panah-img').hide()
    },
    function roiNa() {
        $('.albumArt').attr('src', 'Images/Music/Roi Na.jpg')
        $('#now-playing-music').html('Roi Na<br><em>Mitraz</em>')
        $('#roi-na-img').fadeIn('fast')
        $('#music-preview >.photo').not('#roi-na-img').hide()
    },
    function raatien() {
        $('.albumArt').attr('src', 'Images/Music/Raatein.jpg')
        $('#now-playing-music').html('Raatein<br><em>Mitraz</em>')
        $('#raatein-img').fadeIn('fast')
        $('#music-preview >.photo').not('#raatein-img').hide()
    },
    function taaraTuteya() {
        $('.albumArt').attr('src', 'Images/Music/Taara Tuteya.jpg')
        $('#now-playing-music').html('Taara Tuteya<br><em>Mitraz</em>')
        $('#taara-tuteya-img').fadeIn('fast')
        $('#music-preview >.photo').not('#taara-tuteya-img').hide()
    },
    function tereHuve() {
        $('.albumArt').attr('src', 'Images/Music/Tere Huve.jpg')
        $('#now-playing-music').html('Tere Huve<br><em>Mitraz</em>')
        $('#tere-huve-img').fadeIn('fast')
        $('#music-preview >.photo').not('#tere-huve-img').hide()
    }
]

//when the name of a song in the music folder is clicked
$('#aas-paas').click(playMusic[0])
$('#akhiyaan').click(playMusic[1])
$('#heeriye').click(playMusic[2])
$('#junoon').click(playMusic[3])
$('#kabhi-na-kabhi').click(playMusic[4])
$('#muskurahat').click(playMusic[5])
$('#panah').click(playMusic[6])
$('#roi-na').click(playMusic[7])
$('#raatein').click(playMusic[8])
$('#taara-tuteya').click(playMusic[9])
$('#tere-huve').click(playMusic[10])

//hiding all the images inside the music folder
function hideMusic() {
    $('#music-preview>.photo').hide()
}