
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-trust-600 to-block-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">LR</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            Trust<span className="text-trust-600">Block</span>
            <span className="text-block-600">Registry</span>
          </span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6 text-sm font-medium">
            <a href="#features" className="text-gray-700 hover:text-trust-600 transition-colors">Features</a>
            <a href="#demo" className="text-gray-700 hover:text-trust-600 transition-colors">Demo</a>
            <a href="#roadmap" className="text-gray-700 hover:text-trust-600 transition-colors">Roadmap</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-trust-600 transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 p-2 mt-2 bg-white border rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">For Governments</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">For Property Owners</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">For Developers</a>
              </div>
            </div>
          </div>
          <Button variant="default" size="sm" className="bg-trust-600 hover:bg-trust-700" asChild>
            <Link to="/contact">
              Request Demo
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden p-4 pt-0 pb-6 space-y-4 bg-white border-b">
          <a href="#features" className="block py-2 text-gray-700 hover:text-trust-600 transition-colors">Features</a>
          <a href="#demo" className="block py-2 text-gray-700 hover:text-trust-600 transition-colors">Demo</a>
          <a href="#roadmap" className="block py-2 text-gray-700 hover:text-trust-600 transition-colors">Roadmap</a>
          <div className="py-2">
            <p className="font-medium mb-2">Solutions</p>
            <div className="pl-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-trust-600 transition-colors">For Governments</a>
              <a href="#" className="block text-gray-700 hover:text-trust-600 transition-colors">For Property Owners</a>
              <a href="#" className="block text-gray-700 hover:text-trust-600 transition-colors">For Developers</a>
            </div>
          </div>
          <Button className="w-full mt-4 bg-trust-600 hover:bg-trust-700" asChild>
            <Link to="/contact">
              Request Demo
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
