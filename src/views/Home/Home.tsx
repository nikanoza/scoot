import { Box, Button, Typography } from "@mui/material";
import { RightArrow } from "../../svg";
import { HomeHeroMobile, HomeHeroTablet } from "../../assets";
import { HomeContent, Services } from "../../components";

const Home = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          padding: "115px 28px 34px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundImage: {
            xs: `url(${HomeHeroMobile})`,
            sm: `url(${HomeHeroTablet})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
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
          }}
          textAlign="center"
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
          textAlign="center"
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
          }}
        >
          Get Scootin
        </Button>
        <Box sx={{ mt: "7px", ml: "-550px" }}>
          <RightArrow />
        </Box>
      </Box>
      <Box width="100%" padding="0 32px">
        <HomeContent />
        <Services />
      </Box>
    </Box>
  );
};

export default Home;
