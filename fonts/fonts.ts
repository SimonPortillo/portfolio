import { 
  Plus_Jakarta_Sans as PlusJakartaSans,
  Source_Serif_4 as SourceSerif4,
  JetBrains_Mono as JetBrainsMono
} from "next/font/google";

export const sans = PlusJakartaSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const serif = SourceSerif4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const mono = JetBrainsMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
