// import Image from "next/image";
import { SparklesPreview } from "./components/ui/sparkles/sparklesPreview";
import { AnimatedTooltipPreview } from "./components/ui/info-bulle/AnimatedTooltipPreview";
import Nav from "../app/components/Nav";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ModalButton from "./components/ModalButton";

export default function Home() {
  return (
    <>
      <Nav />
      <ModalButton />
      <SparklesPreview />
      <AnimatedTooltipPreview />
      <ContactForm />
     
      <Footer />
    </>
  );
}
