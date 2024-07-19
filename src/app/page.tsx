// import Image from "next/image";
import { SparklesPreview } from "./components/ui/sparkles/sparklesPreview";
import { AnimatedTooltipPreview } from "./components/ui/info-bulle/AnimatedTooltipPreview";
import Nav from "./components/Nav";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ModalButton from "./components/ModalButton";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Nav />
      <ModalButton />
      <About />
      <SparklesPreview />
      <AnimatedTooltipPreview />
      <ContactForm />

      <Footer />
    </>
  );
}
