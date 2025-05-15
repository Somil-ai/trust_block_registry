
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-trust-900 to-block-900 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Secure India's Land Records with Blockchain?
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Join progressive state governments and district administrations already 
            transforming their property ecosystems with tamper-proof, transparent blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-trust-900 hover:bg-gray-100 w-full sm:w-auto"
              asChild
            >
              <Link to="/implementation">
                Request Pilot Implementation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              asChild
            >
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
