import styled from "styled-components"

export const StyledBtn = styled.button`
  background: none;
  border: 3px solid #ccc;
  outline: none;

  ${({checked}) => checked && `
    border-color: lime;
  `}
`