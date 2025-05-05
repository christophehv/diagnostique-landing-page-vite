
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop')",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
            Diagnostics immobiliers par des experts certifiés
          <br />

            
            
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-0 animate-fade-in animate-delay-200">
          Basés à Nice, nous intervenons dans toute la région PACA : Cannes, Antibes, Grasse, Menton, et partout sur la Côte d’Azur.
          <br />
          <br />
            Nous réalisons tous vos diagnostics obligatoires pour vente et location. 
            Rapport envoyé sous 24h avec certification reconnue sur tout le territoire.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in animate-delay-300">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-diag-blue hover:bg-diag-blue-light text-white px-8 py-6 text-lg"
            >
              Demander un devis
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg"
              onClick={scrollToServices}
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <button onClick={scrollToServices} className="flex flex-col items-center">
          <span className="text-sm mb-2">En savoir plus</span>
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
