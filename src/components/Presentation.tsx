import React from "react";

const Presentation = () => {
  return (
    <section id="presentation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte de présentation */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-diag-blue mb-6 opacity-0 animate-fade-in">
              À propos de 3T DIAGNOSTICS
            </h2>
            <div className="space-y-4 text-gray-600 opacity-0 animate-fade-in animate-delay-100">
              <p>
                Je suis <strong>Elhad MZE ALI</strong>, expert certifié en diagnostics
                immobiliers et fondateur de <strong>3T DIAGNOSTICS</strong>. Je prends
                en charge l’ensemble de vos diagnostics (DPE, amiante, gaz etc.)
                avec sérieux et précision.
              </p>
              <p>
                De la prise de rendez-vous à la remise du rapport final, je
                supervise chaque étape pour assurer un service réactif, conforme
                aux réglementations en vigueur. Mon engagement : vous offrir un
                accompagnement clair, efficace et personnalisé.
              </p>
              <p>
                Pour toute demande ou prise de rendez-vous, je reste à votre
                écoute. Mon objectif est de vous aider à valoriser votre bien
                immobilier en toute sérénité.
              </p>
              <p>
                Basée à Nice, <strong>3T DIAGNOSTICS</strong> s’engage à fournir des
                prestations fiables et rapides, parfaitement adaptées aux
                exigences légales. Que vous soyez propriétaire ou locataire, nous
                vous accompagnons dans vos démarches, qu’il s’agisse d’une vente,
                d’une location ou d’un simple contrôle de l’état du logement.
              </p>
              <p>
                Notre savoir-faire s’appuie sur une expertise approfondie du
                secteur et une parfaite maîtrise des normes en vigueur.
                Chaque intervention est menée avec rigueur et transparence, pour
                vous garantir une totale tranquillité d’esprit.
              </p>
            </div>
            <div className="mt-8 opacity-0 animate-fade-in animate-delay-300">
              <a
                href="#contact"
                className="inline-block bg-diag-blue hover:bg-diag-blue-light text-white px-8 py-4 rounded-lg transition-colors"
              >
                Contacter l'expert
              </a>
            </div>
          </div>

          {/* Image illustrative */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in animate-delay-200">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
              alt="Expert immobilier"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
