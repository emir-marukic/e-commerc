import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ShopPage from "./Components/ShopPage/ShopPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/shop", element: <ShopPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
