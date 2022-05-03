import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import './Facilities.css';
import ping_pong from './facility-pics/ping_pong.jpg'
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'
import { width } from "@mui/system";

const MapCenter = {lat: 40.6306668, lng:-73.9687654}

export default function Reserve() {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded){
        return <h1>Not loaded!</h1>
    }
    return (
        <>
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
            <center>
                <GoogleMap center={MapCenter} zoom={15} mapContainerStyle={{width: '1000px', height: '500px'}}
                options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false
                }}>
                <Marker position={Map} />
                </GoogleMap>
            </center>
        </>
    );
}
