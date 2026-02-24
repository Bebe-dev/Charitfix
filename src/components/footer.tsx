import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  BrandFacebook,
  BrandInstagram,
  BrandLinkedin,
  BrandYoutube,
  MapPin,
} from "tabler-icons-react";
import Marquee from "react-fast-marquee";
import "../App.css";
import {
  Button,
  Divider,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { id: 1, name: "Home", route: "/home", type: "dropdown" },
    { id: 2, name: "Donation", route: "/donation", type: "" },
    { id: 3, name: "About", route: "/about", type: "" },
    { id: 4, name: "Blog", route: "/blog", type: "" },
    { id: 5, name: "Contact", route: "/contact", type: "" },
  ];

  return (
    <div className=" bg-[#222928] p-0 footer">
      {/* <section className="grid grid-cols-6 gap-4"> */}
        <Marquee pauseOnHover>
          <img src="\images\gallery-1.svg" alt="footer-image1" />
          <img src="\images\gallery-2.svg" alt="footer-image2" />
          <img src="\images\gallery-3.svg" alt="footer-image3" />
          <img src="\images\gallery-4.svg" alt="footer-image4" />
          <img src="\images\gallery-2.svg" alt="footer-image2" />
          <img src="\images\gallery-3.svg" alt="footer-image3" />
        </Marquee>
      {/* </section> */}

      <section className="bg-[url('/images/footer-bg.svg')] px-[40px] md:px-[100px]">
        <div className="flex justify-between items-center py-4">
          <img src="/images/dark-logo.svg" alt="dark-logo" />
          <div className="md:flex gap-8 align-center text-white hidden">
            {links.map((link) => (
              <div key={link.id}>
                <Link to={link.route} className="hover:text-[#00715D]">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>

          <Button
            color="#ffffff"
            backgroundColor="#00715D"
            borderRadius="10px"
            paddingInline="24px"
            _hover={{
              bgColor: "white",
              color: "#00715D",
              border: "1px #00715D solid",
            }}
          >
            Donate
          </Button>
        </div>

        <Divider padding="4" />

        <div className="text-white flex flex-col md:flex-row justify-between pt-8 mb-8">
          <div>
            <p className="pl-3 pb-3 text-lg font-semibold">Explore Links</p>
            <List>
              <UnorderedList styleType="none" fontSize="small">
                <ListItem className="text-[#949B95] pb-1">
                  About Company
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">
                  Latest Projects
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">Latest Blog</ListItem>
                <ListItem className="text-[#949B95] pb-1">
                  Our Testimonials
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">Our Mission</ListItem>
              </UnorderedList>
            </List>
          </div>

          <div>
            <p className="pl-3 pb-3 text-lg font-semibold">Get Support</p>
            <List>
              <UnorderedList styleType="none" fontSize="small">
                <ListItem className="text-[#949B95] pb-1">About</ListItem>
                <ListItem className="text-[#949B95] pb-1">
                  How It Works
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">
                  Knowledge Hub
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">
                  Success Stories
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">Contact</ListItem>
              </UnorderedList>
            </List>
          </div>

          <div>
            <p className="pl-3 pb-3 text-lg font-semibold">Get Support</p>
            <List>
              <UnorderedList styleType="none" fontSize="small">
                <ListItem className="text-[#949B95] pb-1">
                  <ListIcon as={EmailIcon} />
                  donation@gmail.com
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">
                  <ListIcon as={PhoneIcon} />
                  (+88) 111-222-333
                </ListItem>
                <ListItem className="text-[#949B95] pb-1">
                  <ListIcon as={MapPin} boxSize="4" />
                  Tropical Cyclone, Volcano
                </ListItem>
              </UnorderedList>
            </List>
          </div>

          <div>
            <p className="pl-3 pb-3 text-lg font-semibold">Projects</p>
            <div className="flex items-center gap-4 pb-4">
              <img src="/images/project1.svg" alt="project1 image" />
              <div className="w-1/2">
                <p className="text-[#FFD502]">12.Oct.2023</p>
                <p className="text-white font-semibold text-xl">
                  18 Best Charity Marketing Champions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/images/project2.svg" alt="project1 image" />
              <div className="w-1/2">
                <p className="text-[#FFD502]">20.Oct.2023</p>
                <p className="text-white font-semibold text-xl">
                  Charity starts from home. You Can't Even Help,
                </p>
              </div>
            </div>
          </div>
        </div>

        <Divider padding="4" />

        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="text-[#949B95]">
            Copyright © 2023 initTheme. All rights reserved.
          </div>
          <div className="text-white flex gap-4">
            <BrandFacebook />
            <BrandYoutube />
            <BrandInstagram />
            <BrandLinkedin />
          </div>
        </div>
      </section>
    </div>
  );
}
