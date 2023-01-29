import {
  lazy,
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  RouterProvider,
} from "@tanstack/react-router";
import { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "./layouts";

const rootRoute = new RootRoute({
  component: () => {
    const [showMenu, setShowMenu] = useState<boolean>(true);

    return (
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <Header setShowMenu={setShowMenu} />
        <Outlet />
      </Box>
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

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazy(() => import("./views/About")),
});

const careersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: lazy(() => import("./views/Careers")),
});

const locationsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/locations",
  component: lazy(() => import("./views/Locations")),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  aboutRoute,
  careersRoute,
  locationsRoute,
]);
const router = new ReactRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
