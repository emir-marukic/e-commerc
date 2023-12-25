import "../../styles/Navbar.css";

function Navbar() {
  return (
    <div className="backgroundContainer">
      <div className="navbar">
        <div className="logo">
          <p>SyncSphere</p>
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Collection</a>
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
