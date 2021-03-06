import React from 'react';
import {
  ALink, FooterSty, FootLinks, FootP,
} from '../style/Style';

const Footer = () => (
  <FooterSty>
    <div>
      <FootLinks>
        <ALink href="https://moon.google.com" target="_blank">Find the studio</ALink>
        <ALink href="/aboutme">About me</ALink>
        <ALink href="/contact">Contact</ALink>
      </FootLinks>
      <FootP>
        <p>Build for CORE Code School</p>
        <p>Code. Enjoy. Repeat.</p>
      </FootP>
    </div>
  </FooterSty>
);

export default Footer;
