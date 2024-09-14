"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        I&apos;m Happyness Mallya
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="mt-4 text-xl"
      >
        Web and Mobile App Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="mt-8"
      >
        <a
          href="#skills"
          className="px-6 py-3 bg-teal-500 rounded-md hover:bg-teal-600"
        >
          Explore My Skills
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
