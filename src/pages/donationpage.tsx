import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import DonateGrid from "../features/donateGrid-section";

export default function Donationpage () {
    return(
        <div>
            <Navbar />
            <Header name="DONATION" />
            <DonateGrid/>
            <Footer />
            
        </div>
    )
}