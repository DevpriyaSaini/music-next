import Cardmove from "@/components/Cardmove";
import Contact from "@/components/Contact";
import Featurecourses from "@/components/Featurecourses";
import Footer from "@/components/Footer";
import Herosec from "@/components/Herosec";
import Stickyscroll from "@/components/Stickyscroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Upcomingweb from "@/components/Upcomingweb";

import { main } from "motion/react-client";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased
   bg-grid-white/[0.02]">
   
   <Herosec/>
   <Featurecourses/>
   <Stickyscroll/>
   <Cardmove/>
   <Upcomingweb/>
   <Contact/>
  
   </main>
  );
}  
