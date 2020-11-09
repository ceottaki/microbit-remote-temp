input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "sendTemp") {
        radio.sendValue("temp", input.temperature())
    }
})
input.onButtonPressed(Button.B, function () {
    waitingRemoteTemp = 1
    radio.sendString("sendTemp")
    basic.pause(5000)
    if (waitingRemoteTemp == 1) {
        waitingRemoteTemp = 0
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "temp") {
        waitingRemoteTemp = 0
        basic.pause(500)
        basic.showNumber(value)
    }
})
let waitingRemoteTemp = 0
radio.setGroup(177)
waitingRemoteTemp = 0
basic.forever(function () {
    while (waitingRemoteTemp == 1) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(100)
    }
})
