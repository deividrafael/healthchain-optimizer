
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { Blocks, Database, Brain, Shield, Activity, BarChart3 } from "lucide-react";

const Technology = () => {
  return (
    <section id="technology" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-health-50/20 dark:to-health-950/20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-health-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <GlassmorphicCard className="p-8 md:p-10 relative z-10 overflow-hidden animate-in">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-health-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/30 dark:bg-white/5 border border-white/20 shadow-sm">
                  <Blocks className="h-10 w-10 text-health-600 mb-3" />
                  <h3 className="font-medium">Blockchain</h3>
                  <p className="text-sm text-muted-foreground mt-2">Segurança e imutabilidade de dados</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/30 dark:bg-white/5 border border-white/20 shadow-sm">
                  <Brain className="h-10 w-10 text-health-600 mb-3" />
                  <h3 className="font-medium">Motor de Regras</h3>
                  <p className="text-sm text-muted-foreground mt-2">Automação inteligente de processos</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/30 dark:bg-white/5 border border-white/20 shadow-sm">
                  <Database className="h-10 w-10 text-health-600 mb-3" />
                  <h3 className="font-medium">Base de Dados</h3>
                  <p className="text-sm text-muted-foreground mt-2">Armazenamento seguro e eficiente</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/30 dark:bg-white/5 border border-white/20 shadow-sm">
                  <Activity className="h-10 w-10 text-health-600 mb-3" />
                  <h3 className="font-medium">Análise Preditiva</h3>
                  <p className="text-sm text-muted-foreground mt-2">Antecipação de cenários</p>
                </div>
              </div>
            </GlassmorphicCard>
            
            <AnimatedGradient 
              className="absolute inset-0 -z-10 opacity-30 rounded-xl transform scale-[0.98] translate-y-3"
              colors={["from-health-600/40", "via-blue-500/40", "to-indigo-600/40"]}
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-health-50 dark:bg-health-900/40 text-health-600 dark:text-health-400 text-sm font-medium mb-4">
              Nossa Tecnologia
            </div>
            <h2 className="section-title">Tecnologia de ponta para resultados excepcionais</h2>
            <p className="text-lg text-muted-foreground">
              Nossa plataforma combina um motor de regras inteligente com a segurança do blockchain, 
              oferecendo uma solução completa para garantir a eficiência operacional, 
              assertividade e confiabilidade dos processos de auditoria hospitalar.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex gap-4 items-start">
                <div className="bg-health-50 dark:bg-health-900/40 p-2 rounded-lg text-health-600 dark:text-health-400">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Segurança e Transparência</h3>
                  <p className="text-muted-foreground">
                    Nosso sistema blockchain garante a imutabilidade e rastreabilidade 
                    de todos os registros, eliminando fraudes e aumentando a confiança.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-health-50 dark:bg-health-900/40 p-2 rounded-lg text-health-600 dark:text-health-400">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Análise Avançada de Dados</h3>
                  <p className="text-muted-foreground">
                    Transforme dados em insights acionáveis, identificando padrões 
                    e tendências para melhorar a tomada de decisão estratégica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
