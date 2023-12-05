var word = document.querySelector('.word')
var time = document.querySelector('.time')
let second = 30
var input = document.querySelector('.input-text')
const reset = document.querySelector('.refresh-btn')
const submit = document.querySelector('.submit-btn')

function scrambleword() {
    let words = ['STICK', 'STUMP', 'WEIRD', 'CLUSTER', 'RATTLE']
    var wordobtain = words[Math.floor(Math.random() * words.length)]
    let RandomWordString = wordobtain.split('')

function shuffleArray(array) {
    for (var i = RandomWordString.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function show() {
    var scrambleword = shuffleArray(RandomWordString)
    word.innerHTML = scrambleword.join('')
}

show()
time.innerHTML = `TIME LEFT: ${second}s`
const countdown = setInterval(() => {
    second--
    time.innerHTML = `TIME LEFT ${second}s`
    submit.addEventListener('click', () => {
        var x = input.value
        if (x == '') {alert('Please Enter Something')
        countdown()
    }
    else if (x == wordobtain) {
        wordobtain !== x
        alert('You Find Correct Word')
        document.location.reload()
    }
    })

    if (second === 0) {
        clearInterval(countdown)
        alert('Your Time is Over')
        document.location.reload()
    }
}, 1000)
}

window.addEventListener('load', scrambleword)
reset.addEventListener('click', () => {
    scrambleword()
    document.location.reload()
})