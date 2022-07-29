function createMicrofone(color = "black") {
    let isOn = true

    function toggleOnOff() {
        if (isOn) {
            console.log("Desligar")
        } else {
            console.log("Ligar")
        }
        // Nega o microfone.isOn se ele for true muda para false, se for false muda para true
        isOn = !isOn
    }

    return { color, toggleOnOff }
}

const microfoneBlack = createMicrofone()
const microfoneWhite = createMicrofone("white")

console.log(microfoneBlack)
console.log(microfoneWhite)