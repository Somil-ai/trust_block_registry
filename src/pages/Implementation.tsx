
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Database, Lock, FileText, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Implementation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-trust-900 to-block-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Blockchain Land Registry Implementation
              </h1>
              <p className="text-lg mb-8">
                A comprehensive guide to implementing secure, tamper-proof land records
                using advanced blockchain technology for Indian government entities.
              </p>
            </div>
          </div>
        </section>

        {/* System Overview section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">System Overview</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="mb-4">
                  TrustBlock Registry transforms India's traditional land registry systems with blockchain 
                  technology, offering a secure and transparent solution for property management. Our 
                  system involves multiple key entities:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Shield className="h-5 w-5 text-trust-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Certification Authority (CA):</span> Verifies identities and issues digital certificates to landowners and buyers.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Users className="h-5 w-5 text-trust-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Property Owners & Buyers:</span> Register and manage land ownership while ensuring secure transactions.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Database className="h-5 w-5 text-block-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Land Registration Department (LRD):</span> Government entity that manages and encrypts land-related information.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Lock className="h-5 w-5 text-trust-600 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Blockchain Storage Server (BSS):</span> Securely stores encrypted land transaction records with immutability.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Technical Implementation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-trust-800">Encryption Process</h3>
                  <p>Our system employs advanced encryption to secure land records:</p>
                  <ol className="mt-4 ml-5 list-decimal space-y-2">
                    <li>Land records are read and converted to integer values</li>
                    <li>Data is encrypted using asymmetric cryptosystems</li>
                    <li>Encrypted data is converted to binary format</li>
                    <li>Binary data is transformed to DNA bases for secure storage</li>
                    <li>Records are stored immutably on the blockchain</li>
                  </ol>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-block-800">Land Transaction Process</h3>
                  <p>A secure, transparent process for property transfers:</p>
                  <ol className="mt-4 ml-5 list-decimal space-y-2">
                    <li>Digital verification of buyer and seller identities</li>
                    <li>Pre-agreement smart contract creation and verification</li>
                    <li>Property details validation against blockchain records</li>
                    <li>Secure ownership transfer through smart contracts</li>
                    <li>New block creation with updated ownership information</li>
                  </ol>
                </div>
              </div>

              <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-center">Implementation Benefits</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <FileText className="h-10 w-10 mx-auto mb-4 text-trust-600" />
                    <h4 className="font-bold">Reduced Fraud</h4>
                    <p className="mt-2 text-sm text-gray-600">Eliminates fake documents and unauthorized modifications</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-10 w-10 mx-auto mb-4 text-block-600" />
                    <h4 className="font-bold">Faster Processing</h4>
                    <p className="mt-2 text-sm text-gray-600">Reduces property transfer time from weeks to hours</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-10 w-10 mx-auto mb-4 text-trust-600" />
                    <h4 className="font-bold">Enhanced Security</h4>
                    <p className="mt-2 text-sm text-gray-600">Cryptographic protection of all land records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-trust-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Implement?</h2>
              <p className="text-lg mb-8">
                Join progressive state governments and district administrations already 
                transforming their property ecosystems with our blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-trust-600 hover:bg-trust-700" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Implementation;
