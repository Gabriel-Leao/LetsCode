import { StyledContainer } from './styles'

const ColorDisplay = ({ color, onClick, selected}) => (
  <StyledContainer color={color}  onClick={onClick} selected={selected}/>
)

export default ColorDisplay