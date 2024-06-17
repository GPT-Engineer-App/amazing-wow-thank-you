import { Container, Text, VStack, Box, Image, Heading, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50" p={4}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" color="brand.700" mb={4}>Welcome to Our Upscale Community</Heading>
          <Text fontSize="lg" color="gray.600">Experience the best of suburban living with our exclusive offerings.</Text>
        </Box>
        <Box>
          <Image src="/images/suburban-living.jpg" alt="Suburban Living" borderRadius="md" boxShadow="md" />
        </Box>
        <Box textAlign="center">
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">Explore More</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;