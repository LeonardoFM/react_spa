import React from 'react';
import { FooterBase } from './styles';
import Artureza from '../../assets/artureza.png';


function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Artureza} alt="Logo Artureza" />
      </a>
      <p>
        {/* <a href="https://www.artureza.com.br/"> */}
          envolvendo arte e natureza na cidade de Petrópolis
        {/* </a> */}
      </p>
    </FooterBase>
  );
}

export default Footer;
