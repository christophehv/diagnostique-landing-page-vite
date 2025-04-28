
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const serviceCategories = [
    {
      id: "vente",
      label: "Vente immobilière",
      services: [
        {
          title: "DPE",
          description: "Diagnostic de Performance Énergétique, obligatoire pour toute vente.",
          icon: "/energy.svg"
        },
        {
          title: "Amiante",
          description: "Détection de matériaux contenant de l'amiante dans les logements construits avant 1997.",
          icon: "/amiante.svg"
        },
        {
          title: "Plomb",
          description: "Constat de Risque d'Exposition au Plomb pour les logements construits avant 1949.",
          icon: "/plomb.svg"
        },
        {
          title: "Termites",
          description: "État relatif à la présence de termites dans les zones à risque.",
          icon: "/termites.svg"
        },
        {
          title: "Gaz",
          description: "Diagnostic des installations intérieures de gaz de plus de 15 ans.",
          icon: "/gaz.svg"
        },
        {
          title: "Électricité",
          description: "Diagnostic des installations électriques de plus de 15 ans.",
          icon: "/electricite.svg"
        }
      ]
    },
    {
      id: "location",
      label: "Location",
      services: [
        {
          title: "DPE Location",
          description: "Diagnostic de Performance Énergétique, obligatoire pour toute mise en location.",
          icon: "/energy.svg"
        },
        {
          title: "Surface Habitable",
          description: "Mesurage précis de la superficie habitable (loi Boutin).",
          icon: "/surface.svg"
        },
        {
          title: "Plomb Location",
          description: "CREP pour les logements construits avant 1949.",
          icon: "/plomb.svg"
        },
        {
          title: "État des Risques",
          description: "État des Risques et Pollutions (ERP).",
          icon: "/risque.svg"
        }
      ]
    },
    {
      id: "autres",
      label: "Autres diagnostics",
      services: [
        {
          title: "Accessibilité handicapés",
          description: "Diagnostic pour l'accessibilité des personnes à mobilité réduite.",
          icon: "/handicap.svg"
        },
        {
          title: "DTG",
          description: "Diagnostic Technique Global pour les copropriétés.",
          icon: "/dtg.svg"
        },
        {
          title: "Audit énergétique",
          description: "Étude approfondie de la consommation énergétique d'un bâtiment.",
          icon: "/audit.svg"
        },
        {
          title: "Assainissement",
          description: "Contrôle des installations d'assainissement non collectif.",
          icon: "/assainissement.svg"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-diag-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-diag-blue mb-4">Nos services de diagnostic</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous proposons une gamme complète de diagnostics immobiliers réalisés par des techniciens certifiés.
            Nos rapports sont reconnus par tous les professionnels de l'immobilier.
          </p>
        </div>

        <Tabs defaultValue="vente" className="w-full max-w-5xl mx-auto">
          <TabsList className="w-full mb-8 bg-white">
            {serviceCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="flex-1 py-3 data-[state=active]:bg-diag-blue data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    delay={`animate-delay-${index * 100 > 500 ? 500 : index * 100}`}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
