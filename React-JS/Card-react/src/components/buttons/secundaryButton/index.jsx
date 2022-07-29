import { styled } from '@stitches/react'

const SecundaryButton = styled('button', {
  backgroundColor: 'transparent',
  fontSize: '13px',
  border: '1px solid #00BECD',
  color: '#00BECD',
  textAlign: 'center',
  padding: '9px 30px',
  cursor: 'pointer',
  opacity: '1',
  transition: '.15s opacity ease',

  '&:hover': {
    opacity: '.75'
  },
})

export default ({children}) => <SecundaryButton>{children}</SecundaryButton>