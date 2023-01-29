import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { Logo, MenuIcon } from "../svg";

const Header: React.FC<{
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowMenu }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ padding: 0, paddingLeft: "16px" }}
            onClick={() => setShowMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ margin: "auto" }}
            children={
              <Link to="/home">
                <Logo />
              </Link>
            }
          ></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
