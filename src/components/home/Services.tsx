import { Box } from "@mui/material";
import { Service } from "../../components/shared";
import { NearYou, Payments, Telemetry } from "../../assets";
import { LeftDownwardArrow, LeftUpwardArrow, RightArrow } from "../../svg";

const Services = () => {
  return (
    <Box width="100%" mt="120px">
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
      >
        <Box position="absolute" left="0" top="173px">
          <LeftDownwardArrow />
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
          image={Telemetry}
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        mt="120px"
      >
        <Box position="absolute" left="-200px" top="0">
          <RightArrow />
        </Box>
        <Box
          position="absolute"
          borderRadius="50%"
          left="-300px"
          zIndex={-1}
          sx={{
            display: { xs: "none", sm: "block" },
            width: { sm: "335px", md: "445px" },
            height: { sm: "335px", md: "445px" },
            backgroundColor: "#E5ECF4",
          }}
        ></Box>
        <Service
          image={NearYou}
          title="Coming to a city near you"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        mt="120px"
      >
        <Box
          position="absolute"
          left="120px"
          top="0"
          sx={{ top: { sm: "75px" }, left: { sm: "250px" } }}
        >
          <LeftDownwardArrow />
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
          image={Payments}
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        />
      </Box>
    </Box>
  );
};

export default Services;
