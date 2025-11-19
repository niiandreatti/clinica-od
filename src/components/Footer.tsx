import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dental-blue-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">
              Dra. Karina Saad
            </h3>
            <p className="text-sm text-gray-300 mb-4">Espaço Odonto</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transformando sorrisos com excelência, cuidado e tecnologia há
              mais de 15 anos.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Rua das Flores, 123 – Centro</p>
              <p>São Paulo – SP, 01234-567</p>
              <p className="pt-2">Fixo: (11) 3456-7890</p>
              <p>WhatsApp: (11) 98765-4321</p>
              <p className="pt-2">contato@drakarinasaad.com.br</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
          <p>
            © 2025 Dra. Karina Saad – Espaço Odonto. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
