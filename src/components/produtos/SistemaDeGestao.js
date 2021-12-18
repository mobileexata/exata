import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Features from "components/features/ThreeColSimple.js";
import FeaturesNew from "components/features/ThreeColSimpleNotCards.js";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import QueroEstaSolucaoButton from "components/buttons/QueroEstaSolucaoButton";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const DescriptionFontSm = tw.div`text-base text-left`

const principaisFuncionalidades = [
  "Ferramenta parametrizada que facilita a sua adequação aos diversos ramos de atividades.",
  "Controle de acesso por usuário.",
  "Emissão de NFC-e, NF-e, NFS-e, MDF-e, CT-e, CT-e transporte e transporte de passageiros, enfim, todas as siglas fiscais obrigatórias.",
  "Geração de SPED, inventário e o que mais o fisco exigir.",
  "Gestão financeira, com integração de boletos e contas bancárias, conciliação de cartão.",
  "Controle de ordens de serviços.",
  "Controle de centro de custo e estoque.",
  "Gestão de clientes com controle de pontuação, disparos de SMS e renegociação de dívidas.",
];


export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <FeaturesNew
        subheading={<Subheading>Sistema de Gestão</Subheading>}
        heading="O Automação Exata."
        description="É um sistema para gestão de comércios varejistas em geral, que vai informatizar e unificar todas as informações da sua empresa, garantindo a transformação de dados em informação, promovendo assim o conhecimento do seu negócio para a correta tomada de decisões."
      />
      <FeaturesNew
        // subheading={<Subheading>Principais funcionalidades</Subheading>}
        heading="Principais funcionalidades"
        description={<DescriptionFontSm>
          {principaisFuncionalidades.map((func, index) => (
            <p key={index}>• {func.trim()}</p>
          ))}
        </DescriptionFontSm>}
      />
      <Features
        // subheading={<Subheading>Our Values</Subheading>}
        heading={<>O que nós <span tw="text-blue-500">faremos por você!</span></>}
        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Tecnologia atual",
            description: "Criamos os processos utilizando tecnologias e conceitos atuais. Estamos sempre buscando o melhor para sua empresa"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Treinamento no sistema",
            description: "Após a implantação e parametrização do sistema na sua empresa, você e sua equipe receberão todos os treinamentos necessários e ILIMITADOS"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Suporte de qualidade",
            description: "Sabe aqueles “caras chatos” do suporte? Eles não habitam aqui! Precisando de ajuda para entender qualquer processo, basta entrar em contato"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Gestão na palma da mão",
            description: "As principais informações de gestão da sua empresa ficam disponíveis de forma gráfica, no seu celular. Para você acessar e quando e de onde estiver"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Seus dados na nuvem",
            description: "Todos os documentos fiscais emitidos para sua empresa ficam armazenados na nuvem, para que você tenha uma preocupação a menos."
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
