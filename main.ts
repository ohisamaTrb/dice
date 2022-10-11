input.onButtonPressed(Button.A, function () {
    max += -1
    if (max < 1) {
        max += 1
    }
    basic.showNumber(max)
})
input.onGesture(Gesture.Shake, function () {
    showResult()
})
input.onButtonPressed(Button.B, function () {
    max += 1
    basic.showNumber(max)
})
function showResult () {
    random = randint(1, max)
    for (let image of animation) {
        image.showImage(0)
    }
    basic.showNumber(random)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    showResult()
})
let animation: Image[] = []
let max = 0
let random = 0
random = 0
max = 6
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
    `)
]
