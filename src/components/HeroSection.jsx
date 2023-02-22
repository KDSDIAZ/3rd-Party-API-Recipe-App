import React from 'react'
import styled from 'styled-components'
import heroPic from '../images/heroPic.png'

function HeroSection() {
  return (
    <Hero>
      <h3>Get access to a world of delicious recipes at your fingertips with our Recipe app!</h3>
      <img src={heroPic} alt="" />
    </Hero>
  )
}

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;

  h3{
    color: white;
  }

  img{
    height: 100%;
    max-height: 40vh;
  }

`;

export default HeroSection