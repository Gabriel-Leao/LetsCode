import { useState } from "react";
import PropTypes from 'prop-types';

export function Contador({passo}) {
  const [count, setCount] = useState(0)

  function adicionar() {
    setCount(count + passo)
  }

  function diminuir() {
    setCount(count - passo)
  }
  return (
    <div>
      <h1>A contagem está em: {count}</h1>
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