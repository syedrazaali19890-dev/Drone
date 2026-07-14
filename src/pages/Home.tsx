import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/hero/HeroSection';
import { MissionSection } from '../components/sections/MissionSection';
import { OSSection } from '../components/sections/OSSection';
import { AerialSection } from '../components/sections/AerialSection';
import { NavalSection } from '../components/sections/NavalSection';
import { CareersSection } from '../components/sections/CareersSection';

const Home = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "RaveMFG",
      "url": "https://www.ravemfg.com",
      "logo": "https://www.ravemfg.com/logo.png",
      "description": "Next-generation defense systems for air, land, and sea.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-555-0199",
        "contactType": "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "RaveMFG",
      "url": "https://www.ravemfg.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.ravemfg.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <div className="w-full bg-black">
      <SEO 
        title="RaveMFG | Next-Generation Defense Systems" 
        description="RaveMFG delivers premium defense technology for air, land, and sea. Explore our autonomous systems, AI integration, and advanced combat solutions."
        canonicalUrl="/"
        schema={schema}
      />
      <HeroSection />
      <MissionSection />
      <OSSection />
      <AerialSection />
      <NavalSection />
      <CareersSection />
    </div>
  );
};

export default Home;
