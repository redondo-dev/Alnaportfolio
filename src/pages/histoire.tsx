import React from "react";
import Construction from "@/app/components/Construction";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const histoire: React.FC = () => {
  return (
    <div>
      <Nav />
      <h1> Histoire page </h1>

      <Construction />
      <Footer />
    </div>
  );
};

export default histoire;
