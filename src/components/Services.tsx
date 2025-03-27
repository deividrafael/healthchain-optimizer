
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ClipboardCheck, Database, BarChart3, ShieldCheck, FileSearch, Brain, ArrowRight, CheckCircle } from "lucide-react";
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
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/c26bc424-605b-4ee8-aafd-2a6e50e05d44.png')] bg-no-repeat bg-center opacity-[0.02] bg-contain"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-health-500/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-health-500/10 text-health-400 text-sm font-medium mb-4">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-health-400"></span>
              Nossas Soluções
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformando a auditoria com tecnologia de ponta</h2>
            <p className="text-muted-foreground">
              Soluções completas e integradas para otimizar processos, reduzir custos e garantir a conformidade.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="border-health-500 text-health-400 group">
              Ver todas as soluções
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Main feature with screenshot */}
        <div className="mb-16">
          <GlassmorphicCard className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold">
                  Em destaque
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Plataforma Lazarus</h3>
                <p className="text-muted-foreground">
                  Nossa plataforma principal unifica todas as soluções de auditoria médica em um único ambiente, 
                  permitindo uma visão completa do processo e garantindo consistência e eficiência.
                </p>
                <ul className="space-y-3">
                  {["Interface intuitiva", "Dashboards personalizáveis", "Automação de fluxos", "Validação em tempo real"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-health-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-health-500 hover:bg-health-600 mt-4">
                  Conheça a plataforma
                </Button>
              </div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent md:hidden z-10"></div>
                <img 
                  src="/lovable-uploads/95d0a092-cac9-4b30-ad43-79f0eee2562f.png" 
                  alt="Interface da plataforma HealthChain Lazarus" 
                  className="w-full h-full object-cover md:rounded-l-none"
                />
              </div>
            </div>
          </GlassmorphicCard>
        </div>
        
        {/* Service tiles */}
        <div className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {services.map((service, index) => (
              <GlassmorphicCard 
                key={index}
                className="p-6 animate-in hover-scale group"
                hoverEffect
              >
                <div className="flex flex-col h-full">
                  <div className="bg-gradient-to-br from-health-500/10 to-blue-500/10 p-3 rounded-lg inline-block mb-4 text-health-500 group-hover:text-health-400 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-health-400 transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground flex-1">{service.description}</p>
                  <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-sm font-medium text-health-400">Saiba mais</span>
                    <ArrowRight className="h-4 w-4 text-health-400 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-20">
          <GlassmorphicCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-6">
                <div className="inline-flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium mb-3">
                  "A plataforma da HealthChain transformou completamente nossa operação. 
                  Reduzimos o tempo de processamento em 70% e aumentamos nossa taxa de 
                  conformidade para mais de 99%."
                </blockquote>
                <p className="text-muted-foreground">
                  A implementação foi rápida e a equipe de suporte sempre esteve disponível 
                  para nos auxiliar. Eu recomendo fortemente para qualquer instituição de saúde 
                  que busca otimizar seus processos de auditoria.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-health-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    DR
                  </div>
                  <div>
                    <p className="font-medium">Dr. Ricardo Almeida</p>
                    <p className="text-sm text-muted-foreground">Diretor Médico, Hospital Santa Cruz</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 relative">
                <div className="aspect-square bg-gradient-to-br from-health-500/5 to-blue-500/5 rounded-full flex items-center justify-center p-12">
                  <img 
                    src="/lovable-uploads/c26bc424-605b-4ee8-aafd-2a6e50e05d44.png" 
                    alt="Logo HealthChain" 
                    className="w-full opacity-60"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/c26bc424-605b-4ee8-aafd-2a6e50e05d44.png')] bg-no-repeat bg-center opacity-10 bg-contain rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
