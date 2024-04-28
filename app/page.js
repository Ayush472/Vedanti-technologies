import Header from "@/components/header/page";
import HeaderTop from "@/components/headertop/page";
import LandingProfile from "@/components/landingprofile/page";
import CompanyProfileLanding from "@/components/companyProfileLanding/page";

export default function Home() {
  return (
    <div>
      <HeaderTop />
      <Header />
      <LandingProfile />
      <CompanyProfileLanding />
    </div>
  );
}
