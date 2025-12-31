import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyWMIPL } from "@/components/sections/WhyWMIPL";
import { Products } from "@/components/sections/Products";
import { ProductionProcess } from "@/components/sections/ProductionProcess";
import { ProductionProcess2 } from "@/components/sections/ProductionProcess2";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { Management } from "@/components/sections/Management";
import { Export } from "@/components/sections/Export";
import { ClientsPage } from "@/components/sections/ClientsPage";
import { CSR } from "@/components/sections/CSR";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Export2 } from "@/components/sections/Export2";
import { CertificatesSection } from "@/components/sections/certificatesect";
import { CSR2 } from "@/components/sections/CSR2";
import { ClientsPage2 } from "@/components/sections/ClientsPage2";
import { Product2 } from "@/components/sections/Product2";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <br />
      <About />
      <br />
      <Product2 />
      <br />
      <WhyWMIPL />
      <br />
      <div id="production-process">
        <div className="hidden md:block">
          <ProductionProcess />
        </div>
        <div className="block md:hidden">
          <ProductionProcess2 />
        </div>
      </div>
      <br />
      <Infrastructure />
      <br />
      <Management />
      <br />
      <Export2 />
      <br />
      <ClientsPage2 />
      <br />
      <div id="csr-section">
        <div className="block md:hidden">
          <CSR />
        </div>
        <div className="hidden md:block">
          <CSR2 />
        </div>
      </div>
      <br />
      <CertificatesSection />
      <br />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
