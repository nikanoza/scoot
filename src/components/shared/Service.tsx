import { Box, Button, Typography } from "@mui/material";

type PropsType = {
  image: string;
  title: string;
  description: string;
};

const Service: React.FC<PropsType> = ({ image, title, description }) => {
  return (
    <>
      <Box
        width="100%"
        sx={{ width: { xs: "100%", sm: "335px", md: "445px" } }}
      >
        <img
          src={image}
          alt="poster"
          style={{ width: "100%", borderRadius: "50%" }}
        />
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
          letterSpacing="-1.43px"
          mt="56px"
          color="#495567"
          sx={{
            width: { sm: "457px" },
            fontSize: { xs: "32px", sm: "48px" },
            lineHeight: { xs: "32px", sm: "48px" },
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
          mt="32px"
          color="#939CAA"
          sx={{ textAlign: { xs: "center", lg: "left" } }}
        >
          {description}
        </Typography>
        <Button
          sx={{
            backgroundColor: "#FCB72B",
            color: "white",
            width: "192px",
            mt: "32px",
            mr: { xs: 0, lg: "auto" },
          }}
        >
          Learn More
        </Button>
      </Box>
    </>
  );
};

export default Service;
