import React from "react";
import tw, { styled } from "twin.macro";

import { Menu, Transition } from '@headlessui/react';


const StyledTransition = styled(Transition)`
&.enter {
  ${tw`transition ease-out duration-500`}
}
&.enterFrom {
  ${tw`transform scale-95 opacity-0`}
}
&.enterTo {
  ${tw`transform scale-100 opacity-100`}
}
&.leave {
  ${tw`transition duration-500 ease-out`}
}
&.leaveFrom {
  ${tw`transform scale-100 opacity-100`}
}
&.leaveTo {
  ${tw`transform scale-95 opacity-0`}
}
`;

const subMenus = [
  {
    name: "Sistema de gestão",
    href: "/produtos/SistemaDeGestao"
  },
  {
    name: "Alô, Contador",
    href: "https://alocontador.com.br",
    target: "_blank"
  },
  {
    name: "Pedido ON",
    href: "/produtos/PedidoOn"
  },
  {
    name: "Aplicativos e Sites",
    href: "/produtos/AplicativosESites"
  },
  {
    name: "Equipamentos",
    href: "/produtos/Equipamentos",
  },
  {
    name: "Certificado Digital",
    href: "/produtos/CertificadoDigital",
  }
];

export default function DropDownProdutos({textBlack = false}) {
  return (
    <div tw="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span tw="rounded-md ">
              {!textBlack ? 
                <Menu.Button tw="border-b-2 font-semibold border-transparent hocus:border-blue-500 inline-flex justify-center w-full py-1 text-lg sm:text-sm text-blue-500 transition duration-150 ease-in-out focus:outline-none focus:border-blue-500 active:bg-gray-500 active:text-gray-800">
                  <span>Produtos</span>
                  <svg
                    tw="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button> : 
                <Menu.Button tw="border-b-2 font-semibold border-transparent hocus:border-gray-100 inline-flex justify-center w-full py-1 text-sm leading-5 text-gray-100 transition duration-150 ease-in-out focus:outline-none focus:border-gray-100 active:text-gray-500">
                <span>Produtos</span>
                <svg
                  tw="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Menu.Button>}
            </span>

            <StyledTransition
              show={open}
              enter="enter"
              enterFrom="enterFrom"
              enterTo="enterTo"
              leave="leave"
              leaveFrom="leaveFrom"
              leaveTo="leaveTo"
            >
              <Menu.Items
                static
                tw="z-50 absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                <div tw="py-1">
                  {subMenus.map((item, index) => (
                    <Menu.Item key={index} as="span" tw="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-black hover:text-gray-100 hover:bg-blue-500">
                      <a href={item.href} target={item.target || ""}>
                        {item.name}
                      </a>
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </StyledTransition>
          </>
        )}
      </Menu>
    </div>
  )
}