var presentDate = $('#currentDay')
var renderDate = moment().format("dddd, MMMM Do YYYY")

setInterval(() => {
    const now = moment().format('h:mm:ss a')
    presentDate.text(renderDate + ', ' + now)
}, 1000)

function timeCheck() {
    var hoursEl = [
        '#hour9',
        '#hour10',
        '#hour11',
        '#hour12',
        '#hour1',
        '#hour2',
        '#hour3',
        '#hour4',
        '#hour5',
    ]
    // moment.js: 'kk' uses hours in 24 hour format
    // use 24 hour format in data-numbers
    const presentHour = moment().format('kk')
    // var workHour = $('#hour9').val() //"meeting"
    // console.log(presentHour)  //present time(hour) 
    console.log(hoursEl)  

    for (i = 0; i < hoursEl.length; i++) {
        var time = $(hoursEl[i]).attr('data-number')
        var hello = $(hoursEl[i]).siblings('textarea')
        console.log(hello)
        if (time < presentHour) {
            hello.addClass('hourPast')
        } else if (time === presentHour) {
            hello.addClass('hourPresent')
        } else {
            hello.addClass('hourFuture')
        }}
    // moment('2010-10-20').isBefore('2010-10-21'); // true
    // if (moment(time).isBefore(hoursEl)) {
    // console.log('past-time')
    // }
}

timeCheck();