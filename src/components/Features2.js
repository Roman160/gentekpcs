import React from 'react';
import styled from 'styled-components';
import ImageOne from '../images/computer4.jpg';

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

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
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
  top: 90px;
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


const Features2 = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content>
            <Image src={ImageOne}/>
               </Content>
          </ColumnLeft>
          <ColumnRight>
          <Content>
          <h1>A Closer look </h1>
              <p>Genteck has been an industry leader in the production of portable computers since its inception in 1985. In its three decades of service, Sager has developed a reputation for offering the most advanced technologies at prices unrivaled in the industry, while backing all of their products with the best warranties in the business. Focusing exclusively on portable PCs, Sager is consistently among the first to break new ground in implementing technical advances for mobile computing, including powerful solutions for mobile gaming, video editing, and advanced business applications.</p>
            </Content>
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
     );
};

export default Features2;
