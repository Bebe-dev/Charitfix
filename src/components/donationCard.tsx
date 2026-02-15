import {
  Box,
  Image,
  Badge,
  Text,
  Button,
  Progress,
  HStack,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { DonationCardProps } from "../utils/types/donationCardProps";
import GreenReturn from "../assets/icons/GreenReturn";

export default function DonationCard({
  category,
  imageSrc,
  title,
  goal,
  raised,
  progress,
}: DonationCardProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      className="hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      display="flex"
      flexDir="column"
      alignItems="center"
      position="relative"
      paddingTop="4"
    >
      <Image src={imageSrc} alt={title} />

      <Box p="6">
        <HStack justifyContent="space-between">
          <Badge
            fontSize="xl"
            marginTop="8"
            borderRadius="4"
            py="8"
            p="2"
            bgColor="#00715D"
            color="white"
            position="absolute"
            top="0"
          >
            {category}
          </Badge>
          <Badge
            color="black"
            bgColor="#FFD502"
            fontSize="xl"
            p="2"
            position={{md:"absolute"}}
            right="7%"
            bottom="55%"
          >
            {progress}%
          </Badge>
        </HStack>

        <Text
          mt="1"
          fontWeight="bold"
          fontSize="xl"
          lineHeight="tight"
          noOfLines={2}
        >
          {title}
        </Text>

        <Text mt="2" color="#636B6A" fontSize="sm" noOfLines={2}>
          We understand that there are many people in need of support.
        </Text>

        <Progress colorScheme="teal" size="sm" value={progress} mt="4" />

        <Box mt="4">
          <Flex display="flex" alignItems="center">
            <Box display="flex" gap="6">
              <Box fontSize="xl">
                <Text fontWeight="bold">{goal}</Text>
                <Text color="#00715D">Goals</Text>
              </Box>
              <Box fontSize="xl">
                <Text fontWeight="bold">{raised}</Text>
                <Text color="#00715D">Raised</Text>
              </Box>
            </Box>

            <Spacer/>

            <Box>
              <GreenReturn />
            </Box>
          </Flex>
        </Box>

        <Button
          size="lg"
          padding="4"
          my="6"
          width="100%"
          variant="outline"
          borderRadius="8"
          borderColor="#CCCDD3"
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );
}
