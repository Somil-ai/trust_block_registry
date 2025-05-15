
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 hex-pattern">
      {/* Animated blocks in background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-16 w-16 bg-trust-100 rounded-lg animate-block-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-1/3 right-1/4 h-20 w-20 bg-block-100 rounded-lg animate-block-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 h-24 w-24 bg-trust-200 rounded-lg animate-block-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 h-12 w-12 bg-block-200 rounded-lg animate-block-float" style={{ animationDelay: "3s" }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-trust-50 text-trust-800 mb-6">
              India's Premier Blockchain Land Registry Solution
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Secure Land Ownership with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-trust-600 to-block-500">
              Blockchain Technology
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            TrustBlock Registry transforms India's traditional land registry systems with blockchain technology, 
            eliminating fraud, reducing disputes, and streamlining property transfers for panchayats to urban development authorities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-trust-600 hover:bg-trust-700" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/implementation">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Shield className="h-5 w-5 text-trust-600" />
              <span className="text-sm font-medium text-gray-700">Aadhaar-Verified Records</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="h-5 w-5 text-block-600" />
              <span className="text-sm font-medium text-gray-700">DigiLocker Integration</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <Database className="h-5 w-5 text-trust-600" />
              <span className="text-sm font-medium text-gray-700">Immutable Property Cards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
