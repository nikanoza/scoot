import {
  lazy,
  Outlet,
  ReactRouter,
  RootRoute,
  Route,
  RouterProvider,
} from "@tanstack/react-router";
import { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Footer, Header } from "./layouts";

const rootRoute = new RootRoute({
  component: () => {
    return (
      <Box width="100vw" height="100vh" sx={{ overflowX: "hidden" }}>
        <Header />
        <Outlet />
        <Footer />
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

const theme = createTheme({
  typography: {
    fontFamily: ["Lexend Deca", "Space Mono"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
