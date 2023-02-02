import { Box } from "@mui/material";
import { Service } from "../../components/shared";
import { NearYou, Payments, Telemetry } from "../../assets";
import { LeftDownwardArrow, LeftUpwardArrow, RightArrow } from "../../svg";

const Services = () => {
  return (
    <Box width="100%" mt="120px" sx={{ padding: { xs: 0, xl: "0 165px" } }}>
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
          btnText="Learn More"
          image={Telemetry}
          title="Easy to use riding telemetry"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        position="relative"
        mt="120px"
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "flex-start", lg: "flex-end" },
          columnGap: { xs: 0, lg: "30px" },
        }}
      >
        <Box
          position="absolute"
          top="0"
          sx={{ left: { xs: "-200px", lg: "-100px", xl: "-265px" } }}
        >
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
          btnText="Learn More"
          image={NearYou}
          title="Coming to a city near you"
          description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        position="relative"
        mt="120px"
        sx={{
          flexDirection: { xs: "column", lg: "row-reverse" },
          justifyContent: { xs: "flex-start", lg: "flex-end" },
          columnGap: { xs: 0, lg: "30px" },
        }}
      >
        <Box
          position="absolute"
          sx={{
            top: { sm: "75px" },
            right: { xs: "-450px", lg: "-232px", xl: "-397px" },
          }}
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
          btnText="Learn More"
          image={Payments}
          title="Zero hassle payments"
          description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        />
      </Box>
    </Box>
  );
};

export default Services;
