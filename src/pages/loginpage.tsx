import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import LoginForm from "../features/login-form";

export default function Login() {
    return(
        <div>
            <Navbar />
            <Header />
            <LoginForm />
            <Footer />
        </div>
    )
}