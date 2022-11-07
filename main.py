def on_button_pressed_a():
    global maxNo
    maxNo += -1
    if maxNo < 1:
        maxNo += 1
    print("maxNo:" + ("" + str(maxNo)))
    basic.show_number(maxNo)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    if roll == False:
        showResult()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_b():
    global maxNo
    maxNo += 1
    print("maxNo:" + ("" + str(maxNo)))
    basic.show_number(maxNo)
input.on_button_pressed(Button.B, on_button_pressed_b)

def showResult():
    global roll, random
    roll = True
    random = randint(1, maxNo)
    for image in animation:
        image.show_image(0)
    basic.show_number(random)
    print("roll:" + ("" + str(random)))
    roll = False

def on_logo_pressed():
    if roll == False:
        showResult()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

animation: List[Image] = []
roll = False
maxNo = 0
random = 0
random = 0
maxNo = 6
roll = False
animation = [images.create_image("""
        . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
    """),
    images.icon_image(IconNames.SMALL_DIAMOND),
    images.icon_image(IconNames.DIAMOND),
    images.create_image("""
        . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
    """),
    images.create_image("""
        # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
    """),
    images.create_image("""
        . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
    """)]
print("ready")