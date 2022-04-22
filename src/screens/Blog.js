import React from "react";
import './Blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import blogimg from '../blogimg1.png'

export default function Blog(){
    return(
        <div className="BlogPage"> 
            <Container fluid>
                <Row>
                    <Col md="1">All Posts</Col>
                    <Col md="9"></Col>
                </Row>
            </Container>
            <Post 
                image={blogimg} 
                title="Stay Fit and Comitted by finding an activity you enjoy"
                desc="To create and manage your own content, open the Blog Manager by hovering over your blog feed and clicking Manage. Here you can create..."/>
            <br />
            <Post 
                image={blogimg}
                title="test"
                desc="test desc"/>
        </div>
    );
}

function Post(props) {
    return (
        <Container fluid className="postBox">
            <Row>
                <Col md="4">
                    <img className="postImage" src={props.image} align="left"/>
                </Col>
                <Col className="postInformation" md="8">
                    <h3 className="postTitle">{props.title}</h3>
                    <div className="postDescription">{props.desc}</div>
                    <hr className="postBreak"/>
                </Col>
            </Row>
        </Container>
    )
}