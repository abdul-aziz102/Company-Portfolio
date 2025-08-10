import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Chat from './Components/Chat'
import ChatbotWidget from './Components/ChatbotWidget'

// Pages
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import WebDevelopment from './Pages/WebDevelopment'
import BrandingDesign from './Pages/BrandingDesign'
import SeoMarketing from './Pages/SeoMarketing'
import ResourceOutsourcing from './Pages/ResourceOutsourcing' 
import DevOps from './Pages/Devops'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/chat" element={<Chat />} />

          {/* New routes */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/branding-design" element={<BrandingDesign />} />
          <Route path="/seo-digital-marketing" element={<SeoMarketing />} />
          <Route path="/resource-outsourcing" element={<ResourceOutsourcing />} />
          <Route path="/devops" element={<DevOps />} /> {/* ✅ Case-sensitive fix */}
        </Routes>

        <ChatbotWidget />
        <Footer />
      </Router>
    </div>
  )
}

export default App
