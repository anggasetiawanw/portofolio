import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Whatsapp</LinkTitle>
          <LinkItem href="https://wa.me/+6282218078826">Whatsapp</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:anggasetiaw@gmail.com">
            anggasetiaw@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; {year} Angga All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/anggasetiawanw">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/anggasetiawanw/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
