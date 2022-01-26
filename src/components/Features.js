import React from 'react';
import styled from 'styled-components';
import ImageOne from '../images/computer9.jpg';

const Section = styled.section`
  background: #fff;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #4444;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;

  
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    color: #140e0e;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    color: #140e0e;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
`;


const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>Built by experts with an eye for design</h1>
              <p>By using the best components, assembled by highly-trained builders, we can deliver a meticulously crafted gaming PC, backed by a comprehensive 2-year warranty.</p>
               </Content>
          </ColumnLeft>
          <ColumnRight>
          <Content>
            <Image src={ImageOne}/>
            </Content>
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
