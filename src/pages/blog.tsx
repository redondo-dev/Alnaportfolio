import Construction from "@/app/components/Construction";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import RegistrationForm from "@/app/components/RegistrationForm";

import React from "react";

const blog: React.FC = () => {
  return (
    <>
      <Nav />

      <h1>page de blog</h1>
      <RegistrationForm />

      {/* <Construction /> */}
      <Footer/>
    </>
  );
};

export default blog;
