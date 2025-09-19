import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Venue from "./pages/Venue";
import Timeline from "./pages/Timeline";
import FAQ from "./pages/FAQ";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./scrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
