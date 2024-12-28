import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Phone, Mail } from 'lucide-react';

const ContactFooterSection = () => {
  return (
    <div>
      {/* Contact CTA Section */}
      <div className="bg-teal-950 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-teal-900/50 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Curious About How Dimark Can Help Your Business?
              </h2>
              <p className="text-gray-300 max-w-xl">
                Schedule a free consultation,
                <br />
                and let's discuss how we can bring your brand's vision to life.
                <br />
                Contact us today to get started!
              </p>
            </div>
            <button className="mt-6 md:mt-0 bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors inline-flex items-center">
              CONTACT US
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-emerald-400 text-2xl font-bold mb-4">
              DiMark
              <div className="text-xs">Marketing Management</div>
            </div>
            <p className="text-gray-400 mt-4">
              Elevating Your Brand With Creativity, Strategy, And Results.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-semibold mb-4">Navigation Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-semibold mb-4">Information</h3>
            <p className="text-gray-400">
              Dimark Marketing Management LLC
              <br />
              Dubai, United Arab Emirates.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+971-54-279-1548" className="text-gray-400 hover:text-emerald-400 block">
                +971-54 279 1548
              </a>
              <a href="mailto:info@dimark.ae" className="text-gray-400 hover:text-emerald-400 block">
                info@dimark.ae
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          Copyright © Dimark.ae |Dimark Marketing Management LLC
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-20">
          <a href="https://wa.me/+971542791548" className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </a>
          <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600">
            <Mail className="w-6 h-6" />
          </button>
          <a href="tel:+971542791548" className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooterSection;