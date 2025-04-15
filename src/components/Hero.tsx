
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Next-Gen Financial Analytics
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming market data into actionable insights
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatsCard 
              value={2.7}
              label="Market Growth"
              suffix="%"
              decimals={1}
            />
            <StatsCard 
              value={840}
              label="Active Traders"
              prefix="+"
            />
            <StatsCard 
              value={95}
              label="Success Rate"
              suffix="%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ value, label, prefix = "", suffix = "", decimals = 0 }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <h3 className="text-3xl md:text-4xl font-bold mb-2">
      {prefix}<CountUp end={value} decimals={decimals} duration={2.5} />{suffix}
    </h3>
    <p className="text-gray-300">{label}</p>
  </motion.div>
);

export default Hero;
