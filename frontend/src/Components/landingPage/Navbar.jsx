import { Link } from "react-router-dom";
import "../../styles/styles.css";
import { useScrollContext } from "../Util/ScrollContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import logo from "../../assets/logo.png";

function Navbar() {
  const handleShopLinkClick = useScrollContext();

  return (
    <div className="backgroundContainer">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
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
              <a href="#" onClick={handleShopLinkClick}>
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="navIcons">
          <ShoppingCartOutlinedIcon />
          <AttachEmailOutlinedIcon />
          <PeopleAltOutlinedIcon />
        </div>
      </div>
      <div className="navText">
        <p>Dive into Tech World</p>
        <p>with SyncSphere</p>
      </div>
    </div>
  );
}

export default Navbar;
