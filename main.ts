input.onButtonPressed(Button.A, function () {
    maxNo += -1
    if (maxNo < 1) {
        maxNo += 1
    }
    basic.showNumber(maxNo)
})
input.onGesture(Gesture.Shake, function () {
    if (roll == false) {
        showResult()
    }
})
input.onButtonPressed(Button.B, function () {
    maxNo += 1
    basic.showNumber(maxNo)
})
function showResult () {
    roll = true
    random = randint(1, maxNo)
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
let maxNo = 0
let random = 0
random = 0
maxNo = 6
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
