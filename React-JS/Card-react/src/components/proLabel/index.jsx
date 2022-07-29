import { styled } from '@stitches/react'

const ProLabel = styled('span', {
  backgroundColor: '#FFC72C',
  fontSize: '15px',
  padding: '8px 15px',
  borderRadius: '3px',
  color: 'black',
  textAlign: 'center',
  fontWeight: '800',
})

export default ({children}) => <ProLabel>{children.toUpperCase()}</ProLabel>