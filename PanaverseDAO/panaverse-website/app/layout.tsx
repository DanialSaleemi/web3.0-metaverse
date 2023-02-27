"use client";
import ChakraWrapper from "./components/chakrawrapper";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body><ChakraWrapper>
        <NavBar/>
        {children}
        <Footer/>
        </ChakraWrapper></body>
        
    </html>
  )
}
