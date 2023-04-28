input.onGesture(Gesture.Shake, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
	
})
basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, input.soundLevel())
})
