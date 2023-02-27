"use client";
import CCCarousel from "./components/CCoursecarousel";
import LandingPage from "./components/landingpage";
import { Box } from "@chakra-ui/react";
import Specializations from "./components/specializedtracks";

export default function Home() {
  return (
    <>
      <Box overflow='clip' bgGradient={"radial(rgba(0,0,0,1), rgba(84,2,37,1), rgba(0,0,0,1))"}>
        <LandingPage />
        <CCCarousel />
        <Specializations />
      </Box>
    </>
  );
}
