import React from "react";
import './PlansPricing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

export default function PlansPricing() {
    return (
        <div className="PlansPricing Page">
            <h1 class="pricing-title">
                Choose your pricing plan
            </h1>

            <Container class="wrapper">
                <Row>
                    <Col>
                        <div class="up-box">
                            <h3>Beginner</h3>
                            <h1>$15</h1>
                            <p><br></br>
                                Explore the basics with this <br></br>introductory course</p>
                            <h6>Valid of 3 months</h6>
                            <button>Select</button>
                        </div>
                        <div class="down-box">
                            <ul>6 classes</ul>
                            <ul>3 individual sessions</ul>
                            <ul>Online resources</ul>
                        </div>
                    </Col>
                    <Col>
                        <div class="up-box">
                            <h3>Pro</h3>
                            <h1>$10</h1>
                            <p>Every month <br></br>
                                Perfect for creatives, freelancers, and <br></br>
                                experienced
                            </p>
                            <h6>Valid of 12 months</h6>
                            <button>Select</button>
                        </div>
                        <div class="down-box">
                            <ul>6 classes</ul>
                            <ul>3 individual sessions</ul>
                            <ul>Online resources</ul>
                            <ul>1 guest pass</ul>
                            <ul>Free WiFi</ul>
                            <ul>Weekly newsletter</ul>
                        </div>
                    </Col>
                    <Col>
                        <div class="up-box">
                            <h3>VIP</h3>
                            <h1>$10</h1>
                            <p>Every month <br></br>
                                Unlimited access to professional
                                <br></br>content
                            </p>
                            <h6>Valid of 12 months</h6>
                            <button>Select</button>
                        </div>
                        <div class="down-box">
                            <ul>6 classes</ul>
                            <ul>3 individual sessions</ul>
                            <ul>Online resources</ul>
                            <ul>1 guest pass</ul>
                            <ul>Free WiFi</ul>
                            <ul>Weekly newsletter</ul>
                            <ul>Priority Support</ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}