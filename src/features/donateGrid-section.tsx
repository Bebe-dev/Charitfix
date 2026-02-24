import { useState } from "react";
import DonationCard from "../components/donationCard";
import { Box, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import { DonationCardProps } from "../utils/types/donationCardProps";
import Share from "../components/shareModal";
import DonateForm from "../components/donationForm";

const donations = [
  {
    category: "Food",
    imageSrc: "/images/food-1.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 55,
    url: "https://charitfix.netlify.app/donation",
  },
  {
    category: "Education",
    imageSrc: "/images/education-1.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 70,
    url: "https://charitfix.netlify.app/donation",
  },
  {
    category: "Medical",
    imageSrc: "/images/medical-1.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 20,
    url: "https://charitfix.netlify.app/donation",
  },
  {
    category: "Food",
    imageSrc: "/images/food-2.png",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 40,
    url: "https://charitfix.netlify.app/donation",
  },
  {
    category: "Education",
    imageSrc: "/images/education-2.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 80,
    url: "https://charitfix.netlify.app/donation",
  },
  {
    category: "Medical",
    imageSrc: "/images/medical-2.svg",
    title: "We Assure You That Your Donation Will Be Used Wisely.",
    goal: "$15,000",
    raised: "$15,000",
    progress: 50,
    url: "https://charitfix.netlify.app/donation",
  },
];

export default function DonateGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const [selectedDonation, setSelectedDonation] =
    useState<DonationCardProps | null>(null);
  const [selectedDonateCard, setSelectedDonateCard] =
    useState<DonationCardProps | null>(null);

  return (
    <Box p={8} px={{ base: 10, lg: 100 }}>
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
            url={donation.url}
            onShare={() => setSelectedDonation(donation)}
            onDonate={() => setSelectedDonateCard(donation)}
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

      <Share
        isOpen={selectedDonation !== null}
        onClose={() => setSelectedDonation(null)}
        donation={selectedDonation}
      />

      <DonateForm
        isOpen={selectedDonateCard !== null}
        onClose={() => setSelectedDonateCard(null)}
        donation={selectedDonateCard}
      />
    </Box>
  );
}
