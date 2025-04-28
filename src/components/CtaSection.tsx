
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CtaSection = () => {
  const advantages = [
    "Techniciens certifiés et expérimentés",
    "Intervention rapide sous 24-48h",
    "Rapports conformes aux normes légales",
    "Tarifs transparents sans surprise"
  ];
  
  return (
    <section className="py-16 bg-diag-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-diag-blue mb-4">
                Besoin d'un diagnostic immobilier ?
              </h3>
              <p className="text-gray-600 mb-6">
                Contactez-nous dès maintenant pour obtenir un devis gratuit et personnalisé.
                Nous intervenons dans toute la région.
              </p>
              
              <ul className="space-y-2 mb-8">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="bg-diag-blue hover:bg-diag-blue-light text-white px-8 py-6 text-lg w-full md:w-auto"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Obtenir un devis gratuit
              </Button>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=80" 
                alt="Diagnostic immobilier" 
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
