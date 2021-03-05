import { Container, Row, Col } from 'react-bootstrap';
import '../style/SideBar.css';

export default function SideBar()
{
    return(
        <Container fluid className="sidebarContainer">
            <Row className="sidebarTitle">
                <h4>Binary Converter</h4>
            </Row>

            <Row className="sidebarItem">
                <a href="/" >Home </a>
            </Row>

            <Row className="sidebarItem">
                <a href="/converter" >Converter </a>
            </Row>
        </Container>
    );
}