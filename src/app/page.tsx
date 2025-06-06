import Herosec from "@/components/Herosec";
import { main } from "motion/react-client";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased
   bg-grid-white/[0.02]">
    <h1 className="bg-amber-50">Dev and code</h1>
   <Herosec/>
   </main>
  );
}
