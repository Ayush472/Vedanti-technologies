import Image from "next/image";
import img from "../../assets/Images/industry.jpeg";
import { FaSearch } from "react-icons/fa";

const imgGallery = [
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
];

const ProductGallery = () => {
  return (
    <div className="p-4">
      <div className="font-bold text-5xl text-redMain">
        <span
          className="border-b border-blueMain rounded-sm"
          style={{ borderBottomWidth: "5px" }}
        >
          Our
        </span>{" "}
        Product Gallery
      </div>
      <div className="flex flex-wrap mt-10 -mx-3">
        {imgGallery.map((item, index) => (
          <div key={index} className="w-1/4 px-3 mb-6">
            <div className="relative overflow-hidden cursor-pointer">
              <Image
                src={item?.img}
                width={400}
                height={600}
                alt="product image"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <FaSearch className="text-white text-3xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGallery;
