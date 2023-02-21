//an array of image src files
let imgSrc = [
    'Images/Music/Aas Pass.webp',
    'Images/Music/Akhiyaan.webp',
    'Images/Music/Heeriye.webp',
    'Images/Music/Junoon.webp',
    'Images/Music/Kabhi Na Kabhi.webp',
    'Images/Music/Muskurahat.webp',
    'Images/Music/Panah.webp',
    'Images/Music/Raatein.webp',
    'Images/Music/Roi Na.webp',
    'Images/Music/Taara Tuteya.webp',
    'Images/Music/Tere Huve.webp',
]

//an array of name of songs in the music folder
let songNames = [
    'Aas Paas<br><em>Mitraz</em>',
    'Akhiyaan<br><em>Mitraz</em>',
    'Heeriye<br><em>Mitraz</em>',
    'Junoon<br><em>Mitraz</em>',
    'Kabhi Na Kabhi<br><em>Mitraz</em>',
    'Muskurahat<br><em>Mitraz</em>',
    'Panah<br><em>Mitraz</em>',
    'Raatein<br><em>Mitraz</em>',
    'Roi Na<br><em>Mitraz</em>',
    'Taara Tuteya<br><em>Mitraz</em>',
    'Tere Huve<br><em>Mitraz</em>'
]

