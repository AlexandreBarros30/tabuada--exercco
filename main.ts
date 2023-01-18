let Tabuada = 0
input.onButtonPressed(Button.A, function () {
    if (Tabuada) {
        basic.showNumber(randint(1, 10))
        Tabuada = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 10))
})
