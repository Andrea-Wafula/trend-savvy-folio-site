
import Hero from "../components/Hero";
import Chart from "../components/Chart";
import Features from "../components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <div className="container mx-auto px-4 py-20">
        <Chart />
      </div>
      <Features />
    </div>
  );
};

export default Index;
