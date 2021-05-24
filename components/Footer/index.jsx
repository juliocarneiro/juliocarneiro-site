import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { MdPhonelinkRing } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center p-8 xm:justify-between sm:p-12 bg-gray0">
        <div className="flex flex-col items-center order-last mt-6 xm:mt-0 xm:order-first space-y-3">
          <a href="https://juliocarneiro.com.br" className="block">
            <img className="max-w-vs" src="/images/snio-logo.svg" alt="Logo" />
          </a>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/juliocarneiro"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/juliocarneiro/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.medium.com/@juliocarneiro"
                target="_blank"
                rel="noreferrer"
              >
                <FaMedium />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center xm:items-start">
          <span className="block mb-3 text-gray2 text-tiny">Information</span>
          <span className="block mb-1 text-sm text-gray2">
            Want to hire me?
          </span>
          <ul className="flex flex-col items-center xm:items-start">
            <li className="flex items-center sm:text-xl space-x-2">
              <FaEnvelope className="inline-block" />
              <a
                href="mailto:juliocarneiro@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                juliocarneiro@gmail.com
              </a>
            </li>
            <li className="flex items-center sm:text-xl space-x-2">
              <MdPhonelinkRing />
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511953121823&text=Ol%C3%A1%20J%C3%BAlio!%20Vi%20seu%20site%20e%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA"
                target="_blank"
                rel="noreferrer"
              >
                +55 11 95312-1823
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
