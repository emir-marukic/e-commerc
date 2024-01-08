import LandingPage from "../Components/LandingPage/LandingPage";
import AboutPage from "../Components/AboutPage/AboutPage";
import ShopPage from "../Components/ShopPage/ShopPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/shop/:type/:productId", element: <ShopPage /> },
]);
