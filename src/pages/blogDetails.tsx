import { useParams, useNavigate } from "react-router-dom";
import { Box, HStack, Image, Text, Button } from "@chakra-ui/react";
import { Blogs } from "../utils/data/blogs";
import { ArrowLeft } from "tabler-icons-react";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = Blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <Box py={20} px={{ base: 10, md: 100 }} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Blog post not found.
        </Text>
        <Button
          onClick={() => navigate(-1)}
          backgroundColor="#00715D"
          color="white"
          borderRadius="30px"
          _hover={{
            bgColor: "white",
            color: "#00715D",
            border: "1px #00715D solid",
          }}
        >
          <ArrowLeft /> Go Back
        </Button>
      </Box>
    );
  }


  const related = Blogs.filter(
    (b) => b.category === blog.category && b.id !== blog.id,
  ).slice(0, 3);

  return (
    <Box py={16} px={{ base: 10, md: 100 }}>
      <Box display={{ md: "flex" }} gap={12} alignItems="flex-start">
        <Box flex={1}>
          <Text
            display="inline-block"
            backgroundColor="#00715D"
            color="white"
            fontSize="xs"
            fontWeight="bold"
            px={3}
            py={1}
            borderRadius={4}
            textTransform="uppercase"
            mb={4}
          >
            {blog.category}
          </Text>

          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            color="gray.800"
            lineHeight="tight"
            mb={4}
          >
            {blog.title}
          </Text>

          <HStack spacing={4} mb={6} color="#636B6A" fontSize="sm">
            <HStack>
              <Image src="/images/greenprofile.svg" alt="writer" />
              <Text>By: {blog.writer}</Text>
            </HStack>
            <HStack>
              <Image src="/images/message.svg" alt="category" />
              <Text>{blog.category}</Text>
            </HStack>
            <Text>{blog.date}</Text>
          </HStack>

          <Box borderRadius="xl" overflow="hidden" mb={8}>
            <Image src={blog.imageSrc} alt={blog.title} width="100%" />
          </Box>

          <Box>
            {blog.body.split("\n\n").map((paragraph, i) => (
              <Text
                key={i}
                color="#505A59"
                fontSize="md"
                lineHeight="tall"
                mb={5}
              >
                {paragraph}
              </Text>
            ))}
          </Box>

          <Button
            mt={8}
            onClick={() => navigate(-1)}
            backgroundColor="#00715D"
            color="white"
            borderRadius="30px"
            px={8}
            _hover={{
              bgColor: "white",
              color: "#00715D",
              border: "1px #00715D solid",
            }}
          >
            <ArrowLeft /> Back to Blog
          </Button>
        </Box>

        <Box
          width={{ base: "100%", md: "300px" }}
          mt={{ base: 12, md: 0 }}
          flexShrink={0}
        >

          {related.length > 0 && (
            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={4} color="gray.800">
                Related Posts
              </Text>
              <Box display="flex" flexDir="column" gap={4}>
                {related.map((r) => (
                  <Box
                    key={r.id}
                    display="flex"
                    gap={3}
                    cursor="pointer"
                    onClick={() => navigate(`/blog/${r.id}`)}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={r.imageSrc}
                      alt={r.title}
                      width="80px"
                      height="70px"
                      objectFit="cover"
                      borderRadius="lg"
                      flexShrink={0}
                    />
                    <Box>
                      <Text fontSize="xs" color="#00715D" mb={1}>
                        {r.date}
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="gray.800"
                        noOfLines={2}
                      >
                        {r.title}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          <Box
            mt={8}
            p={6}
            borderRadius="2xl"
            backgroundColor="#f0fdf4"
            border="1px solid"
            borderColor="green.100"
            textAlign="center"
          >
            <Text fontWeight="bold" color="gray.800" mb={2}>
              Support Our Work
            </Text>
            <Text fontSize="sm" color="#636B6A" mb={4}>
              Every donation helps us reach more people in need.
            </Text>
            <Button
              width="100%"
              backgroundColor="#00715D"
              color="white"
              borderRadius="30px"
              _hover={{
                bgColor: "white",
                color: "#00715D",
                border: "1px #00715D solid",
              }}
              onClick={() => navigate("/donation")}
            >
              Donate Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
