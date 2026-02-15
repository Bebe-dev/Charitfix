import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import BlogGrid from "../features/blogGrid-section";

export default function Blogpage () {
    return(
        <div>
            <Navbar />
            <Header name="BLOG" />
            <BlogGrid />
            <Footer />
            
        </div>
    )
}