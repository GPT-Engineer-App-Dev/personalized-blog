import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], a passionate writer and blogger. Here you'll find my thoughts on various topics, ranging from technology to lifestyle. Stay tuned for my latest posts!
        </Text>
        <Box>
          <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        </Box>
        <Box>
          <Link href="/new-post" color="teal.500" fontSize="lg">Create New Post</Link>
        </Box>
        <VStack spacing={4} mt={8} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Heading as="h3" size="md">{post.title}</Heading>
              <Text fontSize="sm" color="gray.500">{post.date}</Text>
              <Text mt={2}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;