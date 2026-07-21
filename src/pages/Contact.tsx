import React from 'react';
import { Button } from '../components/buttons/Button';
import { Input } from '../components/forms/Input';
import { Card } from '../components/cards/Card';
import { FiMapPin, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] min-h-screen">
      
  <div className="pt-24 md:pt-40 pb-20 px-4 md:px-8 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] text-center">
    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Contact Us</h1>
    <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Our enterprise specialists are ready to architect your security solution.</p>
  </div>

      
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Company Email" type="email" />
            <Input placeholder="Organization Name" />
            <textarea 
              className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors h-32" 
              placeholder="How can we help?" 
            />
            <Button variant="primary" size="lg" className="w-full">Submit Request</Button>
          </form>
        </div>
        <div className="flex flex-col h-full">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 md:p-10 h-full">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <FiMapPin className="text-[var(--color-accent)] text-2xl mt-1 shrink-0" />
                <div>
                  <h4 className="text-white font-bold mb-1">Rave Manufacturing Inc.</h4>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">1144 North Armando Street,<br/>Anaheim, CA, USA</p>
                </div>
              </div>

              {/* Emails & Phones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <FiMail className="text-[var(--color-accent)] text-2xl mt-1 shrink-0" />
                  <div>
                    <a href="mailto:arsalan@ravemfg.com" className="text-white hover:text-[var(--color-accent)] transition-colors block mb-1 font-medium">arsalan@ravemfg.com</a>
                    <a href="tel:5625375533" className="text-[var(--color-text-secondary)] hover:text-white transition-colors block">(562) 537-5533</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiMail className="text-[var(--color-accent)] text-2xl mt-1 shrink-0" />
                  <div>
                    <a href="mailto:blake@ravemfg.com" className="text-white hover:text-[var(--color-accent)] transition-colors block mb-1 font-medium">blake@ravemfg.com</a>
                    <a href="tel:4082098390" className="text-[var(--color-text-secondary)] hover:text-white transition-colors block">(408) 209-8390</a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[var(--color-border)]">
                <FiClock className="text-[var(--color-accent)] text-2xl mt-1 shrink-0" />
                <div className="w-full">
                  <h4 className="text-white font-bold mb-4">Hours</h4>
                  <ul className="text-[var(--color-text-secondary)] space-y-2 text-sm w-full max-w-xs">
                    <li className="flex justify-between"><span>Mon</span><span className="text-white font-mono">07:00 am – 04:00 pm</span></li>
                    <li className="flex justify-between"><span>Tue</span><span className="text-white font-mono">07:00 am – 04:00 pm</span></li>
                    <li className="flex justify-between"><span>Wed</span><span className="text-white font-mono">07:00 am – 04:00 pm</span></li>
                    <li className="flex justify-between"><span>Thu</span><span className="text-white font-mono">07:00 am – 04:00 pm</span></li>
                    <li className="flex justify-between"><span>Fri</span><span className="text-white font-mono">07:00 am – 04:00 pm</span></li>
                    <li className="flex justify-between"><span>Sat</span><span className="text-[var(--color-accent)]">Closed</span></li>
                    <li className="flex justify-between"><span>Sun</span><span className="text-[var(--color-accent)]">Closed</span></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-[var(--color-border)] relative">
          <iframe 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            loading="lazy" 
            allowFullScreen 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://maps.google.com/maps?q=Rave+Manufacturing+Inc.,+1144+N+Armando+St,+Anaheim,+CA+92806,+United+States&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0"
            title="Rave Manufacturing Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
