import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ContactDetails from "../features/contactDetails";

export default function Contactpage () {
    return(
        <div>
            <Navbar />
            <Header name="CONTACT" />
            <ContactDetails />
            <Footer />
            
        </div>
    )
}