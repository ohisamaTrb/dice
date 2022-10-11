def on_button_pressed_a():
    global max2
    max2 += -1
    if max2 < 1:
        max2 += 1
    basic.show_number(max2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    showResult()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_b():
    global max2
    max2 += 1
    basic.show_number(max2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def showResult():
    global random
    random = randint(1, max2)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_leds("""
        . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
    """)
    basic.show_leds("""
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
    basic.show_number(random)

def on_logo_pressed():
    showResult()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

max2 = 0
random = 0
random = 0
max2 = 6