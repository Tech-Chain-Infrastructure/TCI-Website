import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EdTech from "./pages/EdTech";
import FinTech from "./pages/FinTech";
import ECommerce from "./pages/ECommerce";
import EmergingTech from "./pages/EmergingTech";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { AdminProvider } from "./pages/AdminContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/edtech" element={<EdTech />} />
            <Route path="/fintech" element={<FinTech />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/emergingtech" element={<EmergingTech />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AdminProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
