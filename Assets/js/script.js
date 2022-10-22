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
        '#hour13',
        '#hour14',
        '#hour15',
        '#hour16',
        '#hour17',
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

    var save = []

$('.saveBtn').on('click', (e) => {
    var event = $(e.target)
    var hour = event.siblings('div').attr('data-number')
    var text = event.siblings('textarea').val()

    const localSaveObj = { 
        time: hour,
        input: text
        }
    
        save.push(localSaveObj)

    localStorage.setItem('planner', JSON.stringify(save))
    renderSave()
})

function renderSave() {
    let localSave = JSON.parse(localStorage.getItem('planner'))
    console.log(localSave)

    for (let n = 9; n < 18; n++) {
        let id = '#hour' + n
        let saveInput = $(id).siblings('#text-content')
        let dataNumber = $(id).attr('data-number')

        console.log(saveInput)
        console.log(dataNumber)
        console.log($(id).attr('data-number'))
        
        for (let i = 0; i < localSave.length; i++) {
            if(localSave[i].time === dataNumber) {
                saveInput.text(localSave[i].input)
                console.log('hello')
        }}
    }
}

window.onload = renderSave()