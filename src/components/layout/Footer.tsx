import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-4">zomato</h2>
            <div className="flex items-center gap-2 mb-4">
              <button className="border border-gray-300 rounded-md py-2 px-4 flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4" />
                <span>English</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-48">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">ABOUT ZOMATO</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Who We Are</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Blog</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Work With Us</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Investor Relations</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Report Fraud</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">ZOMAVERSE</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Zomato</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Blinkit</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Feeding India</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Hyperpure</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">FOR RESTAURANTS</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Partner With Us</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Apps For You</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Business App</Link></li>
              </ul>
              
              <h3 className="font-bold text-gray-800 mt-6 mb-4">FOR ENTERPRISES</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Zomato For Work</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-4">LEARN MORE</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Privacy</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Security</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Terms</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-red-500 text-sm">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          <p>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;