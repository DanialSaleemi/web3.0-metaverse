
import {
  Box,
  chakra,
  Container,
  Divider,
  Stack,
  Text,
  VisuallyHidden,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaFacebook, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
import NextLink from "next/link";


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target = {"_blank"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {  
  const coursenames= [
    {
      cn: "Web 3.0 (Blockchain) and Metaverse"
    },
    {
      cn: "Artificial Intelligence & Deep Learning"
    },
    {
      cn: "Ambient Computing & IoT"
    },
    {
      cn: "Cloud Native Computing"
    },
    {
      cn: "Genomics & BioInformatics"
    },
    {
      cn: "Network Programmability & Automation"
    }
  ]
  return (
    <Box

    bgGradient={'linear(to-tl, #000000, #540225E5 90%, #000000)'}
>

    
      <Container
        as={Stack}
        textColor="whitesmoke"
        maxW={"auto"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        bgBlendMode = "screen"
      >
        
        <Stack direction={'column'} maxW='300px' spacing={8}>
          <Text fontWeight={'800'}>
            About
          </Text>
          <Divider display={{base:"flex", md:'none', lg: 'none'}} />
          <Text>
            Panaverse DAO is a teaching organization with an aim to train Web 3.0 & Metaverse Developers and  to create products using these cutting-edge technologies
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"https://twitter.com/Panaverse_edu"} >
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"https://www.facebook.com/groups/panaverse/"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Github"} href={"https://github.com/panaverse"}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"https://www.youtube.com/@panaverse"}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Stack>        
        <Divider display={{base:'none'}} orientation="vertical" height={200} size='xl'/>
        <Stack display={{base:'none', md:'flex', lg:'flex'}} direction={'column'} maxW='300px'>        
          <Text fontWeight={'800'}>
            Courses
          </Text>                    
          <SimpleGrid spacingY={3}>
          {coursenames.map((a,index) => (
            <Text key={index}>{a.cn}</Text>
            ))}
          </SimpleGrid>
        </Stack>

        <Divider display={{base:'none'}} orientation="vertical" height={200} size='xl'/>

        <Stack direction={'column'} maxW='300px'>
          <Text fontWeight={'800'} pb={6}>
            Useful Links
          </Text>        
          
          <SimpleGrid spacingY={3}>
            <Link as= {NextLink} href='/' onClick={() => window.scrollTo({ top: 1700, behavior: "smooth" })}>
              Core Courses
            </Link>
            <Link as= {NextLink} href='https://portal.piaic.org/signup' isExternal>
              Admission Website (PIAIC)
            </Link>
            <Link as= {NextLink} href='https://github.com/panaverse' isExternal>
              GitHub
            </Link>
            <Divider/>
            <Text>
            © 2023 Panaverse DAO. All rights reserved 
            </Text>
          </SimpleGrid>        
        </Stack>
      </Container>
    </Box>
  );
}