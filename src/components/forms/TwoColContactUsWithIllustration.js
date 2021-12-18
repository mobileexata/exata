import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Spinner from "images/spinner.gif";
import config from '../../config/config';
import InputMask from 'react-input-mask';

const Container = tw.div`container sm:m-10 mb-5`;
const Column = tw.div`grid grid-cols-1 sm:grid-cols-2 `;
const TextContent = tw.div`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Grid = tw.div` grid grid-cols-1 sm:grid-cols-2 sm:w-11/12`;
const Row = tw.div` relative sm:mr-5`;
const DivDadosContato = tw.div`mt-3 flex `;
const DivIconContato = tw.div`w-10 text-blue-500 table`;
const SpanDadosContato = tw.span` ml-3 mt-2 text-lg text-justify`;
const DivContent = tw.div``;
const DivFormContato = tw.div``;
const Form = tw.form`mt-5 md:mt-10 text-sm flex-col`;
const Input = styled.input(({ isInvalid }) => [
  tw`w-full px-5 py-3 m-2 rounded focus:outline-none font-medium transition duration-300 disabled:opacity-75 hocus:disabled:border-gray-400 hover:disabled:text-gray-100 disabled:cursor-not-allowed`,
  isInvalid ? tw`border-2 border-red-500 hocus:border-red-600 ` : tw`border-4 hocus:border-blue-500`
]);

const SubmitButton = tw.button`px-8 py-3 font-bold rounded bg-yellow-500 text-gray-100 hocus:bg-yellow-600 
  transition duration-300 mt-3 ml-2 w-full disabled:opacity-75 hover:disabled:bg-yellow-500 
  hover:disabled:text-gray-100 disabled:cursor-not-allowed`;
// const SubmitButton = tw.button`px-8 py-3 font-bold rounded bg-blue-500 text-gray-100 hocus:bg-gray-100 hocus:text-blue-500 focus:shadow-outline hocus:shadow-outline focus:outline-none hocus:outline-none transition duration-300 mt-3 ml-2 w-full disabled:opacity-75 hover:disabled:bg-blue-500 hover:disabled:text-gray-100 disabled:cursor-not-allowed`;
const SpanInvalidFeedBack = tw.span`text-xs text-red-600 block ml-2 font-semibold`;

const dados = [
  {
    icon: PhoneIcon,
    text: <><a href="tel:02737210955">(27) 3721-0955</a></>
  },
  {
    icon: MailIcon,
    text: <><a href="mailto:exata@exata.net">exata@exata.net</a></>
  },
  {
    icon: LocationMarkerIcon,
    text: 'Rua Adwalter Ribeiro Soares, nº 272B, Centro, Colatina - ES'
  },
];

const ImgSpinner =  tw.img`absolute h-5 w-5 mr-1 `;
const DivFlexJustify = styled.div(({ success }) => [
  tw`flex justify-center items-center m-1 mt-2! w-full sm:w-11/12 ml-2! font-medium py-1 px-2 bg-white rounded-md border `,
  success ? tw`text-green-100 bg-green-600 border-green-600` : tw`text-red-100 bg-red-600 border-red-600`
]);
const DivTextXl = tw.div`text-xl font-normal  max-w-full flex-initial`;
const DivFlex = tw.div`flex flex-auto flex-row-reverse`;
const DivPy2 = tw.div`py-2`;
const DivTextSm = tw.div`text-sm`;
const SvgAlert = tw.svg`cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2`;
const SvgAlert1 = tw.svg`w-5 h-5 mx-2`;

export default ({
  subheading = "",
  heading = <>Entre <span tw="text-blue-500">em contato</span> conosco</>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  submitButtonText = "Enviar mensagem",
  formAction = "#",
  formMethod = "post",
  textOnLeft = true,
}) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  
  return (
    <Container id="contato">
      <Column>
        <DivContent>
          <TextContent key={1}>
            <Heading>{heading}</Heading>
              {dados.map((dado, index) => (
                <div key={index}>
                  <DivDadosContato>
                    <DivIconContato>
                      <dado.icon/>
                    </DivIconContato>
                    <SpanDadosContato>
                      {dado.text}
                    </SpanDadosContato>
                  </DivDadosContato>
                </div>
              ))}
          </TextContent>
        </DivContent>
        <DivContent>
          <DivFormContato>
            <Formik
              initialValues={{ name: "", email: "", industry: "", subject: "", phone: "" }}
              onSubmit={async (values, { resetForm }) => {
                setOpen(false);
                await new Promise(resolve => setTimeout(resolve, 500));
                
                await axios.post(config.hostContactForm + '/contato', values)
                  .then((res) => {
                    setSuccess(res.data.status === 'ok');
                    setTitle(res.data.title);
                    setMessage(res.data.message);
                    setOpen(true);
                    resetForm();
                  })
                  .catch((err) => {
                    setSuccess(false);
                    setTitle('Oops, ocorreu um erro!');
                    setMessage('Já estamos trabalhando nisto, desculpe pelo transtorno');
                    setOpen(true);
                    console.log(err);
                  });
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .required("Campo obrigatório"),
                email: Yup.string()
                  .email("Digite um e-mail válido")
                  .required("Campo obrigatório"),
                industry: Yup.string()
                  .required("Campo obrigatório"),
                phone: Yup.string()
                  .required("Campo obrigatório"),
                subject: Yup.string()
                  .required("Campo obrigatório"),
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
                    <Grid>
                      <Row>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Seu nome"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={errors.name && touched.name}
                          aria-describedby="passwordHelp"
                          disabled={isSubmitting}
                        />
                        {errors.name && touched.name && (
                          <SpanInvalidFeedBack id="passwordHelp">{errors.name}</SpanInvalidFeedBack>
                        )}
                      </Row>
                      <Row>
                        <Input type="text"
                          name="industry"
                          placeholder="Ramo de atividade" 
                          value={values.industry}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={errors.industry && touched.industry}
                          disabled={isSubmitting}
                        />
                        {errors.industry && touched.industry && (
                          <SpanInvalidFeedBack>{errors.industry}</SpanInvalidFeedBack>
                        )}
                      </Row>
                      <Row>
                        <InputMask mask="(99) 9999-9999?"
                          formatChars={{
                            "9": "[0-9]",
                            "?": "[0-9]"
                          }}
                          css={[
                            tw`w-full px-5 py-3 m-2 rounded focus:outline-none font-medium transition duration-300 disabled:opacity-75 hocus:disabled:border-gray-400 hover:disabled:text-gray-100 disabled:cursor-not-allowed`,
                            errors.phone && touched.phone ? tw`border-2 border-red-500 hocus:border-red-600 ` : tw`border-4 hocus:border-blue-500`
                          ]}
                          type="text"
                          name="phone" 
                          placeholder="Seu telefone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={errors.phone && touched.phone}
                          disabled={isSubmitting}
                        />
                        {errors.phone && touched.phone && (
                          <SpanInvalidFeedBack>{errors.phone}</SpanInvalidFeedBack>
                        )}
                      </Row>
                      <Row>
                        <Input type="email"
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
                      </Row>
                      <Row>
                        <Input type="text"
                          name="subject" 
                          placeholder="Assunto de interesse"
                          value={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={errors.subject && touched.subject}
                          disabled={isSubmitting}
                        />
                        {errors.subject && touched.subject && (
                          <SpanInvalidFeedBack>{errors.subject}</SpanInvalidFeedBack>
                        )}
                      </Row>
                      <Row>
                        <SubmitButton type="submit" disabled={isSubmitting}>
                          {isSubmitting && <ImgSpinner src={Spinner}/>}
                          {submitButtonText}
                        </SubmitButton>
                      </Row>
                    </Grid>
                    {open &&
                    <Row>
                      <DivFlexJustify success={success}>
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
                    </Row>}
                  </Form>
                );
              }}
            </Formik>
          </DivFormContato>
        </DivContent>
      </Column>
    </Container>
  );
};
