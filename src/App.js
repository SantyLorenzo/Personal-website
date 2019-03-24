import React from 'react'
import styled from 'styled-components'

import Texture from './AboutUs/texture.png'

import Home from './Home/Home'
import About from './AboutUs/About'
import OurWork from './OurWork/OurWork'
import Location from './Location/Location'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Space = styled.div`
  width: 100%;
  height: 150px;
  background: url(${Texture});
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <Wrapper>
      <Home />
      <About />
      <Space />
      <OurWork />
      <Space />
      <Location />
    </Wrapper>
  )
}

