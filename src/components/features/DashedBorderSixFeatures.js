import React from "react";
import { Link } from 'react-scroll';
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;
//md:py-24 tinha isso aqui no final da linha 23
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto `}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const PrimaryAction = tw.button`lg:mx-0 mt-2 w-full
mr-2! px-4 py-2 rounded bg-blue-500 text-gray-100 
hocus:bg-yellow-600! focus:shadow-outline transition duration-300 
border-b-0 
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-blue-500 rounded-lg mt-12 transition duration-300 `}
  &:hover {
    ${tw`bg-gradient-to-r from-blue-300 to-blue-500 border-none`}
    .imageContainer {
      ${tw`border-gray-100 bg-gray-100`}
    }
  
    .title {
      ${tw`text-gray-100 `}
    }
  
    .description {
      ${tw`text-gray-100 `}
    }
    ${PrimaryAction} {
      ${tw`bg-yellow-500`}
    }
  }
  .imageContainer {
    ${tw`border-2 border-blue-500 text-center rounded-full p-6 flex-shrink-0 relative `}
    img {
      ${tw`w-8 h-8 `}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center `}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-blue-500 `}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose sm:h-40`}
  }
  
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Automação Exata",
      description: "Gestão completa para supermercados, comércio em geral, oficinas, serviços, transportes, restaurantes e lanchonetes."
    },
    { 
      imageSrc: CustomizeIconImage,
      title: "Alô Contador",
      click: () => {
        window.open("https://alocontador.com.br", "_blank");
      },
      description: "Armazene todos os arquivos XML’s da sua empresa. Consulta, download, gestão e armazenamento ilimitado de qualquer XML emitido para o seu CNPJ, direto da Sefaz.",
    },
    { 
      imageSrc: ReliableIconImage,
      title: "Pedido ON",
      description: "Aplicativo e site responsivo para controle e gestão dos pedidos de vendedores externos. Integração com qualquer sistema do mercado.",
    },
    { 
      imageSrc: FastIconImage, 
      title: "Apps e Sites",
      description: "Desenvolvemos sites e aplicativos de acordo com a sua necessidade. O site é como a vitrine da sua loja física, por isso a sua empresa merece um site profissional."
    },
    { 
      imageSrc: SimpleIconImage,
      title: "Equipamentos",
      description: "Somos assistência técnica e revenda das principais marcas de produtos para automação comercial."
    },
    { 
      imageSrc: SupportIconImage,
      title: "Certificado Digital",
      description: "Emitimos e renovamos todos os tipos de certificado digital que você precisa, e de forma on-line."
    },
  ];

  return (
    <Container id="produtos">
      <ThreeColumnContainer>
        <Heading>Nossos <span tw="text-blue-500">Produtos</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
                {card.click ?
                  <PrimaryAction onClick={card.click}>Quero!</PrimaryAction> :
                  <Link activeClass="active"
                      to={card.to || "contato"}
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      >
                    <PrimaryAction>Quero!</PrimaryAction>
                  </Link>} 
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
