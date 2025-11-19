import { Card } from "@/components/ui/card";
import { Users, Award } from "lucide-react";
import aboutImage from "@/assets/about-dentist.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-dental-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src={aboutImage}
              alt="Dra. Karina Saad atendendo paciente"
              className="rounded-2xl shadow-medium w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-dental-blue-dark mb-6">
              Conheça a Dra. Karina Saad e Nossa Missão
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Com mais de 15 anos de experiência em odontologia, a Dra. Karina
              Saad dedica-se a proporcionar tratamentos de excelência,
              combinando tecnologia de ponta com atendimento humanizado.
            </p>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Nossa missão é transformar sorrisos e promover saúde bucal com
              cuidado, ética e profissionalismo. Cada paciente é único e merece
              um tratamento personalizado e de qualidade.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-smooth border-0 bg-background">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-dental-blue-dark mb-2">
              15+
            </h3>
            <p className="text-muted-foreground font-medium">
              Anos de Experiência
            </p>
          </Card>

          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-smooth border-0 bg-background">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-4xl font-bold text-dental-blue-dark mb-2">
              2000+
            </h3>
            <p className="text-muted-foreground font-medium">
              Pacientes Atendidos
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
