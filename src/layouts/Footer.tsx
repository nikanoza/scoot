import { Box, List, Typography } from "@mui/material";
import {
  AppStore,
  Facebook,
  GooglePlay,
  Instagram,
  Logo,
  Twitter,
} from "../svg";
import { FooterMobile, FooterTablet } from "../assets";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <Box width="100%" mt="120px">
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          backgroundImage: {
            xs: `url(${FooterMobile})`,
            sm: `url(${FooterTablet})`,
          },
          padding: { xs: "88px 0", sm: "62px 0" },
        }}
      >
        <Typography
          component="h2"
          fontFamily="Space Mono"
          fontWeight={700}
          letterSpacing="-1.43px"
          textAlign="center"
          color="white"
          sx={{
            fontSize: { xs: "32px", sm: "48px" },
            lineHeight: { xs: "32px", sm: "48px" },
            width: { sm: "457px" },
          }}
        >
          Sign up and Scoot off today
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="40px"
          columnGap="12px"
        >
          <AppStore />
          <GooglePlay />
        </Box>
      </Box>
      <Box
        width="100%"
        padding="64px 0 88px 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: "#333A44",
          flexDirection: { sm: "row" },
          columnGap: { sm: "20px" },
          padding: { sm: "35px 40px" },
        }}
      >
        <Box
          children={
            <Link to="/home">
              <Logo color="#FFFFFF" />
            </Link>
          }
        ></Box>
        <List
          sx={{
            listStyle: "none",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            rowGap: "16px",
            columnGap: "32px",
            mt: { xs: "41.44px", sm: 0 },
            textAlign: "center",
          }}
        >
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#939CAA",
              fontSize: "15px",
              lineHeight: "25px",
              fontFamily: "Space Mono",
              fontWeight: 700,
            }}
          >
            About
          </Link>
          <Link
            to="/locations"
            style={{
              textDecoration: "none",
              color: "#939CAA",
              fontSize: "15px",
              lineHeight: "25px",
              fontFamily: "Space Mono",
              fontWeight: 700,
            }}
          >
            Locations
          </Link>
          <Link
            to="/careers"
            style={{
              textDecoration: "none",
              color: "#939CAA",
              fontSize: "15px",
              lineHeight: "25px",
              fontFamily: "Space Mono",
              fontWeight: 700,
            }}
          >
            Careers
          </Link>
        </List>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "24px",
            mt: { xs: "85px", sm: 0 },
          }}
        >
          <Facebook />
          <Twitter />
          <Instagram />
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
