import Header from "@/components/header/page";
import HeaderTop from "@/components/headertop/page";
import LandingProfile from "@/components/landingprofile/page";
import CompanyProfileLanding from "@/components/companyProfileLanding/page";
import ProductGallery from "../components/productGallery/page";
import GetInTouch from "@/components/getInTouch/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <Header />
      <LandingProfile />
      <CompanyProfileLanding />
      <ProductGallery />
      <GetInTouch />
      <Footer/>
    </div>
  );
}
