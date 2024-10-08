import Footer from "../components/footer";
import Navbar from "../components/navbar";
import DonationSection from "../features/donation-section";
import HeroSection from "../features/hero-section";
import QuestionSection from "../features/questions-section";
import TestimonialSection from "../features/testimonial-section";
import UpcomingSection from "../features/upcoming-section";

export default function Homepage() {
    return(
        <div>
            <Navbar />
            <HeroSection />
            <DonationSection />
            <QuestionSection />
            <UpcomingSection />
            <TestimonialSection />
            <Footer />

            
        </div>
    )
}