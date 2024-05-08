import { MdOutlineMailOutline } from "react-icons/md";

const GetInTouch = () => {
  return (
    <div className="p-4 bg-redMain">
      <div className="flex py-8 justify-between items-center">
        <div className="flex gap-5">
          <div className="flex items-center justify-center h-20 w-20 bg-blueMain rounded-full">
            <MdOutlineMailOutline className="text-white text-5xl" />
          </div>
          <div className="text-white">
            <div className="text-5xl font-bold ">Get in touch with us</div>
            <div className="text-2xl font-medium mt-2">
              We deliver innovative customised solutions as per the
              requirements.
            </div>
          </div>
        </div>
        <div>
          <div className="bg-black text-white px-5 py-4 font-bold text-2xl hover:bg-blueMain hover:text-white cursor-pointer">
            CONTACT FOR MORE
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
