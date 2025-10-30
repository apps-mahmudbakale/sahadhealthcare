import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={Logo} 
                alt="MedEquip Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for quality medical equipment and consumables since 1998.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#189F59] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#189F59] rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#189F59] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#189F59] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-[#189F59] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#189F59] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#189F59] transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#189F59] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Product Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#189F59] transition-colors">
                  Diagnostic Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#189F59] transition-colors">
                  Medical Consumables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#189F59] transition-colors">
                  Laboratory Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#189F59] transition-colors">
                  Patient Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#189F59] transition-colors">
                  Emergency Equipment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-sm">
                Plot. 1356 Tafawa Balewa Way, Behind Central Bank Central Business District<br />
                  Abuja, Federal Capital Territory
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-teal-400 transition-colors">
                  +234 704 868 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@medequip.com" className="hover:text-teal-400 transition-colors">
                  info@sahadhealthcare.com
                </a>
              </li>
            </ul>
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <p className="text-sm font-semibold text-white mb-1">Business Hours</p>
              <p className="text-sm text-gray-400">Mon-Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 Sahad Health Care. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
