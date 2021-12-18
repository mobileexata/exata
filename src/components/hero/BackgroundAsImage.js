import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Link } from 'react-scroll';
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks, NavLinkSpan, PrimaryLinkSpan } from "../headers/light.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import DropDownProdutos from '../dropdownbuttons/DropDownProdutos.js';
import BgImg from 'images/new/bg4.png';

// ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${NavLink} {
    ${tw`text-blue-500 hover:border-blue-500 `}
  }
  ${DesktopNavLinks}, ${LogoLink} {
    ${tw`text-blue-500 hover:border-gray-300 hover:text-gray-300`}
    
  }
  ${NavToggle}.closed {
    ${tw`text-blue-500 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 py-3 bg-center bg-cover`}
    @media(min-width: 640px) {
      background-image: url("${BgImg}");
      z-index: 1;
    }
  `;

const Container2 = tw.div``;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block max-w-xl`;


const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-500 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm 
    sm:text-base sm:mt-16 sm:px-8 sm:py-4 
    bg-blue-500 text-gray-100 font-bold rounded shadow transition duration-300 
    hocus:bg-blue-700 focus:shadow-outline`;
    
const SecondAction = tw.button`ml-5 mr-5 sm:mr-1 px-8 py-3 mt-10 text-sm 
    sm:text-base sm:mt-16 sm:px-8 sm:py-4 
    bg-yellow-500 text-gray-100 font-bold rounded shadow transition duration-300 
    hocus:bg-yellow-600 focus:shadow-outline`;


const IFrameVideo = styled.iframe`
  ${tw`absolute w-full h-full hidden sm:block`}
  webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  padding-left: 20px;
  left: 75%;
  top: 50%;
`;
export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <DropDownProdutos key={7} tw="mb-3!" />
      <Link tw="mb-3!" activeClass="active" to="sobre" spy={true} smooth={true} offset={20} duration={500}>
        <NavLinkSpan>
          Sobre
        </NavLinkSpan>
      </Link>
      <Link tw="mb-3!" activeClass="active" to="faca-parte" spy={true} smooth={true} offset={20} duration={500}>
        <NavLinkSpan>
          Faça Parte
        </NavLinkSpan>
      </Link>
      <Link tw="mb-5!" activeClass="active" to="contato" spy={true} smooth={true} offset={-20} duration={500}>
        <NavLinkSpan>
          Contato
        </NavLinkSpan>
      </Link>
    </NavLinks>,
    <NavLinks key={2}>
      <Link activeClass="active" to="contato" spy={true} smooth={true} offset={-20} duration={500}>
        <PrimaryLinkSpan>
          Quero uma demonstração
        </PrimaryLinkSpan>
      </Link>
      <PrimaryLink href="http://exataconsultoria.mysuite2.com.br/client/login.php?urlorigem=exataconsultoria.mysuite2.com.br" target="_blank">
        Atendimento
      </PrimaryLink>
      <PrimaryLink href="https://www.sicoob.com.br/web/sicoob/segunda-via-boleto" target="_blank">
        2ª Via Boleto
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container2>
      <IFrameVideo
        src="https://www.youtube.com/embed/l9-QwdtRvZY?autoplay=1&loop=1&autopause=0&controls=0&mute=1&playlist=wMchxtsIUcU"
        title="Exata"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </IFrameVideo>
      <Container id="home">
        <HeroContainer>
          <StyledHeader links={navLinks} />
          <TwoColumn>
            <LeftColumn>
              {/* <Notification>We have now launched operations in Europe.</Notification> */}
              <Heading>
                <span>Automatize seu negócio com nossas soluções e aumente seus resultados</span>
                {/* <br /> */}
                {/* <SlantedBackground>.</SlantedBackground> */}
              </Heading>
                <Link activeClass="active" to="produtos" spy={true} smooth={true} offset={20} duration={500}>
                <PrimaryAction>Nossos Produtos</PrimaryAction>
              </Link>
              <Link activeClass="active" to="contato" spy={true} smooth={true} offset={-20} duration={500}>
                <SecondAction>Entre em contato</SecondAction>
              </Link>
            </LeftColumn>
            {/* <RightColumn>
              <StyledResponsiveVideoEmbed
                url="https://player.vimeo.com/video/548953749?autoplay=1&loop=1&title=0&byline=0&portrait=0"
                background="transparent"
              />
            </RightColumn> */}
          </TwoColumn>
        </HeroContainer>
      </Container>
    </Container2>
  );
};
