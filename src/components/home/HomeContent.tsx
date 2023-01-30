import { Box, Typography } from "@mui/material";
import { Locate, Ride, Scooter } from "../../svg";

const HomeContent = () => {
  const contentHeader = (text: string) => {
    return (
      <Typography
        component="h2"
        fontFamily="Space Mono"
        fontWeight={700}
        fontSize="20px"
        lineHeight="28px"
        letterSpacing="-0.89px"
        textAlign="center"
        mt="24px"
        color="#495567"
      >
        {text}
      </Typography>
    );
  };

  const createContent = (text: string) => {
    return (
      <Typography
        paragraph={true}
        fontFamily="Lexend Deca"
        fontWeight={400}
        fontSize="15px"
        lineHeight="25px"
        textAlign="center"
        mt="24px"
        color="#939CAA"
      >
        {text}
      </Typography>
    );
  };

  return (
    <Box width="100%" mt="120px">
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection="column"
      >
        <Locate />
        {contentHeader("Locate with app")}
        {createContent(
          "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
        )}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection="column"
        mt="48px"
      >
        <Scooter />
        {contentHeader("Pick your scooter")}
        {createContent(
          "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
        )}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        flexDirection="column"
        mt="48px"
      >
        <Ride />
        {contentHeader("Enjoy the ride")}
        {createContent(
          "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
        )}
      </Box>
    </Box>
  );
};

export default HomeContent;
