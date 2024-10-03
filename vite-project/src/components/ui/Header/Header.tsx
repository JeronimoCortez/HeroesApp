import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../redux/hooks/redux";
import { setLogout } from "../../../redux/slice/auth";

export const Header = () => {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setLogout())
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          <Link to={"/"} className="nav-link">Inicio</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Item>
              <Link to={"/search"} className="nav-link">Buscar heroe</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/dcHeroes"} className="nav-link">DC Heores</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={"/marvelHeroes"} className="nav-link">Marvel Heroes</Link>
            </Nav.Item>
          </Nav>
          <Navbar.Collapse className="justify-content-end gap-2">
            <Navbar.Text>
              Ingresado como: Admin
            </Navbar.Text>
            <Nav.Item>
              <div onClick={handleLogout} className="d-flex justify-content-center align-items-center">
              <span style={{color:"#fff", cursor: "pointer"}}      className="material-symbols-outlined">
              logout  
              </span>
              </div>
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

