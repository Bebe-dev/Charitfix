import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import AboutUs from "../features/aboutUs-section";
import ServiceSection from "../features/services-section";
import SponsorSection from "../features/sponsor-section";

export default function Aboutpage () {
    return(
        <div>
            <Navbar />
            <Header name="ABOUT US" />
            <ServiceSection />
            <AboutUs />
            <SponsorSection />
            <Footer />
        </div>
    )
}