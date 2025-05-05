
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Presentation from "@/components/Presentation";
import ServicesSection from "@/components/ServicesSection";
import ObligationsSection from "@/components/ObligationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Presentation />
      <ServicesSection />
      <ObligationsSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
