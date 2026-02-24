import { ChevronDownIcon } from "@chakra-ui/icons";
import SearchIcon from "../assets/icons/SearchIcon";
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { Menu2 } from "tabler-icons-react";
import { useState } from "react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ isInputVisible, setIsInputVisible ] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsInputVisible(true);
  };

  const links = [
    { id: 1, name: "Home", route: "/", type: "", drops: "" },
    { id: 2, name: "About", route: "/about", type: "", drops: "" },
    { id: 3, name: "Donation", route: "/donation", type: "", drops: "" },
    { id: 4, name: "Blog", route: "/blog", type: "", drops: "" },
    // {
    //   id: 5,
    //   name: "Pages",
    //   route: "/pages",
    //   type: "dropdown",
    //   drops: [
    //     { name: "Event Details", route: "/eventDetails" },
    //     { name: "Donation Shop", route: "/donationShop" },
    //   ],
    // },
    { id: 6, name: "Contact", route: "/contact", type: "", drops: "" },
  ];
  return (
    <div>
      <div className="flex justify-between align-center font-semibold px-[40px] md:px-[100px] pt-6 sticky top-0 bg-[#FFFFFF] hidden lg:flex">
        <img src="/images/logo.svg" alt="logo" />
        <div className="flex gap-8">
          {links.map((link) => (
            <div key={link.id}>
              {link.type === "dropdown" ? (
                <>
                  <Menu>
                    <MenuButton
                      _hover={{
                        bgColor: "white",
                        textDecoration: "underline"
                      }}
                      p={1}
                      border="none"
                      bg="white"
                      as={Button}
                      pb="5"
                      rightIcon={<ChevronDownIcon />}
                    >
                      <Link to={link.route}>{link.name}</Link>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link to="/eventDetails">Event Details</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/donationShop">Donation Shop</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <NavLink to={link.route} className={({isActive}) => isActive ? `mt-[8px] cursor-pointer bg-white text-[#00715D] border border-[#00715D] rounded-xl p-2` : `mt-[8px] cursor-pointer no-undeline hover:underline`} >
                        {link.name}
                      </NavLink>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="hover:cursor-pointer">
            {isInputVisible ? (
              <Input
                type="text"
                placeholder="Search..."
                autoFocus
                onBlur={() => setIsInputVisible(false)}
              />
            ) : (
              <div onClick={handleIconClick}>
                <SearchIcon />
              </div>
            )}
          </div>
          <Button
            color="#ffffff"
            backgroundColor="#00715D"
            borderRadius="30px"
            paddingInline="24px"
            _hover={{
              bgColor: "white",
              color: "#00715D",
              border: "1px #00715D solid",
            }}
          >
            <Link to="/login">Log in</Link>
          </Button>
        </div>
      </div>

      {/* MOBILE NAVBAR */}

      <div className="lg:hidden">
        <div
          onClick={onOpen}
          className="absolute right-2 top-4 bg-white cursor-pointer"
        >
          <Menu2 />
        </div>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <div key={link.id}>
                    {link.type === "dropdown" ? (
                      <>
                        <Menu>
                          <MenuButton
                            _hover={{
                              bgColor: "white",
                            }}
                            p={1}
                            border="none"
                            bg="white"
                            as={Button}
                            // pb="5"
                            rightIcon={<ChevronDownIcon />}
                          >
                            <Link to={link.route}>{link.name}</Link>
                          </MenuButton>
                          <MenuList>
                            {/* {links.drops.map((drop) => (
                      <Link to: {drop.route}>{drop.name}</Link>
                    ))} */}
                            <MenuItem>
                              <Link to="/eventDetails">Event Details</Link>
                            </MenuItem>
                            <MenuItem>Donation Shop</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                          </MenuList>
                        </Menu>
                      </>
                    ) : (
                      <NavLink to={link.route} className={({isActive}) => isActive ? `mt-[8px] cursor-pointer bg-white text-[#00715D] border border-[#00715D]` : `mt-[8px] cursor-pointer`} >
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
