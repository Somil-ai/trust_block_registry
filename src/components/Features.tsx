
import { Shield, Clock, TrendingDown, Users, RefreshCw, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-trust-600" />,
    title: "Enhanced Security",
    description:
      "Tamper-proof blockchain records prevent unauthorized mutations in land records and drastically reduce property fraud cases rampant across Indian states.",
  },
  {
    icon: <Clock className="h-8 w-8 text-block-600" />,
    title: "Faster Transactions",
    description:
      "Reduce property transfer time from months to days with automated verification and integration with Sub-Registrar offices across India.",
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-trust-600" />,
    title: "Lower Costs",
    description:
      "Reduce administrative expenses by eliminating intermediaries and aligning with the Digital India mission to minimize paperwork.",
  },
  {
    icon: <Users className="h-8 w-8 text-block-600" />,
    title: "Greater Transparency",
    description:
      "Provide transparent access to land records for all stakeholders including Revenue Departments, banks, and property owners through Aadhaar authentication.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-trust-600" />,
    title: "Legacy System Integration",
    description:
      "Seamless integration with existing state revenue records and Registration Information Management Systems (RIMS) across Indian states.",
  },
  {
    icon: <FileText className="h-8 w-8 text-block-600" />,
    title: "Smart Contracts",
    description:
      "Automate property transfers with legally binding smart contracts that comply with the Registration Act and Transfer of Property Act regulations.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-trust-600 to-block-500">
              TrustBlock Registry
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our blockchain-powered land registry solution offers superior security, efficiency, and transparency 
            compared to traditional systems used across Indian states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-gradient border-0 shadow-sm hover:shadow transition-shadow">
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
      </div>
    </section>
  );
};

export default Features;
