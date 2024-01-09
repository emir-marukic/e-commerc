import { Link } from "react-router-dom";
import "../../styles/styles.css";
import { useScrollContext } from "../Util/ScrollContext";

function Navbar() {
  const handleShopLinkClick = useScrollContext();

  return (
    <div className="backgroundContainer">
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
              <a href="#" onClick={handleShopLinkClick}>
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="navIcons">
          <p>/</p>
          <p>/</p>
          <p>/</p>
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
