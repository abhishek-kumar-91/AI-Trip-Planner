import { motion } from "framer-motion";
import { Globe2, PlaneTakeoff } from "lucide-react";
import { Link } from "react-router-dom";

const WelcomePage = () => {

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 relative overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <Globe2 className="w-20 h-20 text-blue-400 drop-shadow-xl" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-md"
      >
        Plan Your Perfect Trip 
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-center text-gray-300 max-w-xl"
      >
        Discover destinations, create itineraries, and get travel-ready with your personal AI planner.
      </motion.p>

      <Link to="/sign-in">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-xl flex items-center gap-2"
      >
        <PlaneTakeoff className="w-5 h-5" />
        Start Planning
      </motion.button>
      </Link>
    </div>
  );
};

export default WelcomePage;
