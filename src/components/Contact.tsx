
import { Button } from "@/components/ui/button";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-health-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-health-50 dark:bg-health-900/40 text-health-600 dark:text-health-400 text-sm font-medium mb-4">
            Contato
          </div>
          <h2 className="section-title">Vamos conversar sobre seu projeto</h2>
          <p className="section-subtitle">
            Estamos à disposição para explorar como podemos colaborar com sua empresa, 
            impulsionando resultados positivos em saúde.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-health-50 dark:bg-health-900/40 text-health-600 dark:text-health-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">contato@healthchainsolutions.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-health-50 dark:bg-health-900/40 text-health-600 dark:text-health-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Telefone</h3>
                <p className="text-muted-foreground">+55 (11) 3456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-health-50 dark:bg-health-900/40 text-health-600 dark:text-health-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Endereço</h3>
                <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista</p>
                <p className="text-muted-foreground">São Paulo - SP, 01310-100</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <GlassmorphicCard className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-health-500"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-health-500"
                    placeholder="Seu email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-health-500"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-health-600 hover:bg-health-700 text-white py-3"
                >
                  Enviar mensagem
                </Button>
              </form>
            </GlassmorphicCard>
            
            <AnimatedGradient 
              className="absolute inset-0 -z-10 opacity-30 rounded-xl transform scale-[0.98] translate-y-3"
              colors={["from-health-600/40", "via-blue-500/40", "to-indigo-600/40"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
