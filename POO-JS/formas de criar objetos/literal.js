const microfone = {
    color: "black",
    isOn: true,
    // forma encurtada de criar um método
    toggleOnOff() {
        if (microfone.isOn) {
            console.log("Desligar")
        } else {
            console.log("Ligar")
        }
        // Nega o microfone.isOn se ele for true muda para false, se for false muda para true
        microfone.isOn = !microfone.isOn
    }
}

console.log(microfone)
microfone.toggleOnOff()
microfone.toggleOnOff()