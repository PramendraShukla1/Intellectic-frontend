import About from "./pages/About";
import CareerPage from "./pages/CareerPage";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ResumeBuilder from "./pages/ResumeBuilder";
import ServicesPage from "./pages/ServicesPage";
import BusinessNews from "./pages/BusinessNews";
import Personalized from "./components/servicesComponents/ServicePages/Personalized";
import WebDevelopment from "./components/servicesComponents/ServicePages/WebDevelopment";
import ResumeBuilding from "./components/servicesComponents/ServicePages/ResumeBuilding";
import DataEntry from "./components/servicesComponents/ServicePages/DataEntry";
import SeoOptimization from "./components/servicesComponents/ServicePages/SeoOptimization";
import UIUX from "./components/servicesComponents/ServicePages/UIUX";
import Privacy from "./pages/Privacy";
import CertificateVarification from "./pages/CertificateVarification"

function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intellectic-career" element={<CareerPage />} />
        <Route path="/intellectic-about-us" element={<About />} />
        <Route path="/intellectic-faq" element={<ResumeBuilder />} />
        <Route path="/intellectic-services" element={<ServicesPage />} />
        <Route
          path="/intellectic-Business-news-live"
          element={<BusinessNews />}
        />
        <Route
          path="/intellectic-services/personalized-websites"
          element={<Personalized />}
        />
        <Route
          path="/intellectic-services/web-development-and-designs"
          element={<WebDevelopment />}
        />

        <Route
          path="/intellectic-services/resume-building"
          element={<ResumeBuilding />}
        />

        <Route
          path="/intellectic-services/data-entry"
          element={<DataEntry />}
        />

        <Route
          path="/intellectic-services/seo-optimization"
          element={<SeoOptimization />}
        />

        <Route path="/intellectic-services/ui-ux-design" element={<UIUX />} />

        <Route
          path="/intellectic-services/privacy-policy"
          element={<Privacy />}
        />

        <Route path="/intellectic-certificate-verification" element={<CertificateVarification/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
