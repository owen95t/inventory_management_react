import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <>
            <Navbar fixed='top' className='bg-light'>
                <Navbar.Brand as={Link} to='/'>Inventory Management</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                    <Nav.Link as={Link} to='/transfers'>Transfers</Nav.Link>
                    <Nav.Link as={Link} to='/orders'>Customer Orders</Nav.Link>
                </Nav>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Navbar.Text>Right Aligned</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation