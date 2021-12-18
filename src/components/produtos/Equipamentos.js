import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import Features from "components/features/ThreeColSimple.js";
import QueroEstaSolucaoButton from "components/buttons/QueroEstaSolucaoButton";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import impressorasNaoFiscais from "images/produtos/impressora-nao-fiscal.png";
import gavetaDinheiro from "images/produtos/gaveta-dinheiro.png";
import leitorCodBarras from "images/produtos/leitor-cod-barras.png";
import controlePontoGertec from "images/produtos/controle-ponto-gertec.png";
import terminalDeConsultaGertec from "images/produtos/terminal-de-consulta-gertec.png";
import impressoraArgox from "images/produtos/impressora-argox.png";
import microcomputador from "images/produtos/microcomputador.png";
import balancaPrix from "images/produtos/balanca-prix.png";
import noBreak from "images/produtos/no-break.png";
import cameraIntelbras from "images/produtos/camera-intelbras.png";
import monitor from "images/produtos/monitor.png";
import servidorThinkServer from "images/produtos/servidor-think-server.png";
import placaRede from "images/produtos/placa-rede.png";
import rackCabo from "images/produtos/rack-cabo.png";
import coletorDados from "images/produtos/coletor-dados.png";
import manutencaoComputadores from "images/produtos/manutencao-computadores.png";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features
        heading={
          <>
            Somos assistência técnica e revenda das principais marcas de produtos para automação comercial, como:
          </>
        }
        cards={[
            {
              imageSrc: impressorasNaoFiscais,
              title: "Impressoras não fiscais"
            },
            {
              imageSrc: gavetaDinheiro, 
              title: "Gavetas de dinheiro"
            },
            {
              imageSrc: leitorCodBarras, 
              title: "Leitores de código de barras"
            },
            {
              imageSrc: controlePontoGertec, 
              title: "Controle de ponto"
            },
            {
              imageSrc: terminalDeConsultaGertec, 
              title: "Terminais de consulta"
            },
            {
              imageSrc: impressoraArgox, 
              title: "Impressora de etiquetas"
            },
            {
              imageSrc: microcomputador, 
              title: "Microcomputador"
            },
            {
              imageSrc: balancaPrix, 
              title: "Linha de balanças"
            },
            {
              imageSrc: noBreak, 
              title: "Linha de nobreaks"
            },
            {
              imageSrc: cameraIntelbras, 
              title: "Segurança eletrônica"
            },
            {
              imageSrc: monitor, 
              title: "Monitores e projetores"
            },
            {
              imageSrc: servidorThinkServer, 
              title: "Servidores"
            },
            {
              imageSrc: placaRede, 
              title: "Linha de conectividade"
            },
            {
              imageSrc: rackCabo, 
              title: "Linha de rack e cabeamento estruturado"
            },
            {
              imageSrc: coletorDados, 
              title: "Coletor de dados"
            },
            {
              imageSrc: manutencaoComputadores, 
              title: "Manutenção de redes e computadores"
            },
        ]}
        columnW13={false}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20! rounded-full bg-blue-200 border-2 border-blue-900 max-w-full`}
      />
      <QueroEstaSolucaoButton textButton={`Quero um orçamento`}/>
      <ContactUsForm />
      <Footer showAll={false} />
    </AnimationRevealPage>
  );
};
