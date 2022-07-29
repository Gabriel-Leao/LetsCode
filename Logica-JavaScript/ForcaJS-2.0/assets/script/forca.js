let tent = 6; 
let listaDinamica = [];
const letrasErradas = [];
let categoriaPalavraSecreta; 
let palavraSecreta; 
let elementos;
let xp = 0;
let xpNumber = document.getElementById('xp-number');

function mostrar() { 
    let categoria = document.querySelector(".categoria"); 
    categoria.innerHTML = categoriaPalavraSecreta; 
 
    let palavra = document.querySelector(".palavra-secreta"); 
    palavra.innerHTML = ""; 
 
    for (i = 0; i < palavraSecreta.length; i++) { 
        if (listaDinamica[i] == undefined) { 
            listaDinamica[i] = "&nbsp;" 
            palavra.innerHTML = palavra.innerHTML += `<div class="letras">${listaDinamica[i]}</div>`
        } else { 
            palavra.innerHTML = palavra.innerHTML += `<div class="letras">${listaDinamica[i]}</div>`
        } 
    } 
}

fetch("./assets/json/lista.json") 
    .then(response => { 
        return response.json();
    }) 
    .then(jsondata => { 
        elementos = jsondata; 

        function sortear(elementos) {
            let indice = parseInt(Math.random() * elementos.length); 

            categoriaPalavraSecreta = elementos[indice].categoria; 

            palavraSecreta = elementos[indice].nome;

            xp =  elementos[indice].xp;
    
        } 
        sortear(elementos); 
        mostrar();

    });

    function verificarLetra(letra) {  
        const posicao = palavraSecreta.indexOf(letra);
        if (letrasErradas.includes(letra) || listaDinamica.includes(letra)) {
            letraRepetida()
        } else if (posicao < 0) { 
            tent--;
            letrasErradas.push(letra);
            desenharForca();
            Erradas();
            return certo = false;
        } else {
            for (i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] == letra) { 
                    listaDinamica[i] = letra;
                }
            }
            return certo = true;
        } 
    } 
    
    function mudarEstilo(teclas, boolean) {
        if (certo == true) {
            document.getElementById(teclas).style.background = "var(--letra-certa)";
        } else {
            document.getElementById(teclas).style.background = "var(--letra-errada)";
        }
    } 

    function lerLetra(letra) { 
        if (tent > 0) { 
            mudarEstilo("letra-" + letra, verificarLetra(letra)); 
            mostrar()
            checarJogo()
        }
    }
    function desenharForca() {
        const partesCorpo = document.querySelectorAll(".partes-corpo")
        for(let i = 0; i < letrasErradas.length; i++) {
            partesCorpo[i].style.display = "block"
        }
    }

    function Erradas() {
        const erradas = document.querySelector('.letras-erradas')
        erradas.innerHTML = "<h3>Letras erradas</h3>"
        letrasErradas.forEach(letra => {
            erradas.innerHTML += `<span>${letra}</span>`
        })
    }

    function checarJogo() {
        let mensagem = ""
        const partesCorpo = document.querySelectorAll(".partes-corpo")
        const certas = listaDinamica.join('')
        if (letrasErradas.length === partesCorpo.length) {
            mensagem = "Fim de jogo! Vocẽ perdeu!"
            document.querySelector('#mensagem-perdeu').innerHTML = mensagem
            document.querySelector('.popup-perdeu').style.display = "flex"
            document.getElementById('btn-perdeu').focus()
        } else if (palavraSecreta === certas) {
            xpNumber.innerText = xp
            mensagem = "Parabéns! Você ganhou!"
            document.querySelector('#mensagem-venceu').innerHTML = mensagem
            document.querySelector('.popup-venceu').style.display = "flex"
            document.getElementById('btn-venceu').focus()
        }
    }

    function letraRepetida() {
        const aviso = document.querySelector(".letra-repetida")
        aviso.classList.add('show')
        setTimeout(() => {
            aviso.classList.remove('show')
        }, 1000)
    }

    function reiniciarJogo() {
        window.location.reload()
    }