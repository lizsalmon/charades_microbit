// start countdown and then initialise the variables that we will use
let index = 0
let array_of_words: string[] = []
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.clearScreen()
array_of_words = [
"cat",
"dog",
"elephant",
"giraffe",
"fox",
"rabbit",
"mouse"
]
let timer = 30
index = 0
let score = 0

// This block is run when the guesser is correct! 
input.onGesture(Gesture.ScreenDown, function () {
    // To stop the undefined error
    if (index < array_of_words.length) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        led.stopAnimation()
        index += 1
        score += 1
    }
})

// Runs as a skip
input.onGesture(Gesture.ScreenUp, function () {
    if (index < array_of_words.length) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        led.stopAnimation()
        // Index still increases but score does not.
        index += 1
    }
})

// Timer increases by 1 every second
loops.everyInterval(1000, function () {
    timer += -1
})

basic.forever(function () {
    if (timer <= 0) {
        // If the time has run out.
        basic.showNumber(score)
    } else if (index >= array_of_words.length) {
        // Got to the end before the timer runs out
        basic.showNumber(score)
    } else {
        // In normal game play
        basic.showString("" + (array_of_words[index]))
    }
})
