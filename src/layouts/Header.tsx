import {
  AppBar,
  Box,
  Button,
  List,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "../svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }} width="100%">
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{
            padding: {
              xs: 0,
              sm: "0 40px",
              md: "20px 100px",
              lg: "30px 145px",
            },
          }}
        >
          <Button
            disableElevation={true}
            sx={{
              padding: 0,
              marginLeft: "16px",
              width: "20px",
              height: "16px",
              display: { sm: "none" },
            }}
            style={{
              border: "none",
              outline: "none",
            }}
            onClick={handleClick}
          >
            {!anchorEl ? (
              <MenuIcon sx={{ color: "#FCB72B", padding: 0 }} />
            ) : (
              <Close sx={{ color: "#FCB72B", padding: 0 }} />
            )}
          </Button>
          <Box
            sx={{
              margin: { xs: "auto", sm: 0 },
              transform: { xs: "translateX(-50%)", sm: "translateX(0)" },
            }}
            children={
              <Link to="/home">
                <Logo color="#495567" />
              </Link>
            }
          ></Box>
          <List
            sx={{
              listStyle: "none",
              display: { xs: "none", sm: "flex" },
              columnGap: "32px",
              ml: { xs: "28.18px", md: "58.18px" },
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
          <Button
            sx={{
              backgroundColor: "#FCB72B",
              color: "white",
              display: { xs: "none", sm: "block" },
              ml: "auto",
              width: { md: "192px" },
            }}
          >
            Get Scootin
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          marginTop: "16px",
        }}
      >
        <MenuList>
          <MenuItem onClick={handleClose}>
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "#939CAA",
                fontSize: "15px",
                lineHeight: "25px",
                fontFamily: "Space Mono",
                fontWeight: 700,
              }}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
              careers
            </Link>
          </MenuItem>
        </MenuList>
        <Button
          sx={{ backgroundColor: "#FCB72B", color: "white", width: "192px" }}
        >
          Get Scootin
        </Button>
      </Menu>
    </Box>
  );
};

export default Header;
