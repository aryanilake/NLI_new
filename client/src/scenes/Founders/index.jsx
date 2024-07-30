// Teams.js
import React, { useState } from "react";
import Button from "../../components/Button";
import CardSlider from "../../components/CardSlider";
import Navbar from "../../components/Navbar";
import Headers from "../../components/Headers";
import Foundercard from "../../components/Foundercard";

import viveksir from "../../assets/principalsir.png"
import umeshsir from "../../assets/Umeshsir.jpg"
import sureshsir from "../../assets/exprincipalsir.jpg"
import rohit from "../../assets/rohit.jpg"
import supriya from "../../assets/supriya.jpg"

function Founders() {

  return (
    <>
      <Navbar bgcolor="#fafaf9" textColor="#000000" active={"founders"} />
      <div className="py-20 font-poppins justify-between items-center h-max mx-auto px-5 mt-5 ">
        <Headers title="Founders" size="10vh" />
        <div className="text-center md:flex justify-center">
          <Foundercard imageUrl={rohit} title="Rohit Bokade" />
          <Foundercard imageUrl={supriya} title="Supriya Bhide" />
        </div>
        <Headers title="Mentors" size="10vh" />
        <div className="text-center md:flex justify-center">
          <Foundercard imageUrl={umeshsir} title="Dr. Umesh Sinde" />
          <Foundercard imageUrl={sureshsir} title="Dr. Suresh Ukrande" />
          <Foundercard imageUrl={viveksir} title="Dr. Vivek Sunnapwar" />
        </div>
      </div>
    </>
  );
}

export default Founders;
