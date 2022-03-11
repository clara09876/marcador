function restar () {
	
}
input.onButtonPressed(Button.A, function () {
    sumar()
})
input.onButtonPressed(Button.AB, function () {
    score = score - 0
    basic.showNumber(score)
})
function sumar () {
	
}
input.onButtonPressed(Button.B, function () {
    restar()
})
let score = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
