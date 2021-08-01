import { Heading, Text, Link, Flex, Box } from "rebass";

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: 1440,
        mx: "auto",
        px: 3,
        textAlign: "center",
      }}
    >
      <Heading as="h1" children="Next.js + Rebass" mb={3} fontSize={[4, 5, 6]} />

      <Box>
        <Flex px={2} color="white" bg="black" alignItems="center">
          <Link
            p={2}
            fontWeight="bold"
            href="https://github.com/vercel/next.js/"
            sx={{
              fontWeight: "600",
              color: "white",
              textDecoration: "none",
            }}
          >
            Next.js
          </Link>
          <Box mx="auto" />
          <Link
            variant="nav"
            href="http://jxnblk.com/rebass/"
            sx={{
              fontWeight: "600",
              color: "white",
              textDecoration: "none",
            }}
          >
            REBASS
          </Link>
        </Flex>

        <Box>
          <Text fontSize={[3, 4, 5]} py={4}>
            "Next.js is a minimalistic framework for server-rendered React applications."
          </Text>
        </Box>
        <Box>
          <Text fontSize={[3, 4, 5]} py={2}>
            "Functional React UI component library, built with styled-components"
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
