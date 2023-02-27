import React from "react";
import { Box, Button, IconButton, Link, useDisclosure } from "@chakra-ui/react";
import { Flex, Stack } from "@chakra-ui/layout";
import { MotionConfig } from "framer-motion";
import { ArrowUpIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const [menuDisplay, changeDisplay] = useState("none");

  return (
    <Box
      as="nav"
      role="navigation"
      pos="fixed"
      w="full"
      zIndex={2}
      bgBlendMode="lighten"
    >
      <Flex
        as="header"
        justify="space-between"
        px="5px"
        borderBottom={"1px"}
        borderBottomStyle="outset"
      >
        <IconButton
          aria-label="scrollup"
          icon={<ArrowUpIcon />}
          zIndex={5}
          position="fixed"
          bottom="30"
          right={{ base: "50%", md: "50%", lg: "1%" }}
          onClick={() => window.scrollTo({ top: 10, behavior: "smooth" })}
        ></IconButton>
        <Flex>
          <MotionConfig reducedMotion="never">
            <Link as={NextLink} href="/">
              <Image
                src="/headerlogo.png"
                alt="logo"
                height={100}
                width={100}
              ></Image>
            </Link>
          </MotionConfig>
        </Flex>

        <Stack
          display={{ base: "none", md: "flex", lg: "flex" }}
          align={"center"}
          direction={{ md: "row", lg: "row" }}
          fontSize={{ base: 16, md: 16, lg: 24 }}
          spacing={{ md: "12px", lg: "20px" }}
        >
          <Link as={NextLink} href="/">
            <Button
              variant={"ghost"}
              color="whitesmoke"
              size={{ md: "sm" }}
              onClick={() => window.scrollTo({ top: 10, behavior: "smooth" })}
            >
              Home
            </Button>
          </Link>

          <Link>
            <Button
              size={{ md: "sm" }}
              variant={"ghost"}
              color="whitesmoke"
              onClick={() => window.scrollTo({ top: 1700, behavior: "smooth" })}
            >
              Courses
            </Button>
          </Link>

          <Link as={NextLink} href="https://portal.piaic.org/signup" isExternal>
            <Button size={{ md: "sm" }} variant={"ghost"} color="whitesmoke">
              Enroll Now
            </Button>
          </Link>
        </Stack>

        <Flex align="center">
          <IconButton
            display={{ base: "flex", md: "none", lg: "none" }}
            size={{ base: "sm" }}
            variant="ghost"
            aria-label="menu"
            color="whitesmoke"
            position="fixed"
            top="5"
            right={"0"}
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon onClick={() => changeDisplay("none")} />
              ) : (
                <HamburgerIcon onClick={() => changeDisplay("flex")} />
              )
            }
          ></IconButton>
        </Flex>

        {/*mobileview*/}

        <Flex display={{ base: menuDisplay }}>
          <Stack
            direction={{ base: "column", md: "row", lg: "row" }}
            fontSize={{ base: 16, md: 16, lg: 24 }}
            position={"relative"}
            top="5"
            right={"20"}
          >
            <Link as={NextLink} href="/">
              <Button
                color="whitesmoke"
                size={{ base: "sm" }}
                variant={"ghost"}
                onClick={() => window.scrollTo({ top: 10, behavior: "smooth" })}
              >
                Home
              </Button>
            </Link>

            <Link>
              <Button
                color="whitesmoke"
                variant={"ghost"}
                size={{ base: "sm" }}
                onClick={() =>
                  window.scrollTo({ top: 700, behavior: "smooth" })
                }
              >
                Courses
              </Button>
            </Link>

            <Link
              as={NextLink}
              href="https://portal.piaic.org/signup"
              isExternal
            >
              <Button
                variant={"ghost"}
                size={{ base: "sm" }}
                color="whitesmoke"
              >
                Enroll Now
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
