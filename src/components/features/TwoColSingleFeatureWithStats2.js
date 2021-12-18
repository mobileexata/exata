import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { LightBulbIcon, ChartBarIcon, PlayIcon, CloudUploadIcon } from '@heroicons/react/solid';
import CoffeeCupIcon from "../../images/coffeecup.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import Spinner from "images/spinner.gif";
import config from '../../config/config';
import axios from 'axios';

const Container = tw.div`container sm:m-10 mb-5`;
const TextContent = tw.div`text-center md:text-left mt-5`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p` mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium text-secondary-100 `;

const Grid = tw.div` grid grid-cols-1 sm:grid-cols-2 sm:w-11/12`;

const Row = tw.div` flex mt-5 sm:mt-1 `;
const RowRelative = tw.div` relative sm:mr-5 `;
const IconRow = tw.div` w-10 text-blue-500 table `;
const TextSpan = tw.span` ml-3 text-lg font-medium text-gray-600 text-left `;
const PTextSpan = tw.p`text-sm text-gray-500 mt-1 mb-2`
const Form = styled.form` ${tw`mt-5 text-sm flex-col grid grid-cols-1 sm:grid-cols-4`} 
  @media (min-width: 640px) {
    max-width: 96%;
  }
`;
const Input = styled.input(({isInvalid}) => [
  tw` mt-2! border-4 w-full px-5 py-3 sm:m-1 rounded focus:outline-none font-medium transition duration-300 disabled:opacity-75 hocus:disabled:border-gray-400 hover:disabled:text-gray-100 disabled:cursor-not-allowed`,
  isInvalid ? tw`border-2 border-red-500 hocus:border-red-600` : tw`border-4 hocus:border-blue-500`
]);

const alignMentButtons = ` m-1 w-full `;
const SubmitButton = tw.button`px-8 py-3 font-bold border-yellow-500 mt-2! border-2 hocus:border-yellow-600 focus:border-yellow-600 rounded text-gray-100 hocus:bg-yellow-600 focus:bg-yellow-600 transition duration-300 ${alignMentButtons} bg-yellow-500 disabled:opacity-75 hover:disabled:bg-yellow-600 disabled:cursor-not-allowed`;

const SvgFile = tw.svg` w-8 h-5 inline-block `;
const SpanFile = tw.span` ml-1 `;
const InputFileButton = styled.button(({isInvalid}) => [
  tw` mt-2! px-5 py-3 font-bold rounded bg-blue-500 transition duration-300 ${alignMentButtons} disabled:opacity-75 hover:disabled:bg-blue-300 disabled:cursor-not-allowed border-2 border-blue-500 text-gray-100 hocus:bg-blue-700 `
]);
const InputFile = tw.input` hidden `;
const spanText = ` Anexe seu curriculum `;
const SpanInvalidFeedBack = tw.span` text-xs text-red-600 block ml-2 font-semibold mt-2 sm:mt-1 `;

const uploadFile = (e) => {
  e.preventDefault();
  const inputFile = document.getElementById('attachment');
  inputFile.click();
}

function changeAttachment(e) {
  var spanFile = document.getElementById('spanAttachment');
  if (e.target.files.length > 0) {
    const fileName = e.target.files[0].name.length < 24 ? e.target.files[0].name : e.target.files[0].name.substr(0, 20) + e.target.files[0].name.substr(-4);
    spanFile.textContent = fileName;
  } else {
    spanFile.textContent = spanText;
  }
}

const DivFlexJustify = styled.div(({success}) => [
  tw`flex justify-center items-center m-1 mt-2! w-full font-medium py-1 px-2 bg-white rounded-md border `,
  success ? tw`text-green-100 bg-green-600 border-green-600` : tw`text-red-100 bg-red-600 border-red-600`
])
const DivTextXl = tw.div`text-xl font-normal  max-w-full flex-initial`;
const DivFlex = tw.div`flex flex-auto flex-row-reverse`;
const DivPy2 = tw.div`py-2`;
const DivTextSm = tw.div`text-sm`;
const SvgAlert = tw.svg`cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2`;
const SvgAlert1 = tw.svg`w-5 h-5 mx-2`;
const ImgSpinner =  tw.img`absolute h-5 w-5 mr-1 `;

