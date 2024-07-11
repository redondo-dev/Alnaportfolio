import React from "react";
import Nav from "../app/components/Nav";
import Footer from "../app/components/Footer";
import Construction from "@/app/components/Construction";

const Carriere: React.FC = () => {
  return (
    <>
      <Nav />
      <h1>Carriere page</h1>
      <Construction />
      <Footer/>
    </>
  );
};

export default Carriere;
