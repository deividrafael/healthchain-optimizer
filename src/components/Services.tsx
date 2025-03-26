
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ClipboardCheck, Database, BarChart3, ShieldCheck, FileSearch, Brain } from "lucide-react";

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="animate-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
