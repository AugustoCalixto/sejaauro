'use client'
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { benefitOne } from "@/components/data";
import MaquininhasPagamento from "@/components/PaymentTerminals";
import PaymentRates from "@/components/PaymentRates";
import SalesCalculator from "@/components/Calculator";
import AdBanner from "@/components/ad-baner";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref7, inView7] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (

    <motion.div initial="initial" animate="animate" variants={staggerChildren}>
      <Hero title="Descubra Nossas Taxas" description='Aumente seus lucros com a solução de pagamento ideal para o seu negócio' ctaLink='https://api.whatsapp.com/send/?phone=5527996200358&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+adquirir+uma+maquininha%21&type=phone_number&app_absent=0' ctaText='Confira agora' heroImg='/img/3-junto.png' />
      <motion.div ref={ref1} initial="initial" animate={inView1 ? "animate" : "initial"} variants={fadeInUp} id="maquininhas">
        <SectionTitle
          preTitle="Receba em até 1 dia útil"
          title="Receba pagamentos com facilidade! Escolha sua maquininha."
          sectionName="Maquininhas"
        />
        <MaquininhasPagamento />
      </motion.div>
      <motion.div id="planos" ref={ref2} initial="initial" animate={inView2 ? "animate" : "initial"} variants={fadeInUp}>
        <SectionTitle
          preTitle="Um plano feito para você"
          title="Junte-se a nós e aproveite as taxas mais competitivas do mercado!"
          sectionName="Planos"
        >
          Na HeroCash, temos opções personalizadas para atender às suas necessidades e garantir que você economize ao máximo com cada transação.
        </SectionTitle>
        <PaymentRates />
      </motion.div>
      <motion.div id="calculadora" ref={ref3} initial="initial" animate={inView3 ? "animate" : "initial"} variants={fadeInUp} style={{ backgroundImage: 'radial-gradient(circle 331px at 1.4% 52.9%, rgba(255,236,2,1) 0%, rgba(255,223,2,1) 33.6%, rgba(255,187,29,1) 61%, rgba(255,175,7,1) 100.7%)' }}>
        <SectionTitle
          preTitle="Saiba o quanto vai receber"
          title="Sem pegadinhas nas taxas. Veja quanto você pode economizar com a Auros!"
          sectionName="Calculadora"
        />
        <div className="text-center mb-12">
          <p className="text-md font-light text-black-600">
            Muito mais economia para você. Faça uma simulação rápida para comparar
          </p>
        </div>
        <SalesCalculator />
      </motion.div>
      {/* <motion.div ref={ref4} initial="initial" animate={inView4 ? "animate" : "initial"} variants={fadeInUp}>
          <SectionTitle
            preTitle=""
            title="Quem usa, recomenda!"
            sectionName="Clientes"
          >
            Veja por que a HeroCash é a escolha certa para quem busca segurança e inovação que realmente fazem a diferença.
          </SectionTitle>
          <Testimonials />
        </motion.div> */}
      <motion.div ref={ref5} initial="initial" animate={inView5 ? "animate" : "initial"} variants={fadeInUp}>
        <SectionTitle preTitle="Perguntas Frequentes" title="Alguma dúvida? Nossa equipe está pronta pra te ajudar!" />
        <Faq />
      </motion.div>
      <motion.div ref={ref6} initial="initial" animate={inView6 ? "animate" : "initial"} variants={fadeInUp}>
        <Benefits data={benefitOne} />
      </motion.div>
      <motion.div ref={ref7} initial="initial" animate={inView7 ? "animate" : "initial"} variants={fadeInUp}>
        <Cta />
      </motion.div>
    </motion.div>

  );
}