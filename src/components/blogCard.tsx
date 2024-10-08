import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { BlogCardProps } from "../utils/types/blogCardProps";

export default function BlogCard({
  date,
  imageSrc,
  title,
  writer,
  category,
  text,
}: BlogCardProps) {
  return (
    <Box
      borderRadius="lg"
      padding="1"
      position="relative"
      className="hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      zIndex={0}
    >
      <Image src={imageSrc} alt={title} />
      <Image src="/images/datebg.svg" alt="datebg" position="absolute" top="4" left="4" />
      <Text position="absolute" top="6" left="6" fontWeight="bold" width={{base: "50%", md: "20%"}} textAlign="center">{date}</Text>
      <Box>
        <HStack py="4">
          <Image src="/images/greenprofile.svg" alt="profile" />
          <Text color="#636B6A" fontSize="sm">
            By: {writer}
          </Text>
          <Image src="/images/message.svg" alt="message" />
          <Text color="#636B6A" fontSize="sm">
            {category}
          </Text>
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

        <Text my="2" color="#636B6A" fontSize="sm" noOfLines={2}>
          {text}
        </Text>

        <Button
          bgColor="#FFFFFF"
          border="1px solid #E5E5E5"
          borderRadius="20px"
          px="6"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}
