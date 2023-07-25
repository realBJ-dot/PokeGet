import { Navbar, Container, Nav } from "react-bootstrap"
export const NavgBar = () => {
    return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pokemon</Navbar.Brand>
        </Container>
      </Navbar>
    )
}