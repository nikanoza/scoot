import { Box } from "@mui/material";
import { LeftDownwardArrow, LeftUpwardArrow, RightArrow } from "../../svg";
import {
  AboutHeroDesktop,
  AboutHeroMobile,
  AboutHeroTablet,
  BetterLiving,
  DigitalEra,
} from "../../assets";
import { Poster, Service, StepsSection } from "../../components";

const About = () => {
  return (
    <Box width="100%">
      <Poster
        mobileBg={AboutHeroMobile}
        tabletBg={AboutHeroTablet}
        desktopBg={AboutHeroDesktop}
        title="About"
      />
      <Box width="100%" sx={{ mt: { xs: "72px" }, padding: { xs: "0 32px" } }}>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          position="relative"
          sx={{
            flexDirection: { xs: "column", lg: "row-reverse" },
            justifyContent: { xs: "flex-start", lg: "flex-end" },
            columnGap: { xs: 0, lg: "30px" },
          }}
        >
          <Box
            position="absolute"
            top="173px"
            sx={{
              left: { xs: 0, lg: "auto" },
              right: { xs: "auto", lg: "-32px", xl: "-197px" },
              top: { xs: "173px", lg: "330px" },
            }}
          >
            <LeftUpwardArrow />
          </Box>
          <Box
            position="absolute"
            borderRadius="50%"
            right="-300px"
            zIndex={-1}
            sx={{
              display: { xs: "none", sm: "block" },
              width: { sm: "335px", md: "445px" },
              height: { sm: "335px", md: "445px" },
              backgroundColor: "#E5ECF4",
            }}
          ></Box>
          <Service
            hiddenBtn={true}
            btnText=""
            image={DigitalEra}
            title="Mobility for the digital era"
            description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
          />
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          position="relative"
          sx={{
            flexDirection: { xs: "column", lg: "row-reverse" },
            justifyContent: { xs: "flex-start", lg: "flex-end" },
            columnGap: { xs: 0, lg: "30px" },
            mt: { xs: "120px" },
          }}
        >
          <Box
            position="absolute"
            top="173px"
            sx={{
              left: { xs: "-150px", lg: "auto" },
              top: { xs: 0, lg: "330px" },
            }}
          >
            <RightArrow />
          </Box>
          <Box
            position="absolute"
            borderRadius="50%"
            right="-300px"
            zIndex={-1}
            sx={{
              display: { xs: "none", sm: "block" },
              width: { sm: "335px", md: "445px" },
              height: { sm: "335px", md: "445px" },
              backgroundColor: "#E5ECF4",
            }}
          ></Box>
          <Service
            hiddenBtn={true}
            btnText=""
            image={BetterLiving}
            title="Better urban living"
            description="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
          />
        </Box>
        <StepsSection />
      </Box>
    </Box>
  );
};

export default About;
