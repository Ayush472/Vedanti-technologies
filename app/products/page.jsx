"use client";
import PageHeader from "@/components/pageHeader/page";
import React from "react";
import img from "../../assets/Images/productsImage/innerHeader.jpg";
import HeaderTop from "@/components/headertop/page";
import Header from "@/components/header/page";
import Footer from "@/components/Footer/page";
import ProductCard from "@/components/proudctCard/page";
let object = {
  h: "48",
  text: "5xl",
  insetY: "1/2",
  inset: "1/3",
};
const Products = () => {
  return (
    <>
      <HeaderTop />
      <Header />
      <PageHeader name={"Our Products"} imageUrl={img} headerStyle={object} />
      <ProductCard />
      <Footer />
    </>
  );
};

export default Products;
