
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background elements */}
      <AnimatedGradient 
        className="absolute inset-0 opacity-10"
        direction="radial"
        colors={["from-health-600", "via-blue-500", "to-indigo-600"]}
      />
      <div className="absolute top-20 right-20 w-64 h-64 bg-health-500/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="relative z-10 px-4 text-center">
        <GlassmorphicCard className="p-8 md:p-12 max-w-md mx-auto animate-in">
          <h1 className="text-6xl font-bold text-health-600 mb-6">404</h1>
          <p className="text-2xl font-medium mb-8">Página não encontrada</p>
          <p className="text-muted-foreground mb-8">
            Desculpe, não conseguimos encontrar a página que você está procurando.
          </p>
          <Button 
            size="lg" 
            className="bg-health-600 hover:bg-health-700 text-white transition-all duration-300"
            onClick={() => window.location.href = '/'}
          >
            Voltar para o início
          </Button>
        </GlassmorphicCard>
      </div>
    </div>
  );
};

export default NotFound;
