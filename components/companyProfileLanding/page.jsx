import Image from "next/image";
import img from "../../assets/Images/industry.jpeg";
import { FaLongArrowAltRight } from "react-icons/fa";

const CompanyProfileLanding = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-1/2 py-7 px-5">
          <Image src={img} alt="" width={500} height={500} />
        </div>
        <div className="w-1/2 py-7">
          <div className="text-black font-bold text-4xl">Welcome to</div>
          <div className="text-redMain text-5xl font-bold mt-3">
            Vedanti Technologies
          </div>
          {/* <span className="w-full bg-blueMain h-1"></span> */}
          <div className="mt-4 pr-4">
            We, Vedanti Technologies, situated at Kathawada GIDC, Ahmedabad,
            Gujarat, India are a sole proprietary concern in this industry for
            more than 10 Years. We are manufacturer of electrical panel like
            Main LT Panel, APFC Panel, AMF Panel, Synchronizing Panel, Fire
            Panel, Power Distribution Panel, Drive Panel, Starter Panel, PCC
            (Power Control Centre), MCC (Motor Control Centre Board), Pneumatic
            Control Panel, all type of Decorative Street Light Pole, Solar
            Street Lights and all type of Fabrication and Services for Electric
            Work. We are work in installation, commissioning, Testing HT/LT
            panel, Two pole structure, HT/LT cable laying, Cable Termination,
            Electrical wiring, and service provider…
          </div>
          <div className="flex mt-4 items-center gap-2">
            <div
              className="font-bold border-b border-blueMain flex items-center gap-3 cursor-pointer"
              style={{ borderBottomWidth: "3px" }}
            >
              read more
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyProfileLanding;
