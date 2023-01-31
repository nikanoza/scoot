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
        sx={{
          textAlign: { xs: "center", sm: "left" },
          mt: { xs: "24px", sm: 0 },
        }}
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
        sx={{ textAlign: { xs: "center", sm: "left" } }}
        mt="24px"
        color="#939CAA"
      >
        {text}
      </Typography>
    );
  };

  return (
    <Box
      width="100%"
      mt="120px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        display="flex"
        columnGap="40px"
        position="relative"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "center" },
          alignItems: { xs: "center", sm: "start" },
          width: { xs: "100%", sm: "fit-content" },
        }}
      >
        <Box
          sx={{ display: { xs: "none", sm: "block" } }}
          position="absolute"
          border="15px solid #E5ECF4"
          height="512px"
          zIndex={-1}
          left="35px"
          top="-120px"
        ></Box>
        <Locate />
        <Box sx={{ width: { sm: "398px" } }}>
          {contentHeader("Locate with app")}
          {createContent(
            "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        columnGap="40px"
        width="100%"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "center" },
          alignItems: { xs: "center", sm: "start" },
          mt: { xs: "48px", sm: "40px" },
        }}
      >
        <Scooter />
        <Box sx={{ width: { sm: "398px" } }}>
          {contentHeader("Pick your scooter")}
          {createContent(
            "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        columnGap="40px"
        width="100%"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "center" },
          alignItems: { xs: "center", sm: "start" },
          mt: { xs: "48px", sm: "40px" },
        }}
      >
        <Ride />
        <Box sx={{ width: { sm: "398px" } }}>
          {contentHeader("Enjoy the ride")}
          {createContent(
            "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContent;
