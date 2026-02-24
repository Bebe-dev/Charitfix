import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutpage from "./pages/aboutpage";
import Homepage from "./pages/homepage";
import Donationpage from "./pages/donationpage";
import Blogpage from "./pages/blogpage";
import Pagespage from "./pages/pagespage";
import Contactpage from "./pages/contactpage";
import Login from "./pages/loginpage";
import EventDetails from "./pages/eventpage";
import DonateShop from "./pages/donationShop";
import AboutDetails from "./pages/aboutDetails";
import BlogDetails from "./pages/blogDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Homepage />}> */}
        <Route index element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/about/:id" element={<AboutDetails />} />
        <Route path="/donation" element={<Donationpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/pages" element={<Pagespage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/eventDetails" element={<EventDetails />} />
        <Route path="/donationShop" element={<DonateShop />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
