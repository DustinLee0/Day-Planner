var presentDate = $('#currentDay')
var renderDate = moment().format("dddd, MMMM Do YYYY")

setInterval(() => {
    const now = moment().format('h:mm:ss a')
    presentDate.text(renderDate + ', ' + now)
}, 1000)

// check if hour block is in past, present or future
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
    
    for (i = 0; i < hoursEl.length; i++) {
        var time = $(hoursEl[i]).attr('data-number')
        var hello = $(hoursEl[i]).siblings('textarea')
        if (time < presentHour) {
            hello.addClass('hourPast')
        } else if (time === presentHour) {
            hello.addClass('hourPresent')
        } else {
            hello.addClass('hourFuture')
        }}
        moment('2010-10-20').isBefore('2010-10-21'); // true
    }
    
    timeCheck();

$('.saveBtn').on('click', (e) => {
    var event = $(e.target)
    var hour = event.siblings('div').attr('data-hour')
    var text = event.siblings('textarea').val()
    console.log(event)
    console.log(hour)
    console.log(text)

    // var localSave = []
    // const localSaveObj ={ 
    //     time: hour,
    //     input: text
    //     }

// localStorage.setItem('input', JSON.stringify(localSaveObj)
// console.log(localSave)
// console.log(localSaveObj)
// console.log()
// console.log()


})

// localStorage.setItem('Highscore', JSON.stringify(highscore))
// var workHour = $('#hour9').val() //"meeting"