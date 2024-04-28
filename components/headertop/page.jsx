import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const socialIcons = [{}];

const HeaderTop = () => {
  return (
    <div>
      <div className="bg-black p-2 text-white">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="">Have any questions? call us</div>
            <div className="flex gap-3 items-center">
              <BiSolidPhoneCall style={{ color: "orange" }} />
              <p className="font-bold">+ 91 9512282008</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <FaFacebookF className="cursor-pointer" />
            </div>
            <div>
              <FaTwitter className="cursor-pointer" />
            </div>
            <div>
              <FaInstagram className="cursor-pointer" />
            </div>
            <div>
              <FaLinkedinIn className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
