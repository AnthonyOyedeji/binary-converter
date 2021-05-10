let input2 = 0
let Achange = 0
let Bchange = 0
input.onButtonPressed(Button.A, function () {
    input2 += Achange
    basic.showNumber(input2)
})
input.onButtonPressed(Button.B, function () {
    Bchange += Bchange
    basic.showNumber(input2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Achange = Achange * -1
})
basic.forever(function () {
	
})
