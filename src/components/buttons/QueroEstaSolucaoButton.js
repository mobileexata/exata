import tw from "twin.macro";
import { Link } from 'react-scroll';

const DivTextCenter = tw.div`text-center mb-10`;
const ButtonUpperCase = tw.button`font-semibold lg:mx-0 mr-2! px-8 py-3 rounded bg-blue-500 text-gray-100 hocus:bg-blue-700 hocus:text-gray-200 focus:shadow-outline border-b-0`;

export default function QueroEstaSolucaoButton({
  textButton = 'Quero esta solução para minha empresa'
}) {
  return (
    <DivTextCenter>
      <Link activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}>
        <ButtonUpperCase>
          {textButton}
        </ButtonUpperCase>
      </Link>
    </DivTextCenter>
  );
}