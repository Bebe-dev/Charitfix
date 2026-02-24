import { Box, Button, HStack, SimpleGrid } from "@chakra-ui/react";
import BlogCard from "../components/blogCard";
import { useState } from "react";
import { Blogs } from "../utils/data/blogs";

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <Box py={20} px={{base:10, md:100}}>
      <SimpleGrid columns={[1, null, 3]} spacing="20px">
        {Blogs.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog.id}
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
