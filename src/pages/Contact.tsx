
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    state: "",
    enquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you within 48 hours.",
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        organization: "",
        state: "",
        enquiryType: "",
        message: "",
      });
    }, 1500);
  };

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-trust-900 to-block-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Contact TrustBlock Registry
              </h1>
              <p className="text-lg opacity-90">
                Partner with us to modernize land records across India with our blockchain solution
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <Input
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Vikram Singh"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="vikram.singh@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number</label>
                      <Input
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="98XXXXXXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Organization</label>
                      <Input
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        placeholder="State Revenue Department"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1">State</label>
                      <Select
                        value={formState.state}
                        onValueChange={(value) => handleSelectChange("state", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Enquiry Type</label>
                      <Select
                        value={formState.enquiryType}
                        onValueChange={(value) => handleSelectChange("enquiryType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select enquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pilotProgram">Pilot Program</SelectItem>
                          <SelectItem value="productDemo">Product Demo</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="integration">Integration with Existing Systems</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <Textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Please tell us about your land registry needs and challenges..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-trust-600 hover:bg-trust-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Check className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3">Our Office</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-trust-600 mt-0.5" />
                    <p>
                      TrustBlock Registry India<br />
                      12th Floor, Cyber Tower<br />
                      Hitech City, Hyderabad<br />
                      Telangana - 500081
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <p className="mb-2"><strong>General Enquiries:</strong><br />info@trustblockregistry.in</p>
                  <p className="mb-2"><strong>Sales:</strong><br />sales@trustblockregistry.in</p>
                  <p><strong>Support:</strong><br />support@trustblockregistry.in<br />+91 40 6635 5000</p>
                </div>
                
                <div className="bg-trust-50 rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-trust-800 mb-3">Why Choose Us</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-trust-600 mt-0.5" />
                      <p className="text-sm">India's first blockchain land registry with DigiLocker integration</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-trust-600 mt-0.5" />
                      <p className="text-sm">Compatible with existing Revenue Department systems</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-trust-600 mt-0.5" />
                      <p className="text-sm">Built with local regulatory compliance in mind</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-trust-600 mt-0.5" />
                      <p className="text-sm">Support for 12+ Indian languages including Hindi, Tamil, Telugu</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">How does blockchain prevent land fraud?</h3>
                <p className="text-gray-600">TrustBlock Registry creates immutable property records on the blockchain that can't be altered retroactively without consensus. Each transaction is cryptographically secured and linked to previous records, making it impossible to forge title deeds or falsify ownership history.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Is TrustBlock Registry compliant with Indian regulations?</h3>
                <p className="text-gray-600">Yes, our system is designed in accordance with the Digital India Land Records Modernization Programme (DILRMP) guidelines and complies with all relevant provisions of the Registration Act, 1908 and the Information Technology Act, 2000.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">How does the system integrate with existing land records?</h3>
                <p className="text-gray-600">We provide comprehensive data migration services to digitize paper records and import existing digital records. Our system offers APIs to integrate with current government databases, including Revenue Department records and municipality systems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Can citizens access their land records online?</h3>
                <p className="text-gray-600">Yes, property owners can access their records through our secure portal using Aadhaar-based authentication or DigiLocker integration. The system provides verified digital property cards that can be used for various government and financial services.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
