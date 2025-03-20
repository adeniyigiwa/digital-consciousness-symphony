
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-neutral-100 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              DCM<span className="text-neutral-400">.ai</span>
            </h3>
            <p className="text-sm text-neutral-600 max-w-xs">
              Revolutionary AI-powered digital consciousness manager that evolves with you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {currentYear} DCM.ai. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
