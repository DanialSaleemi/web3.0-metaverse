import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import NextLink from "next/link";

// Settings for the slider

const basesettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1400,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const mdsettings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1400,
  slidesToShow: 1.5,
  slidesToScroll: 1,
};
const lgsettings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1400,
  slidesToShow: 2.25,
  slidesToScroll: 1,
};
export default function CCCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Quarter I (CC)",
      text: "We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 ....",
      image: "/cc1.svg",
      //  'https://images.unsplash.com/photo-1620120966883-d977b57a96ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      text2: `\n CS-101: Object Oriented Programming using TypeScript \n\n`,
    },
    {
      title: "Quarter II (CC)",
      text: "The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. ...",
      image: "/cc2.svg",
      //    'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      text2: `W2-201: Planet-scale Web2.0 Serverless Apps & APIs using NextJS 13 and Cloud Development Kit for Terraform`,
    },
    {
      title: "Quarter III (BC)",
      text: "In this course, you will be tasked with building APIs and a template to be sold on the Panaverse DAO Marketplace and Theme Forest. The Panaverse DAO will receive 25% of the sale  ...",
      image: "/bc3.svg",
      //  image:
      // {/*   'https://images.unsplash.com/photo-1514899722939-1834d78cb09f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
      //  */}
      text2: `\n $-301: Dollar making bootcamp - Full-Stack Template & API Product Development \n`,
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"auto"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...basesettings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box key={index} height="800px" position="relative">
            {/* This is the block you need to change, to customize the caption */}

            <Container
              size="container.lg"
              objectFit={"fill"}
              height={{ base: "650px", lg: "750px" }}
              position="relative"
              borderRadius={"3xl"}
              bgGradient={"linear(to-tl, #161516, #D80661, #1D1D1A)"}
            >
              <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
                <Stack
                  spacing={"6"}
                  w={"full"}
                  maxW={"lg"}
                  position="relative"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    textAlign={"center"}
                    textColor={'whitesmoke'}
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  >
                    {card.title}
                  </Heading>
                  <Container
                    position="relative"
                    maxW="550"
                    maxH="200px"
                    height="200px"
                    bgImage={card.image}
                    bgSize={"cover"}
                    bgRepeat={"no-repeat"}
                    bgPosition="fit"
                  ></Container>
                  <Heading
                    whiteSpace={"break-spaces"}
                    textAlign={{ base: "unset", lg: "left" }}
                    textColor={'whitesmoke'}
                    fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
                  >
                    {card.text2}
                  </Heading>
                  <Text
                    px="5px"
                    alignSelf={"center"}
                    textAlign={"justify"}
                    bg="#B4D2EF"
                    textColor={"black"}
                    fontWeight={500}
                    borderRadius="3xl"
                  >
                    Duration:13 Weeks
                  </Text>
                  <Text
                    px="10px"
                    textAlign={"justify"}
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    textColor='whiteAlpha.800'
                  >
                    {card.text}
                  </Text>
                  <Button
                    bgColor={"#9F28FDC2"}
                    alignSelf="center"
                    borderRadius={"lg"}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Link>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
