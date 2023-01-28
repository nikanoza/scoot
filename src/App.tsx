import { Outlet, RootRoute, Route } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "@mui/material";

const rootRoute = new RootRoute({
  component: () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
      <>
        <Menu open={showMenu} />
        <Outlet />
      </>
    );
  },
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <></>,
});

function App() {
  return <div className="App"></div>;
}

export default App;
