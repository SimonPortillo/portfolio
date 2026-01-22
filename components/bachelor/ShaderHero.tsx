"use client";
import ShinyText from "@/components/ShinyText";
import Iridescence from "@/components/Iridescence";
import { motion } from "motion/react";

export default function ShaderHero() {
    return (  
      <div
        className="relative w-screen h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[450px] overflow-hidden z-0 -mx-4 sm:ml-[calc(-50vw+50%)] sm:w-screen"
        style={{ maxWidth: "none" }}
      >
        {/* Iridescence Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full scale-150 origin-center">
            <Iridescence
              color={[0.7, 0.9, 1.2]}
              mouseReact={false}
              amplitude={0.01}
              speed={0.1}
            />
          </div>
        </div>

        {/* Radial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 20%, rgba(0,0,0,0.10) 60%, transparent 100%)",
          }}
        />

        {/* Content */}
        <motion.div
          className="relative h-full flex flex-col items-center justify-center text-primary-foreground p-4 sm:p-6 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1></h1>
          <ShinyText
            text="Bachelorprosjektet 2026"
            speed={5}
            delay={10}
            color="#f0f8ff"
            shineColor="#c2e2f9"
            spread={150}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center leading-tight"
          />
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-6 sm:mb-8 px-2">
            <div className="text-slate-100 text-sm px-2.5 sm:px-4 py-1.5 sm:py-2 sm:text-lg lg:text-xl flex items-center gap-1.5 sm:gap-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
              &ldquo;Hvordan kan vi{" "}
              <b>
                <i>snakke</i>
              </b>{" "}
              med strukturerte data?&rdquo;
            </div>
          </div>
        </motion.div>
      </div>
    )
};
