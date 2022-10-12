input.onButtonPressed(Button.A, function () {
    max += -1
    if (max < 1) {
        max += 1
    }
    basic.showNumber(max)
})
input.onGesture(Gesture.Shake, function () {
    if (roll == false) {
        showResult()
    }
})
input.onButtonPressed(Button.B, function () {
    max += 1
    basic.showNumber(max)
})
function showResult () {
    roll = true
    random = randint(1, max)
    for (let image of animation) {
        image.showImage(0)
    }
    basic.showNumber(random)
    roll = false
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (roll == false) {
        showResult()
    }
})
let animation: Image[] = []
let roll = false
let max = 0
let random = 0
random = 0
max = 6
roll = false
animation = [
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.iconImage(IconNames.SmallDiamond),
images.iconImage(IconNames.Diamond),
images.createImage(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `),
images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `),
images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
]
