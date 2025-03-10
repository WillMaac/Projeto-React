import { Nav } from "./Headers.styles";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Headers() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/asdsd">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}

export default Headers;
