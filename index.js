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
    $('#state').css('transition-duration', '300ms')
    $('#wifi').css('transition-duration', '300ms')
    $('#battery').css('transition-duration', '300ms')
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
