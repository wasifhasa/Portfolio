
import Home from "./component/Home";
import About from "./component/About";
import EducationPage from "./component/Education";
import SkillsPage from "./component/SkillsPage";
import OurServicesPage from "./component/Services";
import Footer from "./component/Footer";
import ContactSection from "./component/Contact";

export default function Page() {
  return (
    <div>
      {/* <Navbar/> */}
<Home/>
<About/>
<EducationPage/>
<SkillsPage/>
<OurServicesPage/>
<ContactSection/>
<Footer/>
    </div>
  );
}
