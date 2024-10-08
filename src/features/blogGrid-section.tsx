import { Box, Button, HStack, SimpleGrid } from "@chakra-ui/react";
import BlogCard from "../components/blogCard";
import { useState } from "react";

const blogs = [
  {
    date: "23 June 2023",
    imageSrc: "/images/blog-1.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "30 June 2023",
    imageSrc: "/images/blog-2.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "07 July 2023",
    imageSrc: "/images/blog-3.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "14 July 2023",
    imageSrc: "/images/blog-4.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "21 July 2023",
    imageSrc: "/images/blog-5.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "28 July 2023",
    imageSrc: "/images/blog-6.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "05 August 2023",
    imageSrc: "/images/blog-7.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "12 August 2023",
    imageSrc: "/images/blog-8.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
  {
    date: "19 August 2023",
    imageSrc: "/images/blog-9.svg",
    title: "We assure you that your donation will be used wisely.",
    writer: "admin",
    category: "donation",
    text: "We understand that there are many people organization The seeking support,",
  },
];

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <Box py={20} px={{base:10, md:100}}>
      <SimpleGrid columns={[1, null, 3]} spacing="20px">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            date={blog.date}
            imageSrc={blog.imageSrc}
            title={blog.title}
            writer={blog.writer}
            category={blog.category}
            text={blog.text}
          />
        ))}
      </SimpleGrid>

      <HStack spacing={4} justifyContent="start" mt={10}>
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          borderRadius="50"
          color="teal"
        >
          &larr;
        </Button>

        {[...Array(totalPages)].map((_, index) => (
          <Button
            borderRadius="50"
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            colorScheme={currentPage=== index + 1 ? "teal" : "gray"}
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
