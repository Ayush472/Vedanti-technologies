import React from "react";
import Image from "next/image";
import pccimage from "../../assets/Images/productsImage/3922.jpg";
import Link from "next/link";
const products = [
  {
    name: "POWER CONTROL CENTER PANEL",
    imagePath: pccimage,
    pathName: "/pcc-panel",
  },
  {
    name: "MOTOR CONTROL CENTER PANEL",
    imagePath: pccimage,
    pathName: "/mcc-panel",
  },
  {
    name: "STREET LIGHT & BORWEL FULLY AUTOMATIC PANEL",
    imagePath: pccimage,
    pathName: "/street-light-panel",
  },
  {
    name: "AUTOMATIC POWER FACTOR CORRECTION PANEL",
    imagePath: pccimage,
    pathName: "/apfc-panel",
  },
  {
    name: "DOL, STAR-DELTA & AUTO TRANSFORMER CONTROL PANEL",
    imagePath: pccimage,
    pathName: "/dol-panel",
  },
  {
    name: "POWER DISTRIBUTION PANEL",
    imagePath: pccimage,
    pathName: "/power-distribution-panel",
  },
  {
    name: "1PHASE & 3PHASE PLUG SOCKET PANEL",
    imagePath: pccimage,
    pathName: "/pcc-panel",
  },
  {
    name: "CUSTOMER MADE CONTROL PANEL",
    imagePath: pccimage,
    pathName: "/customer-made-control-panel",
  },
  {
    name: "AC DRIVE & SOFT STARTER CONTROL PANEL",
    imagePath: pccimage,
    pathName: "/pcc-panel",
  },
  {
    name: "BUS DUCT",
    imagePath: pccimage,
    pathName: "/bus-duct-panel",
  },
];
const ProductCard = () => {
  return (
    <div className="grid grid-cols-4 gap-4 m-10">
      {products.map((product) => (
        <Link
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          href={`/products${product.pathName}`}
        >
          <Image
            src={product.imagePath}
            alt={product.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
