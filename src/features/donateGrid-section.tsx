import { useState } from "react";
import DonationCard from "../components/donationCard";
import { Box, SimpleGrid, HStack, Button } from "@chakra-ui/react";

const donations = [
  {
    category: "Food",
    imageSrc: "/images/food-1.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 55,
  },
  {
    category: "Education",
    imageSrc: "/images/education-1.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 70,
  },
  {
    category: "Medical",
    imageSrc: "/images/medical-1.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 20,
  },
  {
    category: "Food",
    imageSrc: "/images/food-2.png",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 40,
  },
  {
    category: "Education",
    imageSrc: "/images/education-2.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 80,
  },
  {
    category: "Medical",
    imageSrc: "/images/medical-2.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 50,
  },
  // Add more donation items
];

export default function DonateGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <Box p={8} px={{base:10, md:100}}>
      {/* Donation Cards Grid */}
      <SimpleGrid columns={[1, null, 3]} spacing="20px">
        {donations.map((donation, index) => (
          <DonationCard
            key={index}
            category={donation.category}
            imageSrc={donation.imageSrc}
            title={donation.title}
            goal={donation.goal}
            raised={donation.raised}
            progress={donation.progress}
          />
        ))}
      </SimpleGrid>


      <HStack spacing={4} justifyContent="center" mt={10}>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          colorScheme="teal"
          borderRadius="50"
        >
          &larr;
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            borderRadius="50"
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            colorScheme={currentPage === index + 1 ? "teal" : "gray"}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          colorScheme="teal"
          borderRadius="50"
        >
          &rarr;
        </Button>
      </HStack>
    </Box>
  );
}
