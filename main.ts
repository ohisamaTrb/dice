input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    maxNo += -1
    if (maxNo < 1) {
        maxNo += 1
    }
    
    console.log("maxNo:" + ("" + maxNo))
    basic.showNumber(maxNo)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    if (roll == false) {
        showResult()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    maxNo += 1
    console.log("maxNo:" + ("" + maxNo))
    basic.showNumber(maxNo)
})
function showResult() {
    
    roll = true
    random = randint(1, maxNo)
    for (let image of animation) {
        image.showImage(0)
    }
    basic.showNumber(random)
    console.log("roll:" + ("" + random))
    roll = false
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    if (roll == false) {
        showResult()
    }
    
})
let animation : Image[] = []
let roll = false
let random = 0
let maxNo = 0
random = 0
maxNo = 6
roll = false
animation = [images.createImage(`
        . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
    `), images.iconImage(IconNames.SmallDiamond), images.iconImage(IconNames.Diamond), images.createImage(`
        . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
    `), images.createImage(`
        # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
    `), images.createImage(`
        . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
    `)]
console.log("ready")
