import "./navLinks.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Categories = () => {


  return (
    <>
      <Nav.Link as={Link} to="/">
        Catalogo
      </Nav.Link>
      <NavDropdown title="Categorías" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/categories/smartphones">
          Telefonos
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/notebooks">
          Notebooks
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/consolas">
          Consolas
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/televisores">
          Televisores
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/categories/perifericos">
          Otros
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Categories;
