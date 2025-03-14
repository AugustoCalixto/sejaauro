"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Em quanto tempo eu recebo o valor das vendas?",
    answer: "As vendas realizadas na máquina de cartão ficarão disponíveis em D+1 no portal ou na conta bancária de escolha do Estabelecimento.",
  },
  {
    question: "Posso usar apenas com CNPJ ou pode ser CPF?",
    answer: "Pode usar o CPF também! E o melhor: as nossas taxas são as mesmas para CPF e CNPJ. Oferecemos a melhor taxa do mercado para os dois!",
  },
  {
    question: "Consigo receber as vendas na minha conta?",
    answer:
      "Sim! Você pode receber as suas vendas na conta que preferir, basta informar os dados no momento do seu cadastro.",
  },
];
