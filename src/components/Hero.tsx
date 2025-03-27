
import { Button } from "@/components/ui/button";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ChevronRight, Users, Shield, Check } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <AnimatedGradient 
        className="absolute inset-0 opacity-20"
        direction="radial"
        colors={["from-health-500", "via-blue-600", "to-blue-900"]}
      />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3 space-y-8">
          <div className="flex flex-col items-start">
            <div className="bg-gradient-to-r from-health-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-flex items-center">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Transformando a auditoria médica
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Reinventando processos <br />
              <span className="text-health-400">com tecnologia avançada</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Nossa plataforma utiliza blockchain e inteligência artificial para 
              revolucionar a auditoria hospitalar, trazendo segurança e eficiência 
              para todo o processo.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-health-500 hover:bg-health-600 gap-2 group"
              >
                Começar agora
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-health-500 text-health-400 hover:bg-health-900/20"
              >
                Agendar demonstração
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-health-${i * 100} flex items-center justify-center text-xs font-bold`}>
                    {i === 4 ? "+10" : ""}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Mais de 500 instituições de saúde já utilizam nossa plataforma
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative md:col-span-2">
          <GlassmorphicCard 
            className="p-6 relative z-10 animate-float"
            intensity="medium"
            hoverEffect
          >
            <div className="absolute inset-0 bg-gradient-to-br from-health-500/30 to-blue-600/20 rounded-xl"></div>
            <div className="relative z-10 flex justify-center items-center p-4">
              <img 
                src="/lovable-uploads/c26bc424-605b-4ee8-aafd-2a6e50e05d44.png" 
                alt="HealthChain DNA Logo" 
                className="w-full max-w-[280px]"
              />
            </div>
          </GlassmorphicCard>

          <div className="absolute -top-4 -right-4 z-20">
            <GlassmorphicCard 
              className="p-4 animate-pulse-slow"
              intensity="high"
            >
              <div className="flex items-center gap-3">
                <div className="bg-health-500 p-2 rounded-full">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm font-medium">Segurança verificada</p>
              </div>
            </GlassmorphicCard>
          </div>

          <div className="absolute -bottom-4 -left-4 z-20">
            <GlassmorphicCard 
              className="p-4 animate-pulse-slow"
              intensity="high"
              delay={0.5}
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm font-medium">+20.000 usuários</p>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6">
          <GlassmorphicCard className="p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: <Check className="h-5 w-5" />, text: "Auditoria inteligente" },
                { icon: <Check className="h-5 w-5" />, text: "Conformidade LGPD" },
                { icon: <Check className="h-5 w-5" />, text: "Validação blockchain" },
                { icon: <Check className="h-5 w-5" />, text: "Automação de processos" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-health-500/20 p-2 rounded-full text-health-500">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
