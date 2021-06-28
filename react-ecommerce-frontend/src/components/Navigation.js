import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">SH Fashion</Navbar.Brand>
      <Nav className="mr-auto navbar_wrapper">
        <Link to="/add">Add Products</Link>
        <Link to="/update">Update Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
