import React, { useState } from 'react'
import { Container, Row, Col, Spinner, Card, Navbar, Form, FormControl } from 'react-bootstrap'

const Post = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    if (props.loading){
        return <Container className="text-center"><Spinner animation="border" variant="info" /></Container>
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md" style={{borderRadius: "0px 0px 15px 15px"}}>
                <Container>
                    <Navbar.Brand href="#">My Awesome Notebook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="search" />
                    <Navbar.Collapse id="search">
                        <Form inline style={{marginLeft: "auto"}}>
                            <FormControl type="text" placeholder="Find any of your notes..." className="mr-sm-2" style={{borderColor: "blue", width: "300px"}} onChange={(e) => {setSearchTerm(e.target.value)}} />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    {props.post.filter((keyword) => {
                     if(searchTerm === ""){
                         return keyword;
                     }else if(keyword.title.toLowerCase().includes(searchTerm.toLowerCase())){
                         return keyword;
                     }
                    }).map((data, index) => {
                        return(
                            <Col xs={12} md={4} className="mt-4">
                                <Card key={index} className="mt-4" style={{height: "100%"}}>
                                    <Card.Header>Post {data.id}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text style={{textAlign: "justify"}}>
                                            {data.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Post;