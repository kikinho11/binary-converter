import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import '../style/Converter.css';

export default function Converter()
{

    const [userInput, setUserInput] = useState("0");
    const [binaryEquivalent, setBinaryEquivalent] = useState("0");

    function convertToBinary()
    {

        if (isNaN(userInput))
        {
            alert("Insert a valid number");
            setBinaryEquivalent("0");
            setUserInput("0");
            return;
        }

        var binaryNumber = Number(userInput).toString(2)
        setBinaryEquivalent(binaryNumber);
    }

    return (
        <Container fluid>
            <Row className="converterRow text-center">
                <Col>
                    <form>
                        <h5>Enter decimal number</h5>
                        <input
                            name="decimal number imput"
                            placeholder="Enter a Decimal Number"
                            autoComplete="off"
                            maxLength="16"
                            value={userInput}
                            onChange={ (element) => setUserInput(element.target.value) }
                        />
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={ () => convertToBinary() }
                        >
                            
                            To Binary
                        </button>
                    </form>
                </Col>
            </Row>

            <div className="separator"></div>

            <Row className="text-center">
                <Col>
                    <h5>Binary Equivalent </h5>
                    <h5>{binaryEquivalent}</h5>
                </Col>
            </Row>

            <div className="separator"></div>
        </Container>
    );
}