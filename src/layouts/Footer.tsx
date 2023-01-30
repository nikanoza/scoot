import { Box, List, Typography } from "@mui/material";
import {
  AppStore,
  Facebook,
  GooglePlay,
  Instagram,
  Logo,
  Twitter,
} from "../svg";
import { FooterMobile } from "../assets";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <Box width="100%" mt="120px">
      <Box
        width="100%"
        padding="88px 0"
        textAlign="center"
        sx={{ backgroundImage: `url(${FooterMobile})` }}
      >
        <Typography
          component="h2"
          fontFamily="Space Mono"
          fontWeight={700}
          fontSize="32px"
          lineHeight="32px"
          letterSpacing="-1.43px"
          color="white"
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
        sx={{ backgroundColor: "#333A44" }}
      >
        <Logo color="#FFFFFF" />
        <List
          sx={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
            mt: "41.44px",
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
            mt: "85px",
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
