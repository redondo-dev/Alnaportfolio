import Image from "next/image";
import { TypewriterEffectSmoothDemo } from "./components/ui/type-writer/TypewriterEffectSmoothDemo";
import { ThreeDCardDemo } from "./components/ui/3dcard/ThreeDCardDemo";
import { SparklesPreview } from "./components/ui/sparkles/sparklesPreview";
import { AnimatedTooltipPreview } from "./components/ui/info-bulle/AnimatedTooltipPreview";
import Nav from"../app/components/Nav";


export default function Home() {
  return (
    <>
      <Nav/>
      {/* <TypewriterEffectSmoothDemo />      */}
        <SparklesPreview />
        {/* <ThreeDCardDemo /> */}
        
        <AnimatedTooltipPreview/>
        </>
  );
}
