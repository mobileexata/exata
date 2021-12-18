import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Features from "components/features/ThreeColSimple.js";
import FeaturesNew from "components/features/ThreeColSimpleNotCards.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import QueroEstaSolucaoButton from "components/buttons/QueroEstaSolucaoButton";

// const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <FeaturesNew
        // subheading={<Subheading>Vendas</Subheading>}
        heading="Pedido ON"
        description="Plataforma web composta de site responsivo + aplicativo para que a equipe de vendedores externos tire seus pedidos de forma online."
      />
      <Features
        heading={<>O que nós <span tw="text-blue-500">faremos por você!</span></>}
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Tecnologia atual",
            description: "Desenvolvemos o sistema utilizando tecnologias e conceitos atuais. Estamos sempre buscando o melhor para sua empresa"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Treinamento no sistema",
            description: "Após a implantação do sistema na sua empresa, você e sua equipe receberão todos os treinamentos necessários e ILIMITADOS"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Suporte de qualidade",
            description: "Sabe aqueles “caras chatos” do suporte? Eles não habitam aqui! Precisando de ajuda para entender qualquer processo, basta entrar em contato"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Resultados mais previsíveis",
            description: "Fornecemos relatórios completos para você acompanhar os resultados e desafios de cada vendedor em tempo real"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Mais confiança sobre o processo comercial",
            description: "Decisões mais assertivas a partir de uma visão mais ampla do processo comercial"
          },
        ]}
        linkText=""
      />
      <QueroEstaSolucaoButton />
      <ContactUsForm />
      <Footer showAll={false} />
    </AnimationRevealPage>
  );
};
