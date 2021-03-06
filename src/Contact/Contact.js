import React from 'react'
import styled from 'styled-components'
import { Parallax } from "react-parallax";

import { Title, Line, LinesContainer, Square } from '../AboutUs/Description'
import Image from './scissors.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: space-around;
  background-size: cover;
`
const MyTitle = styled(Title)`
  width: 300px;
  height: 50px;
  text-align: center;
  color: #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
`
const Container = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Method = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 5px;
  color: #d6d6d6;

  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 430px) {
    font-size: 15px;
  }
  @media (max-width: 350px) {
    font-size: 10px;
  }
`

export default function Contact() {
  return (
    <Parallax bgImage={Image} strength={500}>
      <Wrapper>
        <MyTitle>CONTACT US</MyTitle>
        <LinesContainer>
          <Line />
          <Square className="fas fa-square-full" />
          <Line />
        </LinesContainer>
        <Container>
          <Method>
            <i style={{ marginRight: '25px', color: '#e0a240' }} class="fas fa-phone" />
            221-3642233
          </Method>
          <Method>
            <i style={{ marginRight: '25px', color: '#e0a240' }} class="fas fa-envelope" />
              AWESOMEWEBSITESLP@GMAIL.COM
          </Method>
        </Container>
      </Wrapper>
    </Parallax>

  )
}