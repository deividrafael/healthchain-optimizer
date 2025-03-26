
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ClipboardCheck, Database, BarChart3, ShieldCheck, FileSearch, Brain } from "lucide-react";
import { GlassmorphicCard } from "./ui/GlassmorphicCard";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Auditoria de Internação",
      description: "Monitore e analise os processos de internação hospitalar em tempo real, identificando oportunidades de otimização."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Auditoria de Contas Médicas",
      description: "Analise e valide contas médicas com precisão, reduzindo erros e evitando cobranças inadequadas."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Análise de Dados",
      description: "Transforme dados em insights acionáveis para melhorar a tomada de decisão e a eficiência operacional."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Verificação Blockchain",
      description: "Garanta a integridade e imutabilidade dos registros com nossa tecnologia blockchain integrada."
    },
    {
      icon: <FileSearch className="h-8 w-8" />,
      title: "Prevenção de Glosas",
      description: "Identifique e corrija potenciais glosas antes que ocorram, otimizando o fluxo de caixa."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Motor de Regras Inteligente",
      description: "Automatize a aplicação de regras complexas de auditoria com nosso sistema inteligente e adaptável."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-health-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-health-50 dark:bg-health-900/40 text-health-600 dark:text-health-400 text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="section-title">Soluções completas para auditoria hospitalar</h2>
          <p className="section-subtitle">
            Nossa plataforma SaaS oferece ferramentas avançadas para simplificar e otimizar
            processos administrativos e clínicos, reduzindo custos e aumentando a eficiência.
          </p>
        </div>
        
        {/* Hero banner with platform preview in Intuitive Care style */}
        <div className="mb-20 max-w-6xl mx-auto bg-gradient-to-r from-health-900 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 md:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Conheça o Lazarus</h3>
              <p className="text-white/80">
                Nossa plataforma permite que você automatize processos críticos de auditoria, 
                reduza custos operacionais e melhore a eficiência dos seus processos.
              </p>
              <Button className="bg-health-500 hover:bg-health-600 text-white border-none mt-4">
                Agende uma demonstração
              </Button>
            </div>
            <div className="md:w-1/2 p-4 md:p-0">
              <img 
                src="/lovable-uploads/95d0a092-cac9-4b30-ad43-79f0eee2562f.png" 
                alt="Interface da plataforma HealthChain Lazarus" 
                className="w-full rounded-lg md:rounded-l-none md:rounded-r-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Feature showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Recursos que fazem a diferença</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma possui recursos avançados projetados para atender às necessidades específicas 
              do setor de saúde e operadoras de planos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="animate-in hover:border-health-500/30 hover:shadow-md transition-all duration-300"
              />
            ))}
          </div>
        </div>
        
        {/* Testimonial section inspired by Intuitive Care */}
        <div className="mt-20">
          <GlassmorphicCard 
            className="p-8 md:p-12 text-center max-w-4xl mx-auto"
            intensity="medium"
          >
            <div className="mb-6">
              <div className="inline-flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-health-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "A plataforma da HealthChain transformou completamente nossos processos de auditoria, 
              reduzindo o tempo de processamento em 70% e aumentando nossa eficiência operacional."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-health-100 dark:bg-health-700 rounded-full flex items-center justify-center">
                <span className="text-health-600 dark:text-health-400 font-bold text-lg">DR</span>
              </div>
              <div className="text-left">
                <p className="font-medium">Dr. Ricardo Almeida</p>
                <p className="text-sm text-muted-foreground">Diretor Médico, Hospital Santa Cruz</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
