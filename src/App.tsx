
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div 
          className="min-h-screen bg-background text-foreground overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, rgba(10, 37, 64, 0.2) 50%, transparent 100%)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
