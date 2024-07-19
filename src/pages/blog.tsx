import RegistrationForm from "@/app/components/RegistrationForm";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";

import React from "react";

const blog: React.FC = () => {
  return (
    <>
      <Nav />

      <h1>page de blog</h1>

      <RegistrationForm />

      <Footer />
    </>
  );
};

export default blog;
