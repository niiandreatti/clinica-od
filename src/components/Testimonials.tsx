import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Danilo Contini",
    treatment: "",
    text: "Atendimento excepcional do início ao fim! O Espaço Odonto une profissionalismo, cuidado e um ambiente super acolhedor. A equipe é atenciosa, pontual e transmite muita segurança em todos os procedimentos. Fiquei muito satisfeito com o resultado do meu tratamento — tudo foi feito com muita delicadeza e explicações claras. Recomendo de olhos fechados para quem busca um serviço odontológico de qualidade e confiança!",
    rating: 5,
  },
  {
    name: "Thalita Bertazo",
    treatment: "",
    text: "Profissionais maravilhosas, principalmente a Dra Marina que me atendeu muito bem. Estou extremamente satisfeita com o atendimento!",
    rating: 5,
  },
  {
    name: "Joao Vitor",
    treatment: "",
    text: "Profissionais de primeira, ótimo atendimento. Desde a recepção até o atendimento com as dentistas que são excelentes, a Dra Marina muito carismática e excelente profissional e a Dra Karina também muito simpática e atenciosa. Recomendo muito o trabalho delas",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-dental-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dental-blue-dark mb-4">
            O que Nossos Pacientes Dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 shadow-soft hover:shadow-medium transition-smooth border-0 bg-background animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="text-center pt-4 border-t border-border mt-auto">
                <p className="font-semibold text-dental-blue-dark">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.treatment}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
