import { Box, Button, Typography } from "@mui/material";

type PropsType = {
  image: string;
  title: string;
  description: string;
};

const Service: React.FC<PropsType> = ({ image, title, description }) => {
  return (
    <>
      <Box width="100%">
        <img
          src={image}
          alt="poster"
          style={{ width: "100%", borderRadius: "50%" }}
        />
      </Box>
      <Typography
        component="h2"
        fontFamily="Space Mono"
        fontWeight={700}
        fontSize="32px"
        lineHeight="32px"
        letterSpacing="-1.43px"
        textAlign="center"
        mt="56px"
        color="#495567"
      >
        {title}
      </Typography>
      <Typography
        paragraph={true}
        fontFamily="Lexend Deca"
        fontWeight={400}
        fontSize="15px"
        lineHeight="25px"
        textAlign="center"
        mt="32px"
        color="#939CAA"
      >
        {description}
      </Typography>
      <Button
        sx={{
          backgroundColor: "#FCB72B",
          color: "white",
          width: "192px",
          mt: "32px",
        }}
      >
        Learn More
      </Button>
    </>
  );
};

export default Service;
