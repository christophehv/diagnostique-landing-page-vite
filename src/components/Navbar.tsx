
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-diag-blue font-montserrat font-bold text-2xl">Diag<span className="text-diag-blue-light">Expert</span></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-800 hover:text-diag-blue-light font-semibold transition-colors">
            Nos services
          </a>
          <a href="#obligations" className="text-gray-800 hover:text-diag-blue-light font-semibold transition-colors">
            Obligations
          </a>
          <a href="#testimonials" className="text-gray-800 hover:text-diag-blue-light font-semibold transition-colors">
            Témoignages
          </a>
          <a href="#contact" className="text-gray-800 hover:text-diag-blue-light font-semibold transition-colors">
            Contact
          </a>
          <Button className="bg-diag-blue hover:bg-diag-blue-light">
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden lg:inline">Devis gratuit</span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-diag-blue p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-diag-blue-light py-2 font-semibold">
            Nos services
          </a>
          <a href="#obligations" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-diag-blue-light py-2 font-semibold">
            Obligations
          </a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-diag-blue-light py-2 font-semibold">
            Témoignages
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-diag-blue-light py-2 font-semibold">
            Contact
          </a>
          <Button className="bg-diag-blue hover:bg-diag-blue-light w-full">
            <Phone className="mr-2 h-4 w-4" />
            Devis gratuit
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
