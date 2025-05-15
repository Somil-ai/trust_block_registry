
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Check } from "lucide-react";

const Demo = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  
  const handleVerifyClick = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleResetClick = () => {
    setIsVerified(false);
  };

  return (
    <section id="demo" className="py-16 sm:py-24 feature-gradient">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See TrustBlock Registry In Action
          </h2>
          <p className="text-lg text-gray-600">
            Experience how our blockchain solution simplifies and secures property record management with this interactive demo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="property-search" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="property-search">Property Search</TabsTrigger>
              <TabsTrigger value="verification">Title Verification</TabsTrigger>
              <TabsTrigger value="transfer">Property Transfer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="property-search" className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Find Property Records</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Region/Municipality</label>
                    <select className="w-full rounded-md border border-gray-300 p-2">
                      <option>Metropolis County</option>
                      <option>Eastern District</option>
                      <option>Westview Region</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Search By</label>
                    <select className="w-full rounded-md border border-gray-300 p-2">
                      <option>Property ID</option>
                      <option>Owner Name</option>
                      <option>Address</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search Term</label>
                  <input type="text" placeholder="e.g. 123 Main St or ID: TBR-425813" className="w-full rounded-md border border-gray-300 p-2" />
                </div>
                
                <Button className="w-full md:w-auto bg-trust-600 hover:bg-trust-700">Search Property</Button>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-500 italic">Enter search criteria to find property records on the blockchain.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="verification" className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Verify Property Title</h3>
                
                <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Property ID</p>
                      <p className="font-mono">TBR-425813</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Location</p>
                      <p>123 Main Street, Metropolis</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Current Owner</p>
                      <p>Jane Smith</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Last Transfer Date</p>
                      <p>March 15, 2023</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md bg-gray-50">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Blockchain Title Hash</p>
                    <p className="font-mono text-sm">0x7d8f...e3a1</p>
                  </div>
                  {!isVerifying && !isVerified && (
                    <Button onClick={handleVerifyClick} className="bg-block-600 hover:bg-block-700">
                      Verify Authenticity
                    </Button>
                  )}
                  {isVerifying && (
                    <div className="flex items-center gap-2">
                      <Clock className="animate-spin h-5 w-5 text-block-600" />
                      <span>Verifying...</span>
                    </div>
                  )}
                  {isVerified && (
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-green-600 font-medium">Verified Authentic</span>
                      <Button variant="ghost" size="sm" onClick={handleResetClick}>Reset</Button>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-2">Title History</h4>
                  <div className="space-y-3">
                    <div className="p-3 border-l-2 border-trust-500">
                      <p className="text-sm font-medium">March 15, 2023</p>
                      <p className="text-sm">Property transferred from John Doe to Jane Smith</p>
                      <p className="text-xs text-gray-500 font-mono">Hash: 0x7d8f23b...4e3a1</p>
                    </div>
                    <div className="p-3 border-l-2 border-gray-300">
                      <p className="text-sm font-medium">December 10, 2015</p>
                      <p className="text-sm">Property transferred from Robert Johnson to John Doe</p>
                      <p className="text-xs text-gray-500 font-mono">Hash: 0x3e9a12d...8b7c2</p>
                    </div>
                    <div className="p-3 border-l-2 border-gray-300">
                      <p className="text-sm font-medium">August 22, 2002</p>
                      <p className="text-sm">Initial registration of property to Robert Johnson</p>
                      <p className="text-xs text-gray-500 font-mono">Hash: 0x1f56e7c...2d9a3</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="transfer" className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Transfer Property Ownership</h3>
                
                <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                  <h4 className="font-medium mb-3">Current Property Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Property ID</p>
                      <p className="font-mono">TBR-425813</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Current Owner</p>
                      <p>Jane Smith</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">New Owner Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Owner Name</label>
                      <input type="text" className="w-full rounded-md border border-gray-300 p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Government ID Number</label>
                      <input type="text" className="w-full rounded-md border border-gray-300 p-2" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Digital Signature/Key</label>
                    <input type="text" className="w-full rounded-md border border-gray-300 p-2 font-mono text-sm" placeholder="Paste digital signature hash here" />
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2">
                    <input type="checkbox" id="terms" className="rounded border-gray-300 text-trust-600" />
                    <label htmlFor="terms" className="text-sm">I confirm this transfer complies with all legal requirements</label>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-block-600 hover:bg-block-700">Create Transfer Smart Contract</Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
                
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> In a real implementation, this would integrate with digital identity verification 
                    and require cryptographic signatures from both parties.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Demo;
