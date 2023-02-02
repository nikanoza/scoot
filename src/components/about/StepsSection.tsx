import { Box, Typography } from "@mui/material";
import { Step } from "components/shared";

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
      <Step />
    </Box>
  );
};

export default StepsSection;
