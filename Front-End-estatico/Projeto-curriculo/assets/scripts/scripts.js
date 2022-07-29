const html = document.querySelector("html")
const checkbox = document.querySelector("input")

const getStyle = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    bodyColor: getStyle(html, "--body-color"),
    containerColor: getStyle(html, "--container-color"),
    containerAlt: getStyle(html, "--container-alt")
}

const darkMode = {
    bodyColor: "#333333",
    containerColor: "#333333",
    containerAlt:  "#383838"
}

const tranformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(tranformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})