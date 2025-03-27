import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Tecnologia", href: "#technology" },
    { name: "Benefícios", href: "#benefits" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <GlassmorphicCard 
        className={`mx-4 sm:mx-6 lg:mx-8 flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        intensity={isScrolled ? "medium" : "low"}
      >
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/89198357-5908-4943-bff0-074e04bf999a.png" 
              alt="HealthChain Logo" 
              className="h-8 mr-2" 
            />
            <div className="text-lg font-semibold text-foreground">
              HealthChain Solutions
            </div>
          </a>
        </div>

        {isMobile ? (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        ) : (
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-blue-400 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Entre em contato
            </Button>
          </nav>
        )}
      </GlassmorphicCard>

      {/* Mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <GlassmorphicCard 
          className="mx-4 sm:mx-6 lg:mx-8 mt-2 p-4 shadow-lg animate-fade-in"
          intensity="high"
        >
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-blue-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-2">
              Entre em contato
            </Button>
          </nav>
        </GlassmorphicCard>
      )}
    </header>
  );
};

export default Navbar;
