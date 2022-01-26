import React from 'react';
import styled, { css } from 'styled-components/macro';
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';


const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  background-color: #000d1a;

  h2 {
    color: fff;
  }

  `;


const FooterBottom = styled.div`
  display: flex;
  padding: 1rem 0rem;


  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #fff;
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Github = styled(FaGithub)`
  ${Icons}
`;

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;


const Footer = () => {
  return (
    <>
      <Container>
        <FooterBottom>
          <SocialIcons>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Instagram />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              < Github />
            </a>
            <a
              href='//www.google.com'
              rel='noopener noreferrer'
              target='_blank'

            >
              <LinkedIn />
            </a>
          </SocialIcons>
        </FooterBottom>
      </Container>
    </>
  );
};

export default Footer;
