import { Box, Button, Typography } from "@mui/material";
import { RightArrow } from "../../svg";
import { HomeHeroDesktop, HomeHeroMobile, HomeHeroTablet } from "../../assets";
import { HomeContent, Services } from "../../components";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "115px 28px 34px 32px",
            lg: "153px 160px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", lg: "flex-start" },
          width: "100%",
          backgroundImage: {
            xs: `url(${HomeHeroMobile})`,
            sm: `url(${HomeHeroTablet})`,
            lg: `url(${HomeHeroDesktop})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: { lg: "relative" },
        }}
      >
        <Typography
          paragraph={true}
          fontFamily="Space Mono"
          fontWeight={700}
          color="white"
          letterSpacing="-1.79px"
          sx={{
            fontSize: { xs: "40px", sm: "56px" },
            lineHeight: { xs: "40px", sm: "56px" },
            width: { lg: "500px" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          Scooter sharing made simple
        </Typography>
        <Typography
          paragraph={true}
          fontFamily="Lexend Deca"
          fontWeight={400}
          fontSize="15px"
          color="white"
          lineHeight="25px"
          sx={{
            marginTop: { lg: "24px" },
            width: { lg: "405px" },
            ml: { lg: "100px" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </Typography>
        <Button
          sx={{
            fontFamily: "Space Mono",
            fontWeight: 700,
            fontSize: "15px",
            color: "white",
            lineHeight: "25px",
            letterSpacing: "-1.79px",
            textAlign: "center",
            backgroundColor: "#FCB72B",
            textTransform: "capitalize",
            width: "180px",
            mt: { xs: "20px", sm: "16px" },
            ml: { lg: "100px" },
          }}
        >
          Get Scootin
        </Button>
        <Box
          sx={{
            mt: { xs: "7px", lg: 0 },
            ml: { xs: "-550px", lg: 0 },
            position: { lg: "absolute" },
            top: { lg: "355px" },
            left: { lg: "705px" },
          }}
        >
          <RightArrow />
        </Box>
        <Box
          width="203px"
          border="7.5px solid #FCB72B"
          position="absolute"
          top="355px"
          left={0}
          sx={{
            display: { xs: "none", lg: "block" },
            backgroundColor: "#FCB72B",
          }}
        ></Box>
      </Box>
      <Box width="100%" padding="0 32px">
        <HomeContent />
        <Services />
      </Box>
    </Box>
  );
};

export default Home;
