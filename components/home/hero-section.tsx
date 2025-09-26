"use client"

import { motion } from "motion/react"
import { LogoLoop } from "@/components/LogoLoop"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiSupabase, SiDocker, SiJavascript, SiDotnet, SiPython, SiPostgresql, SiMysql, SiPhp, SiCss3, SiHtml5, SiFigma, SiGithubcopilot, SiVite, SiGithub, SiLeaflet, SiMapbox, SiEsri, SiLaravel } from 'react-icons/si';
import TextType from '@/components/TextType';


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com/" },
  { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com/" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://www.w3.org/TR/html52/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net/" },
  { node: <SiCss3 />, title: "CSS3", href: "https://www.w3.org/Style/CSS/Overview.en.html" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com/" },
  { node: <SiGithubcopilot />, title: "GitHub Copilot", href: "https://github.com/features/copilot" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
  { node: <SiMapbox />, title: "Mapbox", href: "https://www.mapbox.com/" },
  { node: <SiLeaflet />, title: "Leaflet", href: "https://leafletjs.com/" },
  { node: <SiEsri />, title: "Esri", href: "https://www.esri.com/" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com/" }
];

export function HeroSection() {
  return (
    <motion.section 
      className="w-full text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >   
      
        <TextType 
          text={["Møt studiegruppen vår", "Vi er gruppe 13", "Bla ned for å lære mer"]}
          className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
          pauseDuration={5000}
          deletingSpeed={50}
          typingSpeed={90}
          showCursor={true}
          cursorCharacter="|"
          as={"h1"}
          textColors={["text-base"]}
        />
     
      
      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
        Studentene bak prosjektene våre. Hver deltaker bidrar med unike ferdigheter og kompetanse.
        Utforsk gjerne GitHub-kortene nedenfor.
      </p>
      <div className="hidden xl:block">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel="Vår teknologistack"
          className="pt-8"
        />
      </div>
    </motion.section>
  )
}