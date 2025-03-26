
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { Check, TrendingDown, LineChart, ShieldCheck, Clock, Ban } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Redução de Custos",
      description: "Minimize despesas operacionais e administrativas com processos otimizados.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/30"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Otimização do Fluxo de Caixa",
      description: "Melhore o ciclo financeiro com auditorias mais rápidas e precisas.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Maior Confiabilidade",
      description: "Garanta a integridade dos dados e a transparência dos processos.",
      color: "text-health-600",
      bgColor: "bg-health-50 dark:bg-health-950/30"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Produtividade Aumentada",
      description: "Automatize tarefas repetitivas e libere sua equipe para trabalhos estratégicos.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      icon: <Ban className="h-6 w-6" />,
      title: "Redução de Judicialização",
      description: "Evite disputas legais com processos transparentes e documentados.",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/30"
    }
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-health-50 dark:bg-health-900/40 text-health-600 dark:text-health-400 text-sm font-medium mb-4">
            Benefícios
          </div>
          <h2 className="section-title">Transforme a gestão hospitalar com nossa solução</h2>
          <p className="section-subtitle">
            Nossa plataforma foi desenvolvida para otimizar os processos de auditoria hospitalar,
            trazendo múltiplos benefícios para sua organização.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <GlassmorphicCard className="lg:col-span-1 p-8 animate-in">
            <h3 className="text-2xl font-bold mb-6">Por que escolher a HealthChain Solutions?</h3>
            <p className="text-muted-foreground mb-8">
              Nossa solução combina tecnologias inovadoras para criar um sistema 
              completo e integrado que atende às necessidades específicas 
              do setor de saúde.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`p-1 rounded-full ${benefit.bgColor} ${benefit.color} mt-0.5`}>
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{benefit.title}</span>
                </li>
              ))}
            </ul>
          </GlassmorphicCard>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 stagger-children">
            {benefits.map((benefit, index) => (
              <div key={index} className="animate-in">
                <div className={`p-3 rounded-lg inline-block ${benefit.bgColor} ${benefit.color} mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
