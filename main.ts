input.onGesture(Gesture.Shake, function () {
    // If the index is less than how big the array is.  This ends the game at the max number of words.
    if (index < array_of_words.length) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        // This stops the word displaying across the screen, if it is already completed
        led.stopAnimation()
        // Add 1 to the index so that they are now looking at the next word
        index += 1
    }
})
let index = 0
let array_of_words: string[] = []
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
loops.everyInterval(1000, function () {
    // Counting down the time every second
    timer += -1
})
basic.forever(function () {
    // less than or equal to as the time will keep going down after zero
    if (timer <= 0) {
        // If the time has run out then show the score at that point
        basic.showNumber(index)
    } else if (index >= array_of_words.length) {
        basic.showNumber(index)
    } else {
        // Show the current word that they're on
        basic.showString("" + (array_of_words[index]))
    }
})
