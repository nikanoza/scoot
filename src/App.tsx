import {
  lazy,
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  RouterProvider,
} from "@tanstack/react-router";
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
  onLoad: () => {
    router.navigate({ replace: true, to: "/home" });
  },
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: lazy(() => import("./views/Home")),
});

const routeTree = rootRoute.addChildren([indexRoute, homeRoute]);
const router = new ReactRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
