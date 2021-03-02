import { Container, Row, Col } from 'react-bootstrap';

export default function SideBar()
{
    return(
        <Container>
            <Row>
                <h4>Binary Converter</h4>
            </Row>

            <Row>
                <a href="/" >Home </a>
            </Row>

            <Row>
                <a href="/converter" >Converter </a>
            </Row>
        </Container>
    );
}