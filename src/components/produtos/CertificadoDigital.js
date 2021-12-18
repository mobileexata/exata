import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeaturesNew from "components/features/ThreeColSimpleNotCards.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import QueroEstaSolucaoButton from "components/buttons/QueroEstaSolucaoButton";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
const DescriptionFontSm = tw.div`text-base text-left sm:text-center`

const principaisFuncionalidades = ["e-CNPJ", "e-CPF", "e-Advogado", "e-Saúde"];


export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <FeaturesNew
        subheading={<Subheading>Certificado Digital</Subheading>}
        heading={
          <span tw="text-4xl tracking-tight">Emitimos e renovamos todos os tipos de certificado digital que você precisa, e de forma on-line.</span>
        }
        description={<DescriptionFontSm>
          {principaisFuncionalidades.map((func, index) => (
            <p key={index}>• {func}</p>
          ))}
        </DescriptionFontSm>}
      />
      <QueroEstaSolucaoButton textButton={`Quero um orçamento`}/>
      <ContactUsForm />
      <Footer showAll={false} />
    </AnimationRevealPage>
  );
};
