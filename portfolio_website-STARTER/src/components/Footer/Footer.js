import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:727-826-0607'>727-826-0607</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:ddeyphysics2010@gmail.com'>ddeyphysics2010@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovation to Creation
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/TemporaAndromeda'><AiFillGithub size='2rem'/></SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/dip-dey-ab00361bb/'><AiFillLinkedin size='2rem'/></SocialIcons>
        <SocialIcons href='https://instagram.com/_dip_dey/'><AiFillInstagram size='2rem'/></SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
