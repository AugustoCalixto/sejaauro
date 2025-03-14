import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-gray-800 bg-yellow-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ainda com dúvidas?
          </h2>
          <p className="mt-2 font-small text-gray-700 text-opacity-90 lg:text-xl">
            Entre em contato com um de nossos representates
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://api.whatsapp.com/send/?phone=5527996200358&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+adquirir+uma+maquininha%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-black bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Entre em contato
          </a>
        </div>
      </div>
    </Container>
  );
};
