
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Agence immobilière à Paris",
    content: "Nous collaborons avec DiagExpert depuis 3 ans pour tous nos diagnostics. La qualité des rapports et la réactivité des équipes sont exceptionnelles. Un partenaire de confiance.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "Thomas Durand",
    role: "Propriétaire à Lyon",
    content: "Service impeccable pour le diagnostic de mon appartement avant la mise en vente. Les techniciens sont ponctuels et professionnels. Rapport complet reçu en moins de 24h.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 3,
    name: "Camille Bernard",
    role: "Syndic de copropriété à Bordeaux",
    content: "Nous avons fait appel à DiagExpert pour un audit global de notre immeuble. Le professionnalisme, la transparence et la qualité du travail fourni nous ont pleinement satisfaits.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Laurent Petit",
    role: "Notaire à Marseille",
    content: "Un service fiable et efficace qui nous aide à sécuriser nos transactions immobilières. Les rapports sont détaillés et conformes à la réglementation en vigueur.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-diag-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Découvrez pourquoi nos clients nous font confiance pour leurs diagnostics immobiliers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "center",
            }}
            onSelect={(index) => setActiveIndex(index)}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="h-full p-6">
                    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
                      <div className="mb-4 flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-diag-blue">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-600 italic">"{testimonial.content}"</p>
                      </div>
                      <div className="mt-4 flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2 bg-white/20 hover:bg-white/30 text-white" />
              <CarouselNext className="relative ml-2 bg-white/20 hover:bg-white/30 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
