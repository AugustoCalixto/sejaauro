"use client";

import Image from "next/image"
import whastappicon from "../../public/img/whatsapp-icon.svg"
export default function WhatsappButton() {
    const handleWhatsappClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact');
        }
    }

    return (
        <a className="fixed bottom-4 right-4 p-4 rounded rounded-full bg-green-400 flex justify-center items-center" href="https://api.whatsapp.com/send/?phone=5527996200358&text=Ol%C3%A1%21+Vim+atrav%C3%A9s+do+site+e+gostaria+de+adquirir+uma+maquininha%21&type=phone_number&app_absent=0" target="_blank" onClick={handleWhatsappClick}>
            <Image alt="Whats App Call" src={whastappicon.src} width="30" height="30" />
        </a>
    )
}