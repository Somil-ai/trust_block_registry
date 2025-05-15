
import { 
  Database, 
  Shield, 
  Check, 
  FileCheck, 
  Users, 
  Key, 
  Link
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const keyFeatures = [
  {
    icon: <Database className="h-8 w-8 text-trust-600" />,
    title: "Decentralization",
    description:
      "Records stored on a decentralized network prevent manipulation by any single entity, addressing challenges faced by centralized record-keeping systems in Indian land offices.",
  },
  {
    icon: <Shield className="h-8 w-8 text-block-600" />,
    title: "Tamper-Proof Records",
    description:
      "Immutable blockchain records make property fraud—a major issue across states like Maharashtra, UP and Tamil Nadu—nearly impossible by detecting any unauthorized changes.",
  },
  {
    icon: <Check className="h-8 w-8 text-trust-600" />,
    title: "Instant Verification",
    description:
      "Prospective buyers can instantly verify ownership history and encumbrances without lengthy visits to Sub-Registrar offices or Revenue Departments, reducing transaction time.",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-block-600" />,
    title: "Smart Contracts",
    description:
      "Automated property transfers through legally compliant smart contracts reduce dependency on intermediaries like document writers and agents prevalent in Indian real estate.",
  },
  {
    icon: <Users className="h-8 w-8 text-trust-600" />,
    title: "Transparent History",
    description:
      "Complete ownership history helps resolve the widespread ancestral property disputes in rural India by providing unquestionable record of succession and transfers.",
  },
  {
    icon: <Key className="h-8 w-8 text-block-600" />,
    title: "Aadhaar-Secured Access",
    description:
      "Property owners control record access through Aadhaar authentication, maintaining privacy while enabling transparency for authorized transactions and governance.",
  },
  {
    icon: <Link className="h-8 w-8 text-trust-600" />,
    title: "Integration with DigiLocker",
    description:
      "Integration with India's DigiLocker enables secure digital storage of property cards, 7/12 extracts, and e-Swatva certificates without risk of damage or loss.",
  },
];

const benefits = [
  {
    title: "Reduced Fraud",
    description: "Makes it nearly impossible for fraudsters to create fake property documents, addressing a critical issue that costs Indian property owners ₹800+ crore annually."
  },
  {
    title: "Lower Costs",
    description: "Reducing dependency on intermediaries cuts transaction costs by up to 50%, making property registration more affordable across all economic segments."
  },
  {
    title: "Increased Trust",
    description: "Transparent and secure system builds confidence among stakeholders, encouraging more legitimate transactions in previously disputed areas."
  },
  {
    title: "Global Accessibility",
    description: "NRI property owners can verify and manage their assets from anywhere, addressing a significant pain point for India's 30+ million overseas citizens."
  },
  {
    title: "Faster Dispute Resolution",
    description: "Transparent history aids in quicker resolution of property disputes that currently take an average of 7+ years in Indian courts."
  }
];

const KeyFeatures = () => {
  return (
    <section id="key-features" className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Key Features of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-trust-600 to-block-500">
              Blockchain-Based Land Registry
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our solution addresses the unique challenges faced by India's complex land registry system with cutting-edge blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="mb-3">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-block-500 to-trust-600">
              Benefits for Indian Stakeholders
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            TrustBlock Registry delivers tangible advantages for property owners, government agencies, and financial institutions across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-trust-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}

          <div className="bg-gradient-to-br from-trust-50 to-block-50 p-6 rounded-lg shadow-sm border border-trust-100">
            <h3 className="text-xl font-bold mb-3 text-trust-800">Implementation Considerations</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-trust-600 mr-2 mt-0.5" />
                <span>Legal framework aligned with Registration Act and Transfer of Property Act</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-trust-600 mr-2 mt-0.5" />
                <span>Training programs for Revenue Department officials and Tehsildars</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-trust-600 mr-2 mt-0.5" />
                <span>Integration with existing land record digitization initiatives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
