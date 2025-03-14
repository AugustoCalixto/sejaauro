import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/notebook.jpeg";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Sistema integrado com sua maquininha",
  desc: "Controle total e insights valiosos para impulsionar suas vendas!",
  image: benefitOneImg,
  bullets: [
    {
      title: "Sistema integrado com sua maquininha",
      desc: "Conecte-se com facilidade e tenha todos os dados de vendas ao seu alcance.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Relatórios inteligentes para seu negócio",
      desc: "Entenda suas vendas como nunca antes, com relatórios claros e detalhados.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Vantagem competitiva",
      desc: "Taxas reduzidas e eficiência para manter seu negócio à frente!",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Acompanhe todas as suas vendas pela internet",
      desc: "Venda, gerencie e cresça de onde estiver, com acesso total pelo seu celular.",
      icon: <DevicePhoneMobileIcon />,
    },
  ],
};


// const benefitTwo = {
//   title: "Offer more benefits here",
//   desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
//   image: benefitTwoImg,
//   bullets: [
//     {
//       title: "Mobile Responsive Template",
//       desc: "Nextly is designed as a mobile first responsive template.",
//       icon: <DevicePhoneMobileIcon />,
//     },
//     {
//       title: "Powered by Next.js & TailwindCSS",
//       desc: "This template is powered by latest technologies and tools.",
//       icon: <AdjustmentsHorizontalIcon />,
//     },
//     {
//       title: "Dark & Light Mode",
//       desc: "Nextly comes with a zero-config light & dark mode. ",
//       icon: <SunIcon />,
//     },
//   ],
// };


export { benefitOne };
