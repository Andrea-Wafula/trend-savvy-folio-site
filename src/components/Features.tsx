
import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Real-time Analytics",
    description: "Get instant insights into market trends and performance metrics"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Trading",
    description: "Bank-grade security for all your financial transactions"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Execute trades with millisecond precision"
  }
];

const Features = () => {
  return (
    <div className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
