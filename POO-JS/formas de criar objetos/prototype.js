function Microfone(color = "black") {
    this.color = color
    this.isOn = true

    Microfone.prototype.toggleOnOff = function() {
        if (this.isOn) {
            console.log("Desligar")
        } else {
            console.log("Ligar")
        }
        this.isOn = !this.isOn
    }
}

const microfonBlack = new Microfone()
const microfoneWhite = new Microfone("white")

console.log(microfonBlack)
console.log(microfoneWhite, microfoneWhite.toggleOnOff(), microfoneWhite.toggleOnOff())