input.onGesture(Gesture.ScreenUp, function () {
    if (index < array_of_words.length) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        led.stopAnimation()
        index += 1
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (index < array_of_words.length) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        led.stopAnimation()
        index += 1
        score += 1
    }
})
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
loops.everyInterval(1000, function () {
    timer += -1
})
basic.forever(function () {
    if (timer <= 0) {
        basic.showNumber(score)
    } else if (index >= array_of_words.length) {
        basic.showNumber(score)
    } else {
        basic.showString("" + (array_of_words[index]))
    }
})
