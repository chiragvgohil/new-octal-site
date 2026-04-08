import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import OurApps from './pages/OurApps';
import ShopifyPlus from './pages/services/ShopifyPlus';
import AppDevelopment from './pages/services/AppDevelopment';
import WebDevelopment from './pages/services/WebDevelopment';
import ThreeDExperiences from './pages/services/ThreeDExperiences';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/apps" element={<OurApps />} />
          <Route path="/services/shopify-plus" element={<ShopifyPlus />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/3d-experiences" element={<ThreeDExperiences />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
