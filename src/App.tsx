
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
          className="min-h-screen bg-[#0e1a28] text-white bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/lovable-uploads/c26bc424-605b-4ee8-aafd-2a6e50e05d44.png")',
            backgroundSize: '400px',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'hsl(var(--background))'
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
