import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import { ArrowUpRight } from "tabler-icons-react";

export default function ServiceSection() {
  return (
    <div className="px-[40px] md:px-[100px] flex flex-col md:flex-row gap-4 py-10">
      <Card shadow="xl" width={{base: "100%", md: "25%"}} position="relative" textAlign="center">
        <CardHeader
          pb="0"
          display="flex"
          flexDir="column"
          gap="4"
          justifyContent="center"
          alignItems="center"
        >
          <img src="/images/help-card.svg" alt="card-header" />
          <p className="font-bold">Medical & Blood</p>
        </CardHeader>
        <CardBody pt-0 pb="0" zIndex="1000" color="#636B6A">
          When deciding which charity to donate to, it important to do your
          research.
        </CardBody>
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <p className="text-[#00715D]">Read More</p>
          <ArrowUpRight size={18} strokeWidth={2} color={"#00715D"} />
        </CardFooter>
        <div className="text-[#F1F2F3] font-bold text-9xl pb-8 z-0 absolute bottom-0 right-0">
          01
        </div>
      </Card>

      <Card shadow="xl" width={{base: "100%", md: "25%"}} position="relative" textAlign="center">
        <CardHeader
          pb="0"
          display="flex"
          flexDir="column"
          gap="4"
          justifyContent="center"
          alignItems="center"
        >
          <img src="/images/social-card.svg" alt="card-header" />
          <p className="font-bold">Social Service</p>
        </CardHeader>
        <CardBody pt-0 pb="0" zIndex="1000" color="#636B6A">
          When deciding which charity to donate to, it important to do your
          research.
        </CardBody>
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <p className="text-[#00715D]">Read More</p>
          <ArrowUpRight size={18} strokeWidth={2} color={"#00715D"} />
        </CardFooter>
        <div className="text-[#F1F2F3] font-bold text-9xl pb-8 z-0 absolute bottom-0 right-0">
          02
        </div>
      </Card>

      <Card shadow="xl" width={{base: "100%", md: "25%"}} position="relative" textAlign="center">
        <CardHeader
          pb="0"
          display="flex"
          flexDir="column"
          gap="4"
          justifyContent="center"
          alignItems="center"
        >
          <img src="/images/charitable-card.svg" alt="card-header" />
          <p className="font-bold">Send a Charitable</p>
        </CardHeader>
        <CardBody pt-0 pb="0" zIndex="1000" color="#636B6A">
          When deciding which charity to donate to, it important to do your
          research.
        </CardBody>
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <p className="text-[#00715D]">Read More</p>
          <ArrowUpRight size={18} strokeWidth={2} color={"#00715D"} />
        </CardFooter>
        <div className="text-[#F1F2F3] font-bold text-9xl pb-8 z-0 absolute bottom-0 right-0">
          03
        </div>
      </Card>

      <Card shadow="xl" width={{base: "100%", md: "25%"}} position="relative" textAlign="center">
        <CardHeader
          pb="0"
          display="flex"
          flexDir="column"
          gap="4"
          justifyContent="center"
          alignItems="center"
        >
          <img src="/images/education-card.svg" alt="card-header" />
          <p className="font-bold">Education</p>
        </CardHeader>
        <CardBody pt-0 pb="0" zIndex="1000" color="#636B6A">
          When deciding which charity to donate to, it important to do your
          research.
        </CardBody>
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <p className="text-[#00715D]">Read More</p>
          <ArrowUpRight size={18} strokeWidth={2} color={"#00715D"} />
        </CardFooter>
        <div className="text-[#F1F2F3] font-bold text-9xl pb-8 z-0 absolute bottom-0 right-0">
          04
        </div>
      </Card>
    </div>
  );
}
