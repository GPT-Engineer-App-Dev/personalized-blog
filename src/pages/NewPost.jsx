import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, useToast, useColorModeValue } from "@chakra-ui/react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const bgColor = useColorModeValue("white", "gray.800");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, date: new Date().toLocaleDateString() };

    // Save the new post to localStorage
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));

    toast({
      title: "Post created.",
      description: "Your new post has been created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear the form
    setTitle("");
    setContent("");
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bgColor}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl" color={textColor}>Create New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        color={textColor}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        color={textColor}
        />
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewPost;