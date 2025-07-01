import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import FiveRibPanels from "./pages/products/5RibPanels";
import ProductDetail from "./pages/ProductDetail";
import PanelsOverview from "./pages/resources/PanelsOverview";
import ColorChart from "./pages/resources/ColorChart";
import ResourcePage from "./pages/ResourcePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Products Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/5-rib-panels" element={<FiveRibPanels />} />
          <Route path="/products/board-batten" element={<ProductDetail />} />
          <Route path="/products/dutch-lap" element={<ProductDetail />} />
          <Route path="/products/k-buildings" element={<ProductDetail />} />
          <Route path="/products/metal-shingles" element={<ProductDetail />} />
          <Route path="/products/pbr-panels" element={<ProductDetail />} />
          <Route path="/products/cliploc" element={<ProductDetail />} />
          <Route path="/products/traditional" element={<ProductDetail />} />
          <Route path="/products/accessories" element={<ProductDetail />} />
          <Route path="/products/tools" element={<ProductDetail />} />
          
          {/* Resources Routes */}
          <Route path="/resources/panels-overview" element={<PanelsOverview />} />
          <Route path="/resources/product-guide" element={<ResourcePage />} />
          <Route path="/resources/installation" element={<ResourcePage />} />
          <Route path="/resources/color-chart" element={<ColorChart />} />
          <Route path="/resources/warranty" element={<ResourcePage />} />
          <Route path="/resources/blog" element={<ResourcePage />} />
          <Route path="/resources/gallery" element={<ResourcePage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