//an array of functions which change the albumArt, now-playing-music and displays the music-preview in the music folder
let musicFolder = [
    () => {
        $('.albumArt').attr('src', imgSrc[0])
        $('#now-playing-music').html(songNames[0])
        currentSongIndex = 0
        $('#aas-paas-img').fadeIn('fast')
        $('#music-preview >.photo').not('#aas-paas-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[1])
        $('#now-playing-music').html(songNames[1])
        currentSongIndex = 1
        $('#akhiyaan-img').fadeIn('fast')
        $('#music-preview >.photo').not('#akhiyaan-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[2])
        $('#now-playing-music').html(songNames[2])
        currentSongIndex = 2
        $('#heeriye-img').fadeIn('fast')
        $('#music-preview >.photo').not('#heeriye-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[3])
        $('#now-playing-music').html(songNames[3])
        currentSongIndex = 3
        $('#junoon-img').fadeIn('fast')
        $('#music-preview >.photo').not('#junoon-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[4])
        $('#now-playing-music').html(songNames[4])
        currentSongIndex = 4
        $('#kabhi-na-kabhi-img').fadeIn('fast')
        $('#music-preview >.photo').not('#kabhi-na-kabhi-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[5])
        $('#now-playing-music').html(songNames[5])
        currentSongIndex = 5
        $('#muskurahat-img').fadeIn('fast')
        $('#music-preview >.photo').not('#muskurahat-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[6])
        $('#now-playing-music').html(songNames[6])
        currentSongIndex = 6
        $('#panah-img').fadeIn('fast')
        $('#music-preview >.photo').not('#panah-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[7])
        $('#now-playing-music').html(songNames[7])
        currentSongIndex = 7
        $('#roi-na-img').fadeIn('fast')
        $('#music-preview >.photo').not('#roi-na-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[8])
        $('#now-playing-music').html(songNames[8])
        currentSongIndex = 8
        $('#raatein-img').fadeIn('fast')
        $('#music-preview >.photo').not('#raatein-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[9])
        $('#now-playing-music').html(songNames[9])
        currentSongIndex = 9
        $('#taara-tuteya-img').fadeIn('fast')
        $('#music-preview >.photo').not('#taara-tuteya-img').hide()
    },
    () => {
        $('.albumArt').attr('src', imgSrc[10])
        $('#now-playing-music').html(songNames[10])
        currentSongIndex = 10
        $('#tere-huve-img').fadeIn('fast')
        $('#music-preview >.photo').not('#tere-huve-img').hide()
    }
]

//an array of functions to display the pictures-preview in the pictures folder
let picturesFolder = [
    () => {
        $('#antilope-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#antilope-img').hide()
    },
    () => {
        $('#barn-owl-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#barn-owl-img').hide()
    },
    () => {
        $('#polar-bear-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#polar-bear-img').hide()
    },
    () => {
        $('#cheetah-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#cheetah-img').hide()
    },
    () => {
        $('#crab-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#crab-img').hide()
    },
    () => {
        $('#dog-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#dog-img').hide()
    },
    () => {
        $('#dolphin-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#dolphin-img').hide()
    },
    () => {
        $('#elephant-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#elephant-img').hide()
    },
    () => {
        $('#humming-bird-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#humming-bird-img').hide()
    },
    () => {
        $('#sloth-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#sloth-img').hide()
    },
    () => {
        $('#sparrow-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#sparrow-img').hide()
    },
    () => {
        $('#squirrel-img').fadeIn('fast')
        $('#pictures-preview > .photo').not('#squirrel-img').hide()
    }
]

//array of themes
let themes = [
    //light theme
    () => {
        $('.contain, .start, .file-explorer, .browser-window, .settings').css('background', 'rgba(220, 210, 220, .5)')
        $('.user').css('background', 'rgba(220, 210, 220, .3)')
        $('p, .text, em').css('color', 'black').css('opacity', '.8')
        $('hr, .hr1, .hr2, .hr3').css('color', 'black').css('background-color', 'black')
        $('.progress-bar').css('background-color', 'salmon')
        $('.progress').css('border', '1px solid salmon')
        $('.shortcut').css('color', 'black').css('font-size', 'small').css('opacity', '.85')
        $('.material-symbols-outlined').css('color', 'black').css('opacity', '.85')
    },
    //purple theme
    () => {
        $('.contain, .start, .file-explorer, .browser-window, .settings').css('background', 'rgba(100, 50, 150, .5)')
        $('.user').css('background', 'rgba(100, 50, 150, .3)')
        $('p, .text, em').css('color', 'black').css('opacity', '.8')
        $('.progress').css('border', '1px solid purple')
        $('.progress-bar').css('background-color', 'purple')
        $('.shortcut').css('color', 'black').css('font-size', 'small')
        $('.material-symbols-outlined').css('color', 'black').css('opacity', '.85')
    },
    //dark theme
    () => {
        $('.contain, .start, .file-explorer, .browser-window, .settings').css('background', '')
        $('.user').css('background', '')
        $('p, .text, em').css('color', '').css('opacity', '')
        $('hr, .hr1, .hr2, .hr3').css('color', 'white').css('background-color', 'white')
        $('.progress').css('border', '1px solid lavender')
        $('.progress-bar').css('background-color', 'lavender')
        $('.shortcut').css('color', 'white').css('font-size', 'small')
        $('.material-symbols-outlined').css('color', 'white')
    }
]

let volumeUI = [
    //expanding
    () => {
        $('#wifi, #battery, #bluetooth').hide()
        $('#volumeState').removeClass('progressBra').addClass('progressBar')
    },
    //collapsing
    () => {
        $('#wifi, #battery, #bluetooth').fadeIn()
        $('#volumeState').removeClass('progressBar').addClass('progressBra')
    }
]

let wifiUI = [
    //expanding
    () => {
        $('#battery, #volume, #bluetooth').hide()
        $wifiState
            .removeClass('wifiBra')
            .addClass('wifiBar')
            .html('<p>Home WiFi<br><em>Connected, Secure</em></p>')
    },
    //collapsing
    () => {
        $('#battery, #volume, #bluetooth').fadeIn()
        $wifiState.removeClass('wifiBar').addClass('wifiBra').html('')
    }
]

//expaning the battery div
function batteryFocus() {
    $('#wifi, #volume, #bluetooth').hide()
    navigator.getBattery().then(function checkLevel(battery) {
        const batteryLevel = parseInt(battery.level * 100)
        const batteryStatus = (battery.charging ? "Charging" : "Discharging")
        $('#batteryState')
            .html(`<p> ${batteryStatus} <br> ${batteryLevel}% Remaining</p>`)
            .removeClass('batteryBra')
            .addClass('batteryBar')
    }).catch(function (err) {
        console.error('Error getting battery information', err)
    })
}

//collapsing the battery div
function batteryBG() {
    $('#wifi, #volume, #bluetooth').fadeIn()
    $('#batteryState')
        .removeClass('batteryBar')
        .addClass('batteryBra')
        .html('')
}

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

let startUI = [
    //expanding the start menu panel
    () => {
        $("#start")
            .removeClass('started')
            .addClass('toStart')
        $('.user, .start, .h2, #windows+.progress').fadeIn('fast')
        $('.user').css('display', 'flex')
    },
    //collapsing the start menu panel
    () => {
        $('#start')
            .removeClass('toStart')
            .addClass('started')
        $('.user, .start, .h2, #windows+.progress').hide()
    }
]

let settingsUI = [
    //expanding the settings window
    () => {
        $('.settings').fadeIn('fast')
        $('#settings').removeClass('settings-collapsed').addClass('settings-expanded')
    },
    //collapsing the settings window
    () => {
        $('.settings').hide()
        $('#settings').removeClass('settings-expanded').addClass('settings-collapsed')
    }
]

let fileExpUI = [
    //expanding the file explorer panel
    () => {
        $('.file-explorer, #fileExp+.progress').fadeIn('fast')
        $('#file')
            .removeClass('f-on')
            .addClass('f-off')
    },
    //collapsing the file explorer panel
    () => {
        $('#file')
            .removeClass('f-off')
            .addClass('f-on')
        $('#picList, #songList, #fileExp+.progress, .file-explorer').hide()
    }
]

let browserUI = [
    //expanding the browser panel
    () => {
        $('#browser')
            .removeClass('browser-closed')
            .addClass('browser-opened')
        $('.browser-window, #edge+.progress').fadeIn('fast')
    },
    //collapsing the browser panel
    () => {
        $('#browser')
            .removeClass('browser-opened')
            .addClass('browser-closed')
        $('.browser-window, #edge+.progress').hide()
    }
]

$(document).ready(() => {
    //made by alrandshane
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const arland = 'ARLANDSHANE'
    const madeBy = $('#arlandshane')
    let interval = null

    madeBy.mouseover(hyperplexed)
    function hyperplexed() {
        let iteration = 0
        clearInterval(interval)
        interval = setInterval(() => {
            madeBy.text(() => {
                return madeBy.text().split('').map((letter, index) => {
                    if (index < iteration) {
                        return arland[index]
                    }
                    return letters[Math.floor(Math.random() * 10)]
                }).join('')
            })
            iteration += 0.33
        }, 30)
    }

    //clicking the wallpaper hides any expanded shortcut
    $('#wallpaper').click(() => {
        wifiUI[1]()
        volumeUI[1]()
        batteryBG()
        blueFocused()
    })

    // // //clicking the volume icon
    $('#volume').click(() => {
        if ($('#volumeState').attr('class') === 'progressBra') {
            volumeUI[0]()
        }
        else if ($('#volumeState').attr('class') === 'progressBar') {
            volumeUI[1]()
        }
    })

    // // //clicking the wifi icon
    $('#wifi').click(() => {
        if ($wifiState.attr('class') === 'wifiBra') {
            wifiUI[0]()
        }
        else if ($wifiState.attr('class') === 'wifiBar') {
            wifiUI[1]()
        }
    })

    // // //clicking the battery icon
    $('#battery').click(() => {
        if ($('#batteryState').attr('class') === 'batteryBra') {
            batteryFocus()
        }
        else if ($('#batteryState').attr('class') === 'batteryBar') {
            batteryBG()
        }
    })

    // // //clicking the bluetooth icon
    $('.earbuds').click(blueFocused)
    $('#bluetooth').click(blueBG)

    // // //connect and disconnect in the expanded bluetooth div
    $disConnect.click(() => {
        const currentText = $disConnect.text()
        $disConnect.text(currentText === 'Disconnect' ? 'Connect' : 'Disconnect')
    })

    // // //start, file explorer, edge browser

    //start functionality
    $('#windows').click(() => {
        if ($('#start').hasClass('started')) {
            startUI[0]()
            fileExpUI[1]()
            browserUI[1]()
            settingsUI[1]()
        }
        else if ($('#start').hasClass('toStart')) {
            startUI[1]()
        }
    })

    //settings functionality
    $('#settings-button').click(() => {
        if ($('#settings').hasClass('settings-collapsed')) {
            startUI[1]()
            settingsUI[0]()
            fileExpUI[1]()
            browserUI[1]()
            $('#settings').removeClass('settings-expanded')
        }
        else if ($('#settings').hasClass('settings-expanded')) {
            settingsUI[1]()
        }
    })

    //file explorer functionality
    $('#fileExp, #file-exp-shortcut').click(() => {
        if ($('#file').hasClass('f-on')) {
            startUI[1]()
            settingsUI[1]()
            fileExpUI[0]()
            browserUI[1]()
        } else {
            fileExpUI[1]()
        }
    })

    //edge functionality
    $('#edge, #edge-shortcut').click(() => {
        if ($('#browser').hasClass('browser-closed')) {
            startUI[1]()
            settingsUI[1]()
            fileExpUI[1]()
            browserUI[0]()
        } else {
            browserUI[1]()
        }
    })

    // //pressing the enter key searches the entered word/phrase on google in a new tab
    $("#search-the-web").on("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault()
            const userInput = $(this).val()
            const searchQuery = encodeURIComponent(userInput)
            const url = `https://www.google.com/search?q=${searchQuery}`
            window.open(url, "_blank")
        }
    })

    let themeCount = 0
    $('.shortcut').css('color', 'white').css('font-size', 'small')
    $disConnect.css('background', 'rgba(0, 0, 0, .4)').css('color', 'white')
    $('.material-symbols-outlined').css('color', 'white')

    // // //changing the theme
    $('#darkMode').click(() => {
        if (themeCount === 0) {
            themes[0]()
            themeCount++
        } else if (themeCount === 1) {
            themes[1]()
            themeCount++
        } else if (themeCount === 2) {
            themes[2]()
            themeCount = 0
        }
    })

    // // //music and weather
    $('.musicDetails, .musicControls').hide()
    $('#pause-song').hide()
    $('.music').click(() => {
        $('.albumArt').css('border-radius', '20%')
        $('.weatherIcon').css('top', '1vh').css('padding', '0 .5vw')
        $('.place').hide()
        $('.weather')
            .css('display', 'flexbox')
            .css('flex-direction', 'column')
            .css('align-items', 'center')
        $('.musicDetails').fadeIn('fast')
        $('.musicControls').css('display', 'flex')
    });

    $('.weather').click(() => {
        $('.albumArt').css('border-radius', '100%')
        $('.weatherIcon').css('top', '1rem').css('padding', '0')
        $('.place').fadeIn('fast')
        $('.weather')
            .css('display', 'flex')
            .css('flex-direction', '')
            .css('align-items', '')
            .css('justify-contents', 'space-between')
        $('.musicDetails, .musicControls').hide()
    });

    //clicking the pause button switches it to the play button
    $('#pause-song').click(() => {
        $('#pause-song').hide()
        $('#play-song').fadeIn('fast')
    })

    //clicking the play button, switches it to the pause button
    $('#play-song').click(() => {
        $('#play-song').hide()
        $('#pause-song').fadeIn('fast')
    })

    let currentSongIndex = 0

    // function to update UI with current song info
    function updateSongInfo() {
        $('.albumArt').attr('src', imgSrc[currentSongIndex])
        $('#now-playing-music').html(songNames[currentSongIndex])
    }

    //on clicking the next song icon
    $('#next-song').click(() => {
        if (currentSongIndex === 10) {
            currentSongIndex = 0
        } else {
            currentSongIndex++
        }
        updateSongInfo()
    })

    //on clicking the previous song icon
    $('#previous-song').click(() => {
        if (currentSongIndex === 0) {
            currentSongIndex = 10
        } else {
            --currentSongIndex
        }
        updateSongInfo()
    })

    // // //showing the music folder
    $music.click(() => {
        $('.music-folder').css('background', 'rgba(0, 0, 0, .3)')
        $('.pictures-folder').css('background', '')
        $('#songList').fadeIn()
        $('#picList').hide()
        $musicTextList.fadeIn('fast')
        hidePictures()
    })

    // // //showing the pictures folder
    $pictures.click(() => {
        $('.pictures-folder').css('background', 'rgba(0, 0, 0, .3)')
        $('.music-folder').css('background', '')
        $('#picList').fadeIn('fast')
        $picturesTextList.fadeIn('fast')
        hideMusic()
        $('#songList').hide()
    })

    // // //when the name of a picture in the pictures folder is clicked
    $('#antilope').dblclick(picturesFolder[0])
    $('#barn-owl').dblclick(picturesFolder[1])
    $('#polar-bear').dblclick(picturesFolder[2])
    $('#cheetah').dblclick(picturesFolder[3])
    $('#crab').dblclick(picturesFolder[4])
    $('#dog').dblclick(picturesFolder[5])
    $('#dolphin').dblclick(picturesFolder[6])
    $('#elephant').dblclick(picturesFolder[7])
    $('#humming-bird').dblclick(picturesFolder[8])
    $('#sloth').dblclick(picturesFolder[9])
    $('#sparrow').dblclick(picturesFolder[10])
    $('#squirrel').dblclick(picturesFolder[11])

    // // //when the name of a song in the music folder is clicked, a function from the musicFolder array is called
    $('#aas-paas').dblclick(musicFolder[0])
    $('#akhiyaan').dblclick(musicFolder[1])
    $('#heeriye').dblclick(musicFolder[2])
    $('#junoon').dblclick(musicFolder[3])
    $('#kabhi-na-kabhi').dblclick(musicFolder[4])
    $('#muskurahat').dblclick(musicFolder[5])
    $('#panah').dblclick(musicFolder[6])
    $('#roi-na').dblclick(musicFolder[7])
    $('#raatein').dblclick(musicFolder[8])
    $('#taara-tuteya').dblclick(musicFolder[9])
    $('#tere-huve').dblclick(musicFolder[10])

    //hiding all the  images inside the pictures folder
    function hidePictures() {
        $('#pictures-preview>.photo').hide()
    }
    //hiding all the images inside the music folder
    function hideMusic() {
        $('#music-preview>.photo').hide()
    }
})

//jQuery elements
const $hr1 = $('.hr1')
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

$('.file-explorer, .browser-window, .settings')
    .draggable({ handle: '.window-header' })