import SecundaryButton from '../buttons/secundaryButton'
import SkillsButton from '../buttons/skillsButton'
import CardInfo from '../info'
import ProLabel from '../proLabel'
import { styled } from '@stitches/react'
import PrimaryButton from '../buttons/primaryButton'

const DivPrincipal = styled('div', {
  height: '100vh',
  width: "100vw",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#28223E'
})

const DivCard = styled('div', {
  backgroundColor: '#231F3A',
  color: '#fff',
  height: '550px',
  width: '390px',
  borderRadius: '20px'
})

const DivPro = styled('div', {
  borderRadius: '30px',
  backgroundColor: '#231F3A',
  textAlign: 'justify',
  padding: '20px',
})

const DivButton = styled('div', {
  textAlign: 'center',
  margin: '15px'
})

const DivSkills = styled('div', {
  backgroundColor: '#1F1B36',
  color: '#fff',
  textAlign: 'justify',
  padding: '3px 20px',
  marginTop: '20px',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
})

export default function Card({card}) {
  return (
    <DivPrincipal>
      <DivCard>
        <DivPro>
          <ProLabel>pro</ProLabel>
        </DivPro>
        <CardInfo card={card}></CardInfo>
        <DivButton>
          <PrimaryButton>Message</PrimaryButton>
          <SecundaryButton>Following</SecundaryButton>
        </DivButton>
        <DivSkills>
          <h3>Skills</h3>
          {card.skills.map(skill => <SkillsButton key={skill}>{skill}</SkillsButton>)}
        </DivSkills>
      </DivCard>
    </DivPrincipal>
  )
}