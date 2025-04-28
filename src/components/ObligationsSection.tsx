import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ObligationsSection = () => {
  const obligations = [
    "Le DPE (Diagnostic de Performance Énergétique) est obligatoire pour toute vente ou location.",
    "L'état d'amiante est obligatoire pour les bâtiments dont le permis de construire a été délivré avant 1997.",
    "Le diagnostic plomb est obligatoire pour les logements construits avant 1949.",
    "Le diagnostic gaz est obligatoire si l'installation a plus de 15 ans.",
    "Le diagnostic électricité est obligatoire si l'installation a plus de 15 ans.",
    "L'état des risques et pollutions est obligatoire dans certaines zones."
  ];

  return (
    <section id="obligations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-diag-blue mb-6 opacity-0 animate-fade-in">
              Obligations légales pour votre bien immobilier
            </h2>
            <p className="text-gray-600 mb-8 opacity-0 animate-fade-in animate-delay-100">
              La réglementation impose plusieurs diagnostics obligatoires pour la vente ou la location d'un bien immobilier. 
              Ces diagnostics doivent être réalisés par des professionnels certifiés comme nos techniciens.
            </p>
            
            <ul className="space-y-3 mb-8">
              {obligations.map((obligation, index) => (
                <li 
                  key={index} 
                  className={`flex items-start opacity-0 animate-fade-in animate-delay-${index * 100 > 500 ? 500 : index * 100}`}
                >
                  <CheckCircle className="text-diag-blue-light mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>{obligation}</span>
                </li>
              ))}
            </ul>
            
            <div className="opacity-0 animate-fade-in animate-delay-500">
              <Button 
                className="bg-diag-blue hover:bg-diag-blue-light text-white px-8 py-6"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Demander un devis gratuit
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" 
                alt="Documents de diagnostic immobilier" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-10 -left-10 hidden lg:block">
                <div className="bg-diag-blue p-6 rounded-lg shadow-lg max-w-xs">
                  <p className="text-white font-medium text-lg">
                    "Des diagnostics non conformes peuvent entraîner l'annulation d'une vente ou des poursuites juridiques."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObligationsSection;
