import { useState } from "react"
import { StyledBtn } from "./styles"

export function CheckableButton({children}) {
  const [checked, setChecked] = useState(false)

  function check() {
    setChecked(!checked)
  }

  return (
    <StyledBtn onClick={check}>{checked ? 'checked' : 'not checked'}</StyledBtn>
  )
}