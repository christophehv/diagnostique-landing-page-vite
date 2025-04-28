
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Check } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    propertyType: "",
    surface: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un envoi de formulaire
    setTimeout(() => {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les plus brefs délais.",
        duration: 5000,
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        propertyType: "",
        surface: ""
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-diag-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-diag-blue mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Besoin d'un diagnostic immobilier ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6 opacity-0 animate-fade-in">
            <h3 className="text-xl font-semibold text-diag-blue mb-4">Demande de devis gratuit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                    placeholder="Votre nom" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                    placeholder="votre@email.com" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    required 
                    placeholder="Votre téléphone" 
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">Type de bien *</label>
                  <select 
                    id="propertyType" 
                    name="propertyType" 
                    value={formData.propertyType} 
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md h-10 px-3 focus:ring-2 focus:ring-diag-blue focus:border-transparent"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="apartment">Appartement</option>
                    <option value="house">Maison</option>
                    <option value="commercial">Local commercial</option>
                    <option value="land">Terrain</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse du bien *</label>
                  <Input 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange}
                    required 
                    placeholder="Adresse complète" 
                  />
                </div>
                <div>
                  <label htmlFor="surface" className="block text-sm font-medium text-gray-700 mb-1">Surface (m²)</label>
                  <Input 
                    id="surface" 
                    name="surface" 
                    type="number" 
                    value={formData.surface} 
                    onChange={handleChange}
                    placeholder="Surface approximative" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Précisez votre demande (diagnostics souhaités, urgence, etc.)" 
                  rows={4} 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-diag-blue hover:bg-diag-blue-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Demander un devis gratuit"
                )}
              </Button>
            </form>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-diag-blue text-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between opacity-0 animate-fade-in animate-delay-200">
              <div>
                <h3 className="text-xl font-semibold mb-6">Coordonnées</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Phone className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <a href="tel:0123456789" className="text-blue-200 hover:text-white transition-colors">01 23 45 67 89</a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Mail className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:contact@diagexpert.fr" className="text-blue-200 hover:text-white transition-colors">contact@diagexpert.fr</a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <MapPin className="mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <address className="not-italic text-blue-200">
                        15 rue des Experts<br />
                        75015 Paris
                      </address>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Horaires d'ouverture</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Lundi - Vendredi</div>
                  <div>9h00 - 18h00</div>
                  <div>Samedi</div>
                  <div>9h00 - 12h00</div>
                  <div>Dimanche</div>
                  <div>Fermé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
