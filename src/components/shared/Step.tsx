import { Box, Typography } from "@mui/material";

type PropsType = {
  image: string;
  title: string;
  description: string;
  number: string;
};

const Step: React.FC<PropsType> = ({ image, title, description, number }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box
        width="100%"
        sx={{ width: { xs: "240px", sm: "335px", md: "445px" } }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <img
          src={image}
          alt="poster"
          style={{ width: "100%", borderRadius: "50%" }}
        />
        <Box
          borderRadius="50%"
          fontFamily="Space Mono"
          fontWeight={700}
          letterSpacing="-1.07px"
          color="#495567"
          sx={{
            width: { xs: "96px" },
            height: { xs: "96px" },
            backgroundColor: "#FCB72B",
            fontSize: { xs: "24px", sm: "28px" },
            lineHeight: { xs: "28px", sm: "48px" },
            textAlign: { xs: "center", lg: "left" },
            mt: { xs: "-48px" },
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {number}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: { xs: "100%", lg: "445px" } }}
      >
        <Typography
          component="h2"
          fontFamily="Space Mono"
          fontWeight={700}
          letterSpacing="-1.07px"
          mt="16px"
          color="#495567"
          sx={{
            width: { sm: "457px" },
            fontSize: { xs: "24px", sm: "28px" },
            lineHeight: { xs: "28px", sm: "48px" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          {title}
        </Typography>
        <Typography
          paragraph={true}
          fontFamily="Lexend Deca"
          fontWeight={400}
          fontSize="15px"
          lineHeight="25px"
          mt="27px"
          color="#939CAA"
          sx={{ textAlign: { xs: "center", lg: "left" } }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Step;
