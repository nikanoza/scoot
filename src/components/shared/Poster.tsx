import { Box, Typography } from "@mui/material";

type PropsType = {
  mobileBg: string;
  tabletBg: string;
  desktopBg: string;
  title: string;
};

const Poster: React.FC<PropsType> = ({
  mobileBg,
  tabletBg,
  desktopBg,
  title,
}) => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: { xs: "160px" },
        backgroundImage: {
          xs: `url(${mobileBg})`,
          sm: `url(${tabletBg})`,
          lg: `url(${desktopBg})`,
        },
      }}
    >
      <Typography
        component="h1"
        fontFamily="Space Mono"
        fontWeight={700}
        letterSpacing="-1.79px"
        color="#ffffff"
        sx={{
          fontSize: { xs: "40px", sm: "40px" },
          lineHeight: { xs: "32px", sm: "48px" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Poster;
