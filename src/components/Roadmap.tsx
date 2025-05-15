
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const phases = [
  {
    title: "Phase 1: Research & Foundation",
    timeframe: "3-4 months",
    status: "current",
    keyPoints: [
      "Market analysis and feasibility studies",
      "Technical blueprint and blockchain platform selection",
      "Business framework and legal entity formation",
      "Core team assembly"
    ],
    progress: 65
  },
  {
    title: "Phase 2: Development & MVP",
    timeframe: "4-6 months",
    status: "upcoming",
    keyPoints: [
      "Core product development",
      "Security & testing",
      "Pilot preparation"
    ],
    progress: 10
  },
  {
    title: "Phase 3: Pilot Implementation",
    timeframe: "6-8 months",
    status: "planned",
    keyPoints: [
      "Limited deployment in pilot region",
      "System refinement based on feedback",
      "Validation and case study creation"
    ],
    progress: 0
  },
  {
    title: "Phase 4: Growth & Expansion",
    timeframe: "12+ months",
    status: "planned",
    keyPoints: [
      "Full-scale implementation in pilot region",
      "Market expansion to additional regions",
      "Product enhancement and API ecosystem"
    ],
    progress: 0
  },
  {
    title: "Phase 5: Ecosystem Development",
    timeframe: "Ongoing",
    status: "planned",
    keyPoints: [
      "Platform evolution with tokenization",
      "Strategic partnerships with financial institutions",
      "Community building and certification programs"
    ],
    progress: 0
  }
];

const getStatusBadge = (status: string) => {
  switch(status) {
    case "completed": 
      return <Badge className="bg-green-600">Completed</Badge>;
    case "current": 
      return <Badge className="bg-trust-600">In Progress</Badge>;
    case "upcoming": 
      return <Badge className="bg-amber-500">Upcoming</Badge>;
    default: 
      return <Badge variant="secondary">Planned</Badge>;
  }
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Implementation Roadmap
          </h2>
          <p className="text-lg text-gray-600">
            Our strategic plan to revolutionize land registry systems with blockchain technology.
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Phase connector line */}
              {index < phases.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gray-200 z-0"></div>
              )}
              
              <div className="relative z-10 flex gap-6">
                {/* Phase indicator */}
                <div className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  phase.status === "completed" 
                    ? "bg-green-100" 
                    : phase.status === "current" 
                    ? "bg-trust-100" 
                    : "bg-gray-100"
                }`}>
                  {phase.status === "completed" ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <span className={`text-lg font-bold ${
                      phase.status === "current" ? "text-trust-700" : "text-gray-500"
                    }`}>{index + 1}</span>
                  )}
                </div>
                
                {/* Phase content */}
                <Card className={`w-full border ${
                  phase.status === "current" ? "border-trust-200 shadow-sm" : ""
                }`}>
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <CardTitle>{phase.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{phase.timeframe}</CardDescription>
                      </div>
                      {getStatusBadge(phase.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {phase.keyPoints.map((point, i) => (
                        <li key={i} className="text-sm flex items-baseline gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-300 mt-1.5"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  {phase.status === "current" && (
                    <CardFooter className="pt-0">
                      <div className="w-full">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-trust-600 h-2 rounded-full" 
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
