import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Image,
  Card,
  Divider,
  CardBody,
  CardHeader,
  Button,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { ltor, rtol } from "./animations";

export default function Specializations() {
  const specializedcards = [
    {
      title: "Web 3.0 (Blockchain) & Metaverse",
      subtitle:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      image: { src: "/st1.png", alt: "", width: "300", height: "150" },
      heading1: "Quarter IV (ST-1)",
      text1:
        "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
      desc1:
        "In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart . . .",
      heading2: "Quarter V (ST-1)",
      text2:
        "MV-361: Developing Planet-Scale Open Virtual & Augmented Metaverse Experiences",
      desc2:
        "The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can . . .",
    },
    {
      title: "Artificial Intelligence & Deep Learning",
      subtitle:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      image: { src: "/st2.png", alt: "", width: "300", height: "150" },
      heading1: "Quarter IV (ST-2)",
      text1:
        "AI-351: Developing Planet-Scale Intelligent APIs & Python Programming",
      desc1:
        "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer . . .",
      heading2: "Quarter V (ST-2)",
      text2: "AI-361: Deep Learning & MLOps",
      desc2:
        "This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. . . .",
    },
    {
      title: "Ambient Computing & IoT",
      subtitle:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
      image: { src: "/st3.png", alt: "", width: "300", height: "150" },
      heading1: "Quarter IV (ST-3)",
      text1: "AC-351: Ambient Computing with Voice Assistants & Matter Devices",
      desc1:
        "The Ambient Computing & IoT Specialization focuses on building Smart Homes, Offices, Factories, and . . .",
      heading2: "Quarter V (ST-3)",
      text2: "AC-361:Embedded Programming using C and Rust",
      desc2:
        "This is an introductory course about using the C and Rust Programming Languages on 'Bare Metal' embedded ...",
    },
    {
      title: "Cloud Native Computing",
      subtitle:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      image: { src: "/st4.png", alt: "", width: "300", height: "150" },
      heading1: "Quarter IV (ST-4)",
      text1: "CN-351: Certified Kubernetes Application Developer (CKAD)",
      desc1:
        "Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads . . .",
      heading2: "Quarter V (ST-4)",
      text2: "Cn-361: Developing Multi-Cloud Apps using CDK for Terraform",
      desc2:
        "Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies.  . . .",
    },
    {
      title: "Genomics & BioInformatics",
      subtitle:
        "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
      image: { src: "/st5.png", alt: "", width: "300", height: "150" },
      heading1: "Quarter IV (ST-5)",
      text1: "Bio-351: Python for Biologists",
      desc1:
        "This course will focus on learning the basics of the Python programming language through genomics examples.",
      heading2: "Quarter V (ST-5)",
      text2: "Bio-361: Bioinformatics with Python",
      desc2:
        "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem . . .",
    },
    {
      title: "Network Programmability & Automation",
      subtitle:
        "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
      image: { src: "/st6.png", alt: "", width: "300", height: "150" },
      heading1: "Quarter IV (ST-6)",
      text1: "NPA-351: CCNA 200-301 Certification",
      desc1:
        "More than ever, network engineers are finding it challenging to complete their duties entirely manually.  . . .",
      heading2: "Quarter V (ST-6)",
      text2: "NPA-361: Network Programmability & Automation",
      desc2:
        "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network . . .",
    },
  ];

  return (
    <>
      <Box
        py="20px"
        borderBottom="0px"
        px={{ base: "10px", md: "15px", lg: "60px" }}
      >
        <Heading
          bgGradient={"linear(to-r, #FF1F00, #FFE8E4 30%, #FFFFFF)"}
          bgClip={"text"}
          fontWeight={{ base: "800", md: "800", lg: "800" }}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontFamily={"heading"}
          letterSpacing={2}
        >
          Specialized Tracks
        </Heading>
        <Text
          textColor={"whiteAlpha.800"}
          pt={{ base: "10px", md: "30px", lg: "40px" }}
          fontSize={{ base: "xl", md: "2xl", lg: "22" }}
          lineHeight="1.75"
          textAlign={"center"}
        >
          After successful completion of first three quarters, the participants
          will be able to select one or more specializations of their choice,
          each consisting of two quarters.
        </Text>
      </Box>

      <SimpleGrid
        columns={2}
        spacing={10}
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        {specializedcards.map((card1, index) => (
          <Box key={index}>
            <Heading fontSize="sm" textAlign={"center"} textColor="whitesmoke">
              {card1.title}
            </Heading>
            <Image src={card1.image.src} width="auto"></Image>
          </Box>
        ))}
      </SimpleGrid>

      {specializedcards.map((card, index) => (
        <Box key={index}>
          <Card bg="transparent">
            <CardHeader>
              <Heading
                fontSize={{ base: "2xl", md: "4xl", lg: "7xl" }}
                textColor="HighlightText"
                textAlign={"center"}
              >
                {card.title}
              </Heading>
              <motion.nav whileHover={{ scale: 1.1 }}>
                <Image
                  src={card.image.src}
                  display={{ base: "flex", md: "none", lg: "none" }}
                />
              </motion.nav>
              <Text
                px={{ base: 0, lg: 20 }}
                py="5"
                fontSize={{ base: "15", md: "xl", lg: "2xl" }}
                fontWeight={{ lg: "600" }}
                textColor={{ base: "whiteAlpha.800", lg: "whitesmoke" }}
              >
                {card.subtitle}
              </Text>
            </CardHeader>
            <CardBody>
              <Stack
                position="relative"
                direction={{ base: "column", md: "row", lg: "row" }}
                justify={{ base: "unset", lg: "center" }}
                spacing={8}
              >
                <motion.nav
                  variants={ltor}
                  className="Box"
                  initial={"hidden"}
                  whileInView={"show"}
                >
                  <Card
                    align={"center"}
                    dropShadow={"outline"}
                    width={{ base: "auto", lg: "600px" }}
                    bgGradient={"linear(to-tl, #161516, #D80661, #1D1D1A)"}
                  >
                    <CardBody>
                      <Heading
                        mt="-5"
                        py="3"
                        textAlign={"center"}
                        textColor={'whitesmoke'}
                        fontSize={{ base: "2xl", lg: "3xl" }}
                      >
                        {card.heading1}
                      </Heading>

                      <Heading
                        py="3"
                        fontWeight={{ base: "600" }}
                        fontSize={{ base: "lg" }}
                        textAlign="left"
                        textColor={'whitesmoke'}
                      >
                        {card.text1}
                      </Heading>
                      <Text
                        my="5px"
                        px="1"
                        textAlign={"center"}
                        bg="#B4D2EF"
                        boxSize={"fit-content"}
                        textColor={"black"}
                        fontWeight={500}
                        borderRadius="3xl"
                      >
                        Duration:13 Weeks
                      </Text>
                      <Text
                        py="5"
                        textColor={"whiteAlpha.800"}
                        textAlign="left"                        
                      >
                        {card.desc1}
                      </Text>
                      <Button
                        mt={"20px"}
                        bgColor={"#9F28FDC2"}
                        borderRadius={"lg"}
                      >
                        Learn More
                      </Button>
                    </CardBody>
                  </Card>
                </motion.nav>

                <motion.nav
                  variants={rtol}
                  className="Box"
                  initial={"hidden"}
                  whileInView={"show"}
                >
                  <Card
                    align={"center"}
                    dropShadow={"outline"}
                    width={{ base: "auto", lg: "600px" }}
                    bgGradient={"linear(to-tr, #161516, #D80661, #1D1D1A)"}
                  >
                    <CardBody>
                      <Heading
                        mt="-5"
                        textAlign={"center"}
                        textColor={'whitesmoke'}
                        fontSize={{ base: "2xl", lg: "3xl" }}
                        py="3"
                      >
                        {card.heading2}
                      </Heading>
                      <Heading
                        textAlign={"left"}
                        textColor={'whitesmoke'}
                        py="3"
                        fontWeight={{ base: "600" }}
                        fontSize={{ base: "lg" }}
                      >
                        {card.text2}
                      </Heading>
                      <Text
                        my="5px"
                        px="1"
                        alignSelf={"justify"}
                        textAlign={"center"}
                        bg="#B4D2EF"
                        boxSize={"fit-content"}
                        textColor={"black"}
                        fontWeight={500}
                        borderRadius="3xl"
                      >
                        Duration:13 Weeks
                      </Text>
                      <Text
                        py="5"
                        textAlign={"left"}
                        textColor={"whiteAlpha.800"}
                      >
                        {card.desc2}
                      </Text>
                      <Button
                        mt={"20px"}
                        bgColor={"#9F28FDC2"}
                        borderRadius={"lg"}
                      >
                        Learn More
                      </Button>
                    </CardBody>
                  </Card>
                </motion.nav>
              </Stack>
            </CardBody>
          </Card>
          <Divider />
        </Box>
      ))}
    </>
  );
}
