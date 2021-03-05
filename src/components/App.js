import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Home from './Home';
import Converter from './Converter';
import SideBar from './SideBar';

export default function App()
{
    return (

        <Container fluid>
            <Row>
                <Col lg="2" md="2" sm="6" xa="6">
                    <SideBar/>
                </Col>
                <Col lg="10" md="10" sm="6" xs="6">
                    <BrowserRouter>
                        <Switch>

                            <Route exact path="/" component={ Home } />
                            <Route exact path="/converter" component={ Converter } />

                            <Route>
                                <Redirect to='/' />
                            </Route>

                        </Switch>
                    </BrowserRouter>
                </Col>
            </Row>
        </Container>
    );
}