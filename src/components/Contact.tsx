import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dental-blue-dark mb-4">
            Onde Nos Encontrar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="p-6 shadow-soft border-0 bg-dental-gray">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-dental-blue-dark mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    Rua Eugenio Franceschini numero 25, Centro
                    <br />
                    Valinhos – SP, 13270-080
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-0 bg-dental-gray">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-dental-blue-dark mb-2">
                    Telefones
                  </h3>
                  <p className="text-muted-foreground">
                    Fixo: (11) 3869-5176
                    {/* <br />
                    WhatsApp: (11) 98765-4321 */}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-0 bg-dental-gray">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-dental-blue-dark mb-2">
                    E-mail
                  </h3>
                  <p className="text-muted-foreground">
                    ksaadcunha@bol.com.br
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft border-0 bg-dental-gray">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-dental-blue-dark mb-2">
                    Horários de Atendimento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábados: 8h às 13h
                  </p>
                </div>
              </div>
            </Card>

            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() =>
                window.open("https://maps.google.com", "_blank")
              }
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver no Google Maps
            </Button>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="p-8 shadow-medium border-0 bg-dental-gray">
              <h3 className="text-2xl font-serif font-bold text-dental-blue-dark mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua Mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
