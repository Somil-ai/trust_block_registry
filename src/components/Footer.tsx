
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-trust-600 to-block-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Trust<span className="text-trust-400">Block</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transforming land registry systems with blockchain technology for a secure, efficient, and transparent future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-200 mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">For Governments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">For Property Owners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">For Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-200 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-200 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <p>© {year} TrustBlock Registry. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a> · 
            <a href="#" className="hover:text-gray-400 ml-4">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
