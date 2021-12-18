import React from "react";
import tw, { styled } from "twin.macro";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/exata2.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { Link } from 'react-scroll';

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-5 lg:py-5`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20`;
// const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-3 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const LinkItem = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4 cursor-pointer`;
const LinkItemSpan = tw.span`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4 cursor-pointer`;

const SocialLinksContainer = tw.div`mt-3`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const CopyrightText = tw.p`text-center mt-3 font-medium tracking-wide text-sm text-gray-600`

export default ({ showAll = true }) => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <LinksContainer>
            {showAll && (
            <Link activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}>
              <LinkItemSpan>Início</LinkItemSpan>
            </Link>)}
            {!showAll && (
              <LinkItem href="/">Início</LinkItem>
            )}
            {/* <DropDownProdutos textBlack={true} key={6}/> */}
            {showAll && (
            <Link activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}>
              <LinkItemSpan>Sobre</LinkItemSpan>
            </Link>)}
            {showAll && (
            <Link activeClass="active"
              to="faca-parte" 
              spy={true}
              smooth={true}
              offset={20}
              duration={500}>
              <LinkItemSpan>Faça parte</LinkItemSpan>
            </Link>)}
            <Link activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}>
              <LinkItemSpan>Contato</LinkItemSpan>
            </Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com/exata.net">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/exata_es/">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCbzVFsdx1Ek1TLIZzR-jLzw">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright {new Date().getFullYear()}, Exata Consultoria e Projetos LTDA. Todos direitos Reservados.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
