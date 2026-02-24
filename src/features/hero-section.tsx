import { Stack, Button, Card, CardBody } from "@chakra-ui/react";
import SupportIcon from "../assets/icons/SupportIcon";
import EducationIcon from "../assets/icons/EducationIcon";
import VolunteerIcon from "../assets/icons/VolunteerIcon";
import DonationIcon from "../assets/icons/DonationIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VolunteerForm from "../components/volunteerForm";

export default function HeroSection() {
  const navigate = useNavigate();
  const [showVolunteer, setShowVolunteer] = useState(false);
  return (
    <div className="py-[70px] px-[40px] md:px-[100px]">
      <section className="md:flex md:pr-[200px]">
        <div className="md:pt-12">
          <p className="text-[#00715D] font-bold">
            Speak Hope for the Homeless
          </p>
          <h2 className="text-4xl font-bold py-4">
            Donate to children & senior citizens
          </h2>
          <p className="text-[#505A59] md:w-1/2">
            Involves donating one's body after death for medical research,
            education, or anatomical dissection. Body donation plays a crucial
            role in advancing medical science
          </p>
          <Stack direction="row" paddingY="24px" gap="20px">
            <Button
              fontWeight="small"
              borderRadius="30px"
              color="white"
              backgroundColor="#00715D"
              width={{ md: "25%" }}
              onClick={() => navigate("/donation")}
              _hover={{
                bgColor: "white",
                color: "#00715D",
                border: "1px #00715D solid",
              }}
            >
              Donate now
            </Button>
            <Button
              fontWeight="small"
              borderRadius="30px"
              color="white"
              backgroundColor="#000000"
              width={{ md: "25%" }}
              onClick={() => setShowVolunteer(true)}
              _hover={{
                bgColor: "white",
                color: "#00715D",
                border: "1px #00715D solid",
              }}
            >
              Join volunteers
            </Button>
            <VolunteerForm
              isOpen={showVolunteer}
              onClose={() => setShowVolunteer(false)}
            />
          </Stack>
        </div>

        <div className="flex gap-8">
          <img src="..\images\hero-1.svg" alt="hero-1" />
          <div className="hidden md:block">
            <div className="pb-12">
              <p className="font-bold text-3xl">12+</p>
              <p className="text-[#505A59] text-sm">Years of</p>
              <p className="text-[#505A59] text-sm">Experience</p>
            </div>

            <div className="pb-12">
              <p className="font-bold text-3xl">140+</p>
              <p className="text-[#505A59] text-sm">Thousands</p>
              <p className="text-[#505A59] text-sm">volunteers</p>
            </div>

            <div className="pb-12">
              <p className="font-bold text-3xl">500+</p>
              <p className="text-[#505A59] text-sm">World wide</p>
              <p className="text-[#505A59] text-sm">Offices</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Stack
          direction={{ base: "column", sm: "column", md: "row" }}
          marginTop="60px"
          gap="6"
        >
          <Card
            
            w={{ base: "310px", sm: "440px", md: "350px" }}
            boxShadow="2xl"
          >
            <CardBody>
              <SupportIcon />
              <h2 className="font-bold">Support</h2>
              <p className="text-[#636B6A]">
                When deciding which charity to donate to, it is important to do
                your research.
              </p>
            </CardBody>
          </Card>

          <Card w={{ base: "310px", sm: "440px", md: "350px" }} boxShadow="2xl">
            <CardBody>
              <EducationIcon />
              <h2 className="font-bold">Education</h2>
              <p className="text-[#636B6A]">
                When deciding which charity to donate to, it important to do
                your research.
              </p>
            </CardBody>
          </Card>

          <Card w={{ base: "310px", sm: "440px", md: "350px" }} boxShadow="2xl">
            <CardBody>
              <VolunteerIcon />
              <h2 className="font-bold">Volunteers</h2>
              <p className="text-[#636B6A]">
                When deciding which charity to donate to, it important to do
                your research.
              </p>
            </CardBody>
          </Card>

          <Card w={{ base: "310px", sm: "440px", md: "350px" }} boxShadow="2xl">
            <CardBody>
              <DonationIcon />
              <h2 className="font-bold">Donations</h2>
              <p className="text-[#636B6A]">
                When deciding which charity to donate to, it important to do
                your research.
              </p>
            </CardBody>
          </Card>
        </Stack>
      </section>
    </div>
  );
}
