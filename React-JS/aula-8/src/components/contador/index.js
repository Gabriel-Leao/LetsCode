import { useState } from "react";
import PropTypes from 'prop-types';

export function Contador({passo}) {
  const [count, setCount] = useState(0)

  const [historico, setHistorico] = useState({
    decremented: [],
    incremented: []
  })

  function adicionar() {
    setCount(count + passo)
    setHistorico({...historico, 
      incremented: [...historico.incremented, count]})
  }

  function diminuir() {
    setCount(count - passo)
    setHistorico({...historico, 
      decremented: [...historico.decremented, count]
    })
  }
  return (
    <div>
      <h1>A contagem está em: {count}</h1>
      <p>O histórico de números é: {`${historico.incremented}`}</p>
      <p>O histórico de números é: {`${historico.decremented}`}</p>
      <button onClick={adicionar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  )
}

Contador.deafultProps = {
  passo: 1
}

Contador.propTypes = {
  passo: PropTypes.number
}