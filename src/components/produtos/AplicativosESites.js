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
        // subheading={<Subheading>App's e Sites</Subheading>}
        heading="App's e Sites"
        description="Desenvolvemos sites e aplicativos para celulares personalizados, de acordo com a necessidade da sua empresa."
      />
      <Features
        // subheading={<Subheading>Our Values</Subheading>}
        heading={<>O que nós <span tw="text-blue-500">faremos por você!</span></>}
        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Site responsivo",
            description: "Seu site funcionará em qualquer dispositivo, computadores, celulares e tablets"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Tecnologia atual",
            description: "Desenvolvemos sites e aplicativos utilizando tecnologias e conceitos atuais. Estamos sempre buscando o melhor para sua empresa"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Treinamento no sistema",
            description: "Após a finalização do seu site ou app, você e sua equipe receberão todos os treinamentos necessários e ILIMITADOS"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Suporte de qualidade",
            description: "Sabe aqueles “caras chatos” do suporte? Eles não habitam aqui! Precisando de ajuda para entender qualquer processo, basta entrar em contato"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Leiaute personalizado",
            description: "Personalizamos o site e aplicativo da sua empresa levando em consideração seu estudo de marca, ou seja, tudo será criado pensando em você"
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
