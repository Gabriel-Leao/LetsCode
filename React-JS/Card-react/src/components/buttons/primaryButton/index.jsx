import { styled } from '@stitches/react'

const PrimaryButton = styled('button', {
  backgroundColor: '#00BECD',
  fontSize: '13px',
  border: '0',
  color: 'black',
  textAlign: 'center',
  padding: '10px 30px',
  cursor: 'pointer',
  marginRight: '8px',
  opacity: '1',
  transition: '.15s opacity ease',

  '&:hover': {
    opacity: '.75'
  },
})

export default ({children}) => <PrimaryButton>{children}</PrimaryButton>