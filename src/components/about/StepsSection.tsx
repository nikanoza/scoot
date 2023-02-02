import { Box, List, Typography } from "@mui/material";
import { OurCommunity, OurIntegrity, OurTech } from "../../assets";
import Step from "../shared/Step";

const StepsSection = () => {
  return (
    <Box sx={{ mt: { xs: "120px" } }} width="100%" textAlign="center">
      <Typography
        component="h2"
        fontFamily="Space Mono"
        fontWeight={700}
        letterSpacing="-1.43px"
        color="#495567"
        sx={{
          width: { sm: "457px" },
          fontSize: { xs: "32px", sm: "48px" },
          lineHeight: { xs: "32px", sm: "48px" },
          textAlign: { xs: "center", lg: "left" },
          mb: { xs: "64px" },
        }}
      >
        Our values
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column" },
          width: "100%",
          alignItems: "center",
          rowGap: "56px",
        }}
      >
        <Step
          image={OurTech}
          title="Our tech"
          number="01"
          description="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
        />
        <Step
          image={OurIntegrity}
          title="Our integrityh"
          number="02"
          description="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
        />
        <Step
          image={OurCommunity}
          title="Our community"
          number="03"
          description="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
        />
      </List>
    </Box>
  );
};

export default StepsSection;
