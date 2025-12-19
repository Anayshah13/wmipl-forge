import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyWMIPL } from "@/components/sections/WhyWMIPL";
import { Products } from "@/components/sections/Products";
import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { Management } from "@/components/sections/Management";
import { Export } from "@/components/sections/Export";
import { ClientsPage } from "@/components/sections/ClientsPage";
import { CSR } from "@/components/sections/CSR";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Test } from "@/components/sections/Test";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <WhyWMIPL />
      <Products />
      <ProductionProcess />
      <Test />
      <Infrastructure />
      <Management />
      <Export />
      <ClientsPage />
      <CSR />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
