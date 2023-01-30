import {
  AppBar,
  Box,
  Button,
  IconButton,
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ padding: 0 }}>
          <Button
            disableElevation={true}
            sx={{
              padding: 0,
              marginLeft: "16px",
              width: "20px",
              height: "16px",
              display: { md: "none" },
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
              margin: { xs: "auto", md: 0 },
              transform: { xs: "translateX(-50%)", md: "translateX(0)" },
            }}
            children={
              <Link to="/home">
                <Logo color="#495567" />
              </Link>
            }
          ></Box>
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
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Careers</MenuItem>
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
