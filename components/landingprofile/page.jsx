import Image from "next/image";
import img from "../../assets/Images/industry.jpeg";

const LandingProfile = () => {
  return (
    <div className="bg-bgMain">
      <div className="flex flex-wrap p-5 py-12">
        <div className="w-1/2 p-3">
          <div className="text-green-600 font-extrabold text-6xl tracking-wider">
            HIGH QUALITY PRODUCTS
          </div>
          <div className="text-orange-500 font-extrabold text-4xl tracking-wider mt-4">
            High Quality Products for High Perfomance
          </div>
        </div>
        <div className="w-1/2">
          <Image src={img} alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
export default LandingProfile;
