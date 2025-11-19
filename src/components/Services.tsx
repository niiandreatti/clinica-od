import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Anchor, Smile, Gem, HandCoins } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Ortodontia",
    description:
      "Tratamentos ortodônticos com aparelhos fixos ou transparentes, garantindo alinhamento correto e um sorriso mais harmonioso.",
  },
  {
    icon: Anchor,
    title: "Implantes & Extrações",
    description:
      "Implantes modernos e procedimentos de extração realizados com técnicas seguras e conforto para o paciente.",
  },
  {
    icon: Smile,
    title: "Cuidados Preventivos",
    description:
      "Procedimentos de limpeza e raspagem para manter sua saúde bucal em dia, prevenindo cáries, tártaro e inflamações.",
  },
  {
    icon: Gem,
    title: "Estética Dental",
    description:
      "Lentes de porcelana, facetas e restaurações estéticas para transformar completamente seu sorriso.",
  },
  {
    icon: HandCoins,
    title: "Convênios",
    description:
      "Atendemos convênios odontológicos (Amil, BB Dental, Bradesco, OdontoPrev, Privian e Santander).",
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dental-blue-dark mb-4">
            Nossos Tratamentos Especializados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços odontológicos com
            tecnologia de ponta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-medium transition-smooth border-border animate-fade-in bg-background"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-dental-blue-light flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-dental-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
