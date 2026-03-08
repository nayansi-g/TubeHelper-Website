import { MessageCircle, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  return (
    <div className="fixed right-8 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Call Us Button */}
      {/* <a
        href="tel:+919897165137"
        className="group flex h-12 w-12 items-center  justify-center rounded-full border border-[#0070DC] bg-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label="Call TubeHelper"
      >
        <PhoneCall className="h-5 w-5 text-[#0070DC]" />
        <span className="sr-only">Call Us</span>
      </a> */}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919897165137"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-5 w-5 text-white" />
        <span className="sr-only">WhatsApp</span>
      </a>

      {/* Chat Icon */}
      <a
        href="/contact"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-black invisible shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        aria-label="Chat with TubeHelper"
      >
        <MessageCircle className="h-5 w-5 text-white" />
        <span className="sr-only">Chat</span>
      </a>
    </div>
  );
}
