import React from "react";
import Construction from "@/app/components/Construction";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const projets: React.FC = () => {
  return (
    <div>
      <Nav />
      <h1>Projects page </h1>
      <Construction/>

      <Footer />
    </div>
  );
};

export default projets;
