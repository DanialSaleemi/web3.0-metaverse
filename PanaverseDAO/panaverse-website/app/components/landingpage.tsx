import { Box, Text, Image, Heading, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ltor } from "./animations";
export default function LandingPage() {
  return (
    <Box position={"static"} pt="70px">
      {/*Certified w3md*/}
      <HStack
        minH={{ base: "150px", md: "280px", lg: "400" }}
        borderBottom="8px"
        borderBottomColor={'white'}
        justify={"space-between"}
        px={{ base: "unset", md: "15px", lg: "60px" }}
      >
        <Box
          maxH={{ base: "450px", md: "unset", lg: "unset" }}
          overflow="hidden"
          maxW="800px"
          pl="30px"
        >
          <Heading
            bgGradient={"linear(to-l, #FF1F00, #FFE8E4, #FFFFFF)"}
            bgClip={"text"}
            fontWeight={{ base: "800", md: "800", lg: "800" }}
            fontSize={{ base: "18", md: "4xl", lg: "5xl" }}
            fontFamily={"heading"}
            letterSpacing={1}
          >
            Certified Web3.0 & Metaverse Developer
          </Heading>
          <Text
            pt={{ base: "10px", md: "30px", lg: "40px" }}
            textColor="whiteAlpha.800"
            fontSize={{ base: "12", md: "18", lg: "22" }}
            textAlign={"center"}
          >
            Getting Ready for the Next Generation and Future of the Internet -
            Join a 13 Trillion Dollar Industry with 5 Billion Users
          </Text>
          <Text
            pt={{ base: "8px", md: "30px", lg: "40px" }}
            textColor="whiteAlpha.800"
            fontSize={{ base: "8", md: "14", lg: "22" }}
            fontStyle="italic"
            textAlign={"center"}
          >
            A Nationwide program, already kicked off in Karachi, Lahore,
            Islamabad, and Peshawar
          </Text>
        </Box>
        <Box maxW={{ base: "150px", md: "300px", lg: "600px" }} maxH="600px">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75 }}
          >
            <Image
              src="/land.svg"
              height={{ lg: "550" }}
              width={{ lg: "400" }}
            ></Image>
          </motion.div>
        </Box>
      </HStack>

      {/*Program in a Nutshell*/}

      <HStack
        minH={{ base: "150px", md: "280px", lg: "400" }}
        borderBottom="8px"
        borderBottomColor={'white'}
        justify={"space-between"}
        px={{ base: "0", md: "15px", lg: "60px" }}
      >
        <Box maxW={{ base: "150px", md: "400px", lg: "500px" }} maxH="600px">
          <motion.nav variants={ltor} initial="hidden" whileInView="show">
            <Image
              src="/Frame.svg"
              height={{ base: "200px", lg: "550" }}
              width={{ base: "500px", lg: "500" }}
            ></Image>
          </motion.nav>
        </Box>

        <Box
          maxH={{ base: "450px", md: "unset", lg: "unset" }}
          maxW={{ base: "350px", md: "450px", lg: "650px" }}
          pr={{ base: "20px" }}
          textAlign={"end"}
        >
          <Heading
            bgGradient={"linear(to-r, #FF1F00, #FFE8E4, #FFFFFF)"}
            bgClip={"text"}
            fontSize={{ base: "16", md: "4xl", lg: "5xl" }}
            fontWeight={{ base: "700", md: "800", lg: "800" }}
            fontFamily={"heading"}
            letterSpacing={2}
          >
            Program in a Nutshell
          </Heading>
          <Heading
            bgGradient={"linear(to-r, #FF1F00, #FFE8E4, #FFFFFF)"}
            bgClip={"text"}
            fontSize={{ base: "13", md: "3xl", lg: "4xl" }}
            fontWeight={{ base: "500", md: "800", lg: "800" }}
            fontFamily={"heading"}
            letterSpacing={2}
          >
            Earn while you learn
          </Heading>
          <Text
            pt={{ base: "10px", lg: "16px" }}
            textAlign={"center"}
            textColor="whiteAlpha.800"
            fontSize={{ base: "10", md: "18", lg: "22" }}
            fontWeight={{ base: "semibold" }}
            lineHeight="1.75"
          >
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program’s beginning.
            <br />
            It resembles a cross between a corporate venture and an educational
            project.
          </Text>
        </Box>
      </HStack>

      {/*Program description*/}

      <HStack
        minH={{ base: "150px", md: "280px", lg: "400" }}
        borderBottom="8px"
        borderBottomColor={'white'}
        justify={"space-between"}
        px={{ base: "10px", md: "30px", lg: "60px" }}
      >
        <Box
          maxH={{ base: "650px", md: "unset", lg: "unset" }}
          overflow="hidden"
          maxW="700px"
        >
          <Heading
            bgGradient={"linear(to-r, #FFFFFF, #FF0000)"}
            bgClip={"text"}
            fontWeight={{ base: "800", md: "800", lg: "800" }}
            fontSize={{ base: "2xl", md: "4xl", lg: "50" }}
            fontFamily={"heading"}
            letterSpacing={2}
          >
            Program Description
          </Heading>
          <Text
            pt={{ base: "10px", md: "30px", lg: "40px" }}
            textColor="whiteAlpha.800"
            fontSize={{ base: "10", md: "18", lg: "22" }}
            fontWeight={{ base: "semibold" }}
            lineHeight="1.75"
            textAlign={"center"}
          >
            Each course is composed of four quarters, the first two quarters are
            Core Courses (‘CC’ - common to all) and the next two are Specialized
            Tracks (ST).
            <br />A ‘bootcamp’ (BC) augmented after the successful completion of
            second quarter is set in place, to support the students in starting
            their earning from what they have already learned so far.
          </Text>
        </Box>
        <Box maxW={{ base: "150px", md: "300px", lg: "600px" }} maxH="525px">
          <motion.nav variants={ltor} initial={"hidden"} whileInView={"show"}>
            <Image
              src="/VectorPD.svg"
              height={{ lg: "550" }}
              width={{ lg: "400" }}
            ></Image>
          </motion.nav>
        </Box>
      </HStack>

      {/*Core Courses*/}

      <Box
        py="20px"
        borderBottom="0px"
        px={{ base: "10px", md: "15px", lg: "60px" }}
      >
        <Heading
          bgGradient={"linear(to-r, #FF1F00, #FFE8E4 30%, #FFFFFF)"}
          bgClip={"text"}
          fontWeight={{ base: "800", md: "800", lg: "800" }}
          fontSize={{ base: "2xl", md: "4xl", lg: "50" }}
          fontFamily={"heading"}
          letterSpacing={2}
        >
          Core Courses
        </Heading>
        <Heading
          bgGradient={"linear(to-l, #FF1F00, #FFE8F4, #FFFFFF)"}
          bgClip={"text"}
          fontWeight={{ base: "300", md: "400", lg: "400" }}
          fontSize={{ base: "12", md: "18", lg: "30" }}
          fontFamily={"heading"}
          letterSpacing={2}
        >
          Common to all Specializations
        </Heading>
        <Text
          pt={{ base: "10px", md: "30px", lg: "40px" }}
          textColor="whiteAlpha.800"
          textAlign={"center"}
          fontSize={{ base: "10", md: "18", lg: "22" }}
          fontWeight={{ base: "semibold" }}
          lineHeight="1.75"
        >
          Every participant will start by completing them in the first two
          quarters.
          <br />
          To facilitate students in their earning as professional developers, a
          dollar-making bootcamp will also be considered as a part of core
          courses.
        </Text>
      </Box>
    </Box>
  );
}
