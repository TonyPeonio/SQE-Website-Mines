"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";
import TrimmedImage from "../components/TrimmedImage";
import { siteConfig, outlineBtnClassName, sectionDividerClassName } from "@/data/site";

export default function JoinUsPage() {

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-mines-black overflow-hidden">
      <Header />
      
      <main className="relative flex-grow flex flex-col">
        <div className="relative w-full h-64 overflow-hidden image-container-wrapper bg-white">
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <TrimmedImage
              src="/quantumlogo.png"
              alt="SQE Society of Quantum Engineers Logo"
              height={160}
              priority
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center px-6 md:px-12 py-8">
          <div className="max-w-lg text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-mines-navy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Become a Member of SQE
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-mines-silver text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Connect with fellow students, attend talks, and engage in cutting-edge quantum research opportunities.
            </motion.p>
            
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <a
                href={siteConfig.social.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className={outlineBtnClassName}
              >
                Join Newsletter
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      
      <div className={sectionDividerClassName} />
      <Footer />
    </div>
  );
}