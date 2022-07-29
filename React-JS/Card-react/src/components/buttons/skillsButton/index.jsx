import { styled } from '@stitches/react'

const SkillsButton = styled('button', {
  backgroundColor: 'transparent',
  fontSize: '13px',
  border: '1px solid #5C5873',
  color: '#fff',
  textAlign: 'center',
  padding: '9px 16px',
  cursor: 'pointer',
  margin: '0px 3px',
  marginBottom: '10px',
  opacity: '1',
  transition: '.15s opacity ease',

  '&:hover': {
    opacity: '.75'
  },
})

export default ({children}) => <SkillsButton>{children}</SkillsButton>