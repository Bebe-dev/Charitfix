import slider1 from "/images/urgent.svg";
import slider2 from "/images/urgent.svg";
import slider3 from "/images/urgent.svg";
import Imageslider from "../components/imageSlider";
import { ClockHour3 } from "tabler-icons-react";
import {Button, ButtonGroup, ChakraProvider ,Progress } from "@chakra-ui/react";
import theme from "../utils/theme/custom";
import ReturnIcon from "../assets/icons/ReturnIcon";

const Images = [slider1, slider2, slider3];

export default function DonationSection() {
  return (
    <div className="flex flex-col items-center px-[40px] md:px-[100px]">
      <p className="text-[#00715D] font-semibold">In Urgent Cases</p>
      <p className="font-bold text-3xl">The best way is to find yourself</p>
      <div className="md:flex">
        <div className="relative py-8">
          <Imageslider imageUrls={Images} />
        </div>

        <div className="flex flex-col gap-6 bg-[#00715D] text-white py-12 px-4  md:w-2/5 my-8 text-center">
          <div className="flex justify-center gap-4">
            <ClockHour3 color="#ffffff" />
            <p>652 Days Remaining</p>
          </div>
          <p className="font-semibold text-2xl">
            The Universal Hands-free lighting Solution
          </p>
          <p className="text-[#C9EFE8]">
            Fund programs that help children escape poverty by providing
            vocational training.
          </p>

          <ChakraProvider theme={theme}>
            <Progress size="sm" value={65} colorScheme="customColor" borderRadius="8px"/>
          </ChakraProvider>

          <div className="flex justify-between align-center">
            <div >
                <p>Goals</p>
                <p>$15,000</p>
            </div>
            <div>
                <p>Raised</p>
                <p>$11,000</p>
            </div>
            <ReturnIcon />
          </div>

          <ButtonGroup size="lg" isAttached placeSelf="center">
            <Button fontWeight="bold" backgroundColor="#FFD502">DONATE</Button>
            <Button fontWeight="bold" backgroundColor="#FFFFFF">DETAILS</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
