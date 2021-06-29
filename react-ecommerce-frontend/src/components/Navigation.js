import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    history.push("/register");
  };

  const user = JSON.parse(localStorage.getItem("user-info"));

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">SH Fashion</Navbar.Brand>
      <Nav className="mr-auto navbar_wrapper">
        {localStorage.getItem("user-info") ? (
          <>
            <Link to="/add">Add Products</Link>
            <Link to="/update">Update Products</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </Nav>
      {localStorage.getItem("user-info") && (
        <>
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      )}
    </Navbar>
  );
};

export default Navigation;