export default ({
  heading = (
    <>
      Faça parte de nossa <span tw="text-blue-500">equipe</span>
    </>
  ),
  description = "Faça parte do nosso competente time, nas mais diversas áreas de atuação: programador desktop e web, testador, atendimento ao cliente, consultor de negócios, vendedor e administrativo.",
  formAction = "#",
  formMethod = "post",
}) => {

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container id="faca-parte" css={{marginTop: '7rem'}}>
      <TextContent>
        <Heading>{heading}</Heading>
        <Description css={{ maxWidth: '95%'}}>{description}</Description>
      </TextContent>
      <TextContent>
        <Grid>
          <Row>
            <IconRow>
              <LightBulbIcon />
            </IconRow>
            <TextSpan>
              Ambiente moderno
              <PTextSpan>Oferecemos um ambiente descontraído e confortável. Queremos que se sinta em casa.</PTextSpan>
            </TextSpan>
          </Row>
          <Row>
            <IconRow>
              <ChartBarIcon />
            </IconRow>
            <TextSpan>
              Possibilidade de crescimento profissional e salarial
              <PTextSpan>Aqui você define em que área trabalha. Mostre interesse, se mova e o mérito será seu!</PTextSpan>
            </TextSpan>
          </Row>
          <Row>
            <IconRow>
              <img src={CoffeeCupIcon} alt="" />
            </IconRow>
            <TextSpan>
              Café, café, café e comida
              <PTextSpan>Viciado em café? Aqui é o lugar certo para você. Aproveite!</PTextSpan>
            </TextSpan>
          </Row>
          <Row>
            <IconRow>
              <PlayIcon />
            </IconRow>
            <TextSpan>
              Treinamento interno
              <PTextSpan>Para nós inteligência, vontade de crescer e foco, valem mais do que experiência. Se você tem perfil, mas não tem formação profissional, não há problema algum. Nós te formamos!</PTextSpan>
            </TextSpan>
          </Row>
        </Grid>
        <Formik
          initialValues={{
            name: "",
            email: "",
            attachment: ""
          }}
          onSubmit={async (values, { resetForm }) => {
            setOpen(false);
            
            const formData = new FormData();
            const file_input = document.querySelector('#attachment');

            formData.append("attachment", file_input.files[0]);
            formData.append("name", values.name);
            formData.append("email", values.email);

            await axios.post(config.hostContactForm + '/contato-curriculum', formData, {
              headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
              }
            })
              .then((res) => {
                setSuccess(res.data.status === 'ok');
                setTitle(res.data.title);
                setMessage(res.data.message);
                setOpen(true);
                resetForm();
                var spanFile = document.getElementById('spanAttachment');
                spanFile.textContent = spanText;
              })
              .catch((err) => {
                setSuccess(false);
                setTitle('Oops, ocorreu um erro!');
                setMessage('Já estamos trabalhando nisto, desculpe pelo transtorno');
                setOpen(true);
              });
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required("Campo obrigatório"),
            email: Yup.string()
              .email("Digite um e-mail válido")
              .required("Campo obrigatório"),
            attachment: Yup.mixed()
              .required("Anexe seu curriculum")
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
              <Form action={formAction} method={formMethod} onSubmit={handleSubmit}>
                <RowRelative>
                  <Input
                    type="text" 
                    name="name"
                    placeholder="Seu nome"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.name && touched.name}
                    disabled={isSubmitting}
                  />
                  {errors.name && touched.name && (
                    <SpanInvalidFeedBack>{errors.name}</SpanInvalidFeedBack>
                  )}
                </RowRelative>
                <RowRelative>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.email && touched.email}
                    disabled={isSubmitting}
                  />
                  {errors.email && touched.email && (
                    <SpanInvalidFeedBack>{errors.email}</SpanInvalidFeedBack>
                  )}
                </RowRelative>
                <RowRelative>
                  <InputFileButton 
                    onClick={uploadFile}
                    isInvalid={errors.attachment && touched.attachment}
                    disabled={isSubmitting}>
                    <SvgFile>
                      <CloudUploadIcon />
                    </SvgFile>
                    <SpanFile id="spanAttachment">{spanText}</SpanFile>
                  </InputFileButton>
                  {errors.attachment && touched.attachment && (
                    <SpanInvalidFeedBack>{errors.attachment}</SpanInvalidFeedBack>
                  )}
                  <InputFile type="file" name="attachment" id="attachment" 
                    onChange={(e) => {handleChange(e);changeAttachment(e);}}
                    onBlur={handleBlur}
                    />
                </RowRelative>
                <RowRelative>
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting && <ImgSpinner src={Spinner}/>}
                    Enviar
                  </SubmitButton>
                </RowRelative>
              </Form>
            );
          }}
        </Formik>
        {open && 
        <RowRelative>
          <DivFlexJustify success={success} css={{maxWidth: '96%'}}>
            <div slot="avatar">
              <SvgAlert1 xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </SvgAlert1>
            </div>
            <DivTextXl>
              <DivPy2>
                {title}
                <DivTextSm>
                  {message}
                </DivTextSm>
              </DivPy2>
            </DivTextXl>
            <DivFlex>
              <div onClick={() => {setOpen(false)}}>
                <SvgAlert xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </SvgAlert>
              </div>
            </DivFlex>
          </DivFlexJustify>
        </RowRelative>}
      </TextContent>
    </Container>
  );
};
