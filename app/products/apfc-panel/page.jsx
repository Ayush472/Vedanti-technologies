import React from "react";
import Footer from "@/components/Footer/page";
import Header from "@/components/header/page";
import HeaderTop from "@/components/headertop/page";
import PageHeader from "@/components/pageHeader/page";
import ProductCard from "@/components/proudctCard/page";
import img from "../../../assets/Images/productsImage/innerHeader.jpg";
let object = {
  h: "60",
  text: "3xl",
  insetY: "auto",
  inset: "1/3",
};
const APFC = () => {
  return (
    <>
      <div>APFC</div>
      <HeaderTop />
      <Header />
      <PageHeader
        name={"AUTOMATIC POWER FACTOR CORRECTION PANEL"}
        imageUrl={img}
        headerStyle={object}
      />
      <ProductCard />
      <Footer />
    </>
  );
};

export default APFC;
