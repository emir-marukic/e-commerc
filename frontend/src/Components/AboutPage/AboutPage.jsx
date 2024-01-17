import { Link } from "react-router-dom";
import Content from "../LandingPage/Content";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import JoinUs from "./JoinUs";
import AboutFooter from "./AboutFooter";
import { AboutIcons } from "./AboutIcons";
import { scrollUp } from "../Util/ScrollUp";
import { useScrollContext } from "../Util/ScrollContext";

function AboutPage() {
  const handleShopLinkClick = useScrollContext();

  console.log("AboutPage handleShopLinkClick", handleShopLinkClick);

  scrollUp();

  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <b>SyncSphere</b>
          </div>
          <div className="navLinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={(e) => handleShopLinkClick(e.target)}
                  data-scroll-to="tabContainer"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="navIcons">
            <ShoppingCartOutlinedIcon />
            <AttachEmailOutlinedIcon />
            <PeopleAltOutlinedIcon />
          </div>
        </div>
      </div>
      <Content
        text={
          "Welcome to SyncSphere, where innovation meets convenience in the world of eCommerce technology. We are passionate about redefining the online shopping experience by leveraging cutting-edge technology to empower businesses and delight customers."
        }
        img="https://i.pinimg.com/236x/43/f4/43/43f4438fa5f18d33c2c56adecdf3555d.jpg"
        header="About Us"
      />
      <Content
        classN="reverse"
        header="Our mission"
        img="https://i.pinimg.com/236x/dc/ac/4a/dcac4abae729f2aa3921d4c23736ab87.jpg"
        text="At SyncSphere, our mission is to transform the way people connect, engage, and transact online. We strive to be at the forefront of eCommerce technology, providing solutions that enhance efficiency, drive growth, and elevate the digital shopping landscape."
      />
      <JoinUs />
      <AboutFooter />
      <AboutIcons />
    </div>
  );
}

export default AboutPage;
