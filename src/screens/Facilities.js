import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import './Facilities.css';
import ping_pong from './facility-pics/ping_pong.jpg'

export default function Reserve() {
    return (
        <>
            <h1>
                Facilities Screen
            </h1>
            <Container class="facility-container">
                <Row>
                    <Col class="facility-col">
                        <Row class="facility-row">
                            <Col sm={4} className='ping-pong'>
                                <img src={ping_pong}></img>
                            </Col>
                            <Col sm={8}>
                                <h3>Clubhouse</h3>
                                <h4>LET'S GET TOGETHER</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Col class="facility-col">
                        <Row class="facility-row">
                            <Col sm={4}>
                                <img></img>
                            </Col>
                            <Col sm={8}>
                                <h3>Swimming Pool</h3>
                                <h4>READY TO HOST</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col class="facility-col">
                        <Row class="facility-row">
                            <Col sm={4}>
                                <img></img></Col>
                            <Col sm={8}>
                                <h3>GYM</h3>
                                <h4>LET'S HAVE SOME FUN</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    );
}