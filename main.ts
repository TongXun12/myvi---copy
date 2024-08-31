enum RadioMessage {
    message1 = 49434,
    O = 59125,
    Oo = 40635,
    Ooo = 33544
}
let Brake = 0
radio.onReceivedMessage(RadioMessage.Oo, function () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Forward, 119)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 119)
    basic.pause(500)
    motionbit.runMotor(MotionBitMotorChannel.All, MotionBitMotorDirection.Forward, 128)
})
radio.onReceivedMessage(RadioMessage.O, function () {
    motionbit.runMotor(MotionBitMotorChannel.M2, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 119)
    motionbit.runMotor(MotionBitMotorChannel.M4, MotionBitMotorDirection.Forward, 119)
    basic.pause(500)
    motionbit.runMotor(MotionBitMotorChannel.All, MotionBitMotorDirection.Forward, 128)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.Oo)
})
radio.onReceivedMessage(RadioMessage.Ooo, function () {
    if (Brake == 0) {
        motionbit.runMotor(MotionBitMotorChannel.All, MotionBitMotorDirection.Forward, 128)
        Brake = 1
    } else if (Brake == 1) {
        motionbit.brakeMotor(MotionBitMotorChannel.All)
        Brake = 0
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.O)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendMessage(RadioMessage.Ooo)
})
