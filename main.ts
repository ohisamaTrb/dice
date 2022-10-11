input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    max2 += -1
    if (max2 < 1) {
        max2 += 1
    }
    
    basic.showNumber(max2)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    showResult()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    max2 += 1
    basic.showNumber(max2)
})
function showResult() {
    
    random = randint(1, max2)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
    `)
    basic.showLeds(`
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    `)
    basic.showNumber(random)
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    showResult()
})
let max2 = 0
let random = 0
random = 0
max2 = 6
