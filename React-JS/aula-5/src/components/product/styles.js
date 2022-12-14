import styled from 'styled-components'

export const Container = styled.article`
  background-color: #2a2f40;
  color: #fff;
  display: flex;
  flex-direction: row;
`

export const PhotoArea = styled.div`
  background-color: #ff6d39;
  border-radius: 0 50% 50% 0;
  height: 300px;
  width: 300px;
  position: relative;
  & img {
    position: absolute;
    top: -100px;
    left: -120px;
    pointer-events: none;
  }
`

export const InfoArea = styled.div`
  flex: 1;
  padding: 15px;
`

export const ActionsArea = styled.div`
  display: flex;
  & Button:first-of-type {
    margin-right: 30px;
  }
`