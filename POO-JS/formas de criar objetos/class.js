// Muito parecida com o prototype, a diferença é que não é preciso color o ".prototype"
class Microfone {
    constructor(color = "black") {
        this.color = color
        this.isOn = true
    }

    toggleOnOff() {
        if (this.isOn) {
            console.log("Desligar")
        } else {
            console.log("Ligar")
        }
        // Nega o microfone.isOn se ele for true muda para false, se for false muda para true
        this.isOn = !this.isOn
    }
}



const microfone = new Microfone("white")

console.log(microfone)
microfone.toggleOnOff()
console.log(microfone)