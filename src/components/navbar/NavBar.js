import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavLink to="/" style={{"color": 'white', "fontSize": 'x-large'}}>
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                {/*<Navbar.Brand href="#home" style={{"color": 'white'}}>
                    <FontAwesomeIcon icon={faHome}/>
                </Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '300px'}} navbarScroll>
                        <NavLink className="nav-link" to="/orders">Orders</NavLink>
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                        <NavLink className="nav-link" to="/components">Components</NavLink>
                        <NavLink className="nav-link" to="/storage">Storage</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2" disabled>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;