import Image from "next/image";
import img from "../../assets/Images/images-headerabout.jpeg";

const AboutHeader = () => {
  return (
    <div>
      <div className="absolute">
        <div className="font-bold text-5xl mt-36 ml-10">Company Profile</div>
      </div>
      <Image
        src={img}
        alt="machine"
        className="w-full h-60 relative"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))",
          opacity: 0.5,
        }}
      />
      <div className="flex items-center">
        <div className="w-1/2 py-7 px-5">
          <Image src={img} alt="" width={500} height={500} />
        </div>
        <div className="w-1/2 py-7">
          <div className="text-redMain text-5xl font-bold mt-3">
            Company Profile
          </div>
          <div className="mt-4 pr-4">
            <ul>
              <li className="list-disc mb-3">
                We, Vedanti Technologies, situated at Kathawada GIDC, Ahmedabad,
                Gujarat, India are a sole proprietary concern in this industry
                for more than 10 Years. We are manufacturer of electrical panel
                like Main LT Panel, APFC Panel, AMF Panel, Synchronizing Panel,
                Fire Panel, Power Distribution Panel, Drive Panel, Starter
                Panel, PCC (Power Control Centre),
              </li>
              <li className="list-disc mb-3">
                We, Vedanti Technologies, situated at Kathawada GIDC, Ahmedabad,
                Gujarat, India are a sole proprietary concern in this industry
                for more than 10 Years. We are manufacturer of electrical panel
                like Main LT Panel, APFC Panel, AMF Panel, Synchronizing Panel,
                Fire Panel, Power Distribution Panel, Drive Panel, Starter
                Panel, PCC (Power Control Centre),
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-10 mt-4 mb-14">
        <ul>
          <li className="list-disc mb-3">
            We, Vedanti Technologies, situated at Kathawada GIDC, Ahmedabad,
            Gujarat, India are a sole proprietary concern in this industry for
            more than 10 Years. We are manufacturer of electrical panel like
            Main LT Panel, APFC Panel, AMF Panel, Synchronizing Panel, Fire
            Panel, Power Distribution Panel, Drive Panel, Starter Panel, PCC
            (Power Control Centre),
          </li>
          <li className="list-disc mb-3">
            We, Vedanti Technologies, situated at Kathawada GIDC, Ahmedabad,
            Gujarat, India are a sole proprietary concern in this industry for
            more than 10 Years. We are manufacturer of electrical panel like
            Main LT Panel, APFC Panel, AMF Panel, Synchronizing Panel, Fire
            Panel, Power Distribution Panel, Drive Panel, Starter Panel, PCC
            (Power Control Centre),
          </li>
          <li className="list-disc mb-3">
            We are aware of the fact that to quality is the fundamental step
            towards achieving maximum customer satisfaction, which in turn will
            lead to the success and growth of our organization. Hence we take
            all measures to provide our range of products as per the
            international quality standards and provide world class services to
            our clients.
          </li>
          <li className="list-disc mb-3">
            Over the years, the company has developed its expertise in terms of
            design, service, usage of material, production and of good quality
            equipment’s. We have earned a reputation of providing our customers
            with unmatched quality and timely delivery of our products at
            reasonable budget, as well as efficient services.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutHeader;
