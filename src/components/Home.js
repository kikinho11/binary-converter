import { Container, Row, Col } from 'react-bootstrap';

export default function Home()
{
    return (
        <Container fluid>
            <Row>
                <Col className="text-center" style={{ marginTop: "330px" }}>
                <h3>App created in ESLFB React</h3>
                </Col>
            </Row>
        </Container>
    );
}