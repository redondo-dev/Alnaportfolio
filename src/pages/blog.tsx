import Construction from "@/app/components/Construction";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import React from "react";

const blog: React.FC = () => {
  return (
    <>
      <Nav />

      <h1>page de blog</h1>

      <Construction />
      <Footer/>
    </>
  );
};

export default blog;
