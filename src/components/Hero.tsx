
import { Button } from "@/components/ui/button";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedText } from "@/components/ui/AnimatedText";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <AnimatedGradient 
        className="absolute inset-0 opacity-20"
        direction="radial"
        colors={["from-blue-400", "via-blue-600", "to-blue-900"]}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="section-container grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 max-w-xl">
          <div className="flex justify-center md:justify-start mb-8">
            <img 
              src="/lovable-uploads/e0def6fb-f6f4-4d79-886c-25489a5131b5.png" 
              alt="HealthChain Solutions Logo" 
              className="h-20 md:h-24"
            />
          </div>
          
          <AnimatedText 
            text="Otimizando auditorias hospitalares com tecnologia de ponta"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            animation="fade-in"
          />
          
          <AnimatedText 
            text="Simplifique processos administrativos e clínicos, reduza custos e aumente a produtividade com nossa solução SaaS para auditoria hospitalar."
            as="p"
            className="text-xl text-muted-foreground"
            animation="fade-in"
            delay={0.2}
          />
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              Conheça nossas soluções
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-900/20 transition-all duration-300"
            >
              Agende uma demonstração
            </Button>
          </div>
          
          <div className="pt-8 flex items-center space-x-3 text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="block h-px w-12 bg-border"></span>
            <span>Tecnologia confiável e inovadora para o setor de saúde</span>
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <GlassmorphicCard 
            className="p-6 animate-float relative"
            intensity="medium"
            hoverEffect
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/20 rounded-xl"></div>
            <div className="relative z-10 flex justify-center items-center p-4">
              <img 
                src="/lovable-uploads/c26bc424-605b-4ee8-aafd-2a6e50e05d44.png" 
                alt="HealthChain DNA Logo" 
                className="w-3/4 max-w-[220px]"
              />
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard 
            className="absolute -bottom-10 -left-10 p-4 max-w-[240px] animate-slide-up z-10"
            intensity="high"
            delay={0.3}
            hoverEffect
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">+</div>
              <div>
                <p className="font-semibold text-foreground">Eficiência Operacional</p>
                <p className="text-sm text-muted-foreground">Reduza custos operacionais</p>
              </div>
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard 
            className="absolute -top-6 -right-6 p-4 max-w-[240px] animate-slide-down z-10"
            intensity="high"
            delay={0.5}
            hoverEffect
          >
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-foreground">Confiabilidade</p>
                <p className="text-sm text-muted-foreground">Blockchain seguro</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
