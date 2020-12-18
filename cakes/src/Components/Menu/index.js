import {Navbar, nav, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import './Menu.css';

 function BaseMenu(props){
     const {location }= props;
    return(
       <Navbar ClassName="navbar-dark"  bg="success" expand="lg" fixed="top">
          <Navbar.Brand>
          cakes lojas de bolo
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} ClassName="ml-auto-mr mr-3">
                    <Nav.Item>
                        <Nav.Link as ={Link} href="/" to="/pginicial">Pagina inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as ={Link} href="/" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as ={Link} href="/" to="/Pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

       </Navbar>


    )
}
const Menu= withRouter(BaseMenu);
export default Menu;