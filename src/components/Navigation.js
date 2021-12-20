import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					Task-Manager
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto ">
						<Nav.Link as={NavLink} to="/projects">
							Projectos
						</Nav.Link>
						<NavDropdown title="Admin" id="collasible-nav-dropdown">
							<NavDropdown.Item as={NavLink} to="/admin/users">
								Usuarios
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link as={NavLink} to="/login">
							Iniciar Sesion
						</Nav.Link>
						<Nav.Link as={NavLink} to="/register">
							Registrarse
						</Nav.Link>
						<Nav.Link as={NavLink} to="/account">
							Mi cuenta
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
