import React from 'react';
import styled from 'styled-components/macro';
import computer from '../images/computer7.jpg';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';


const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #D2D2D2;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Hero = () => {
    return (
      <HeroSection>
      <HeroWrapper>
      <HeroImage src={computer}/>
      <HeroContent>
      <h1>Gentek Games</h1>
      <p>Engineering your Dream PC.</p>
      <Button to='/contact'> Lets Work<Arrow/>
      </Button>
      </HeroContent>
      </HeroWrapper>
      </HeroSection>
                      
  );
};

export default Hero;
