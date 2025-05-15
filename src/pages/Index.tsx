
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import KeyFeatures from "@/components/KeyFeatures";
import Demo from "@/components/Demo";
import Roadmap from "@/components/Roadmap";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <KeyFeatures />
        <Demo />
        <Roadmap />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
