import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import myPic from './../resources/images/my_pic.png';
import { useState, useEffect  } from 'react';

function HomeComponent() {


    const [quoteStr, setQuote] = useState();
    const [author, setAuthor] = useState();


    useEffect(() => {
        const quotes = [
            {
              quote: "Be yourself; everyone else is already taken.",
              author: "Oscar Wilde",
            },
            {
              quote: "The only way to do great work is to love what you do.",
              author: "Steve Jobs",
            },
            {
              quote: "In three words I can sum up everything I've learned about life: it goes on.",
              author: "Robert Frost",
            },
            {
              quote: "The future belongs to those who believe in the beauty of their dreams.",
              author: "Eleanor Roosevelt",
            },
            {
              quote: "You miss 100% of the shots you don't take.",
              author: "Wayne Gretzky",
            },
            {
              quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
              author: "Winston Churchill",
            },
            {
              quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
              author: "Nelson Mandela",
            },
            {
              quote: "Life is what happens when you're busy making other plans.",
              author: "John Lennon",
            },
            {
              quote: "The only limit to our realization of tomorrow will be our doubts of today.",
              author: "Franklin D. Roosevelt",
            },
            {
              quote: "Don't cry because it's over, smile because it happened.",
              author: "Dr. Seuss",
            },
          ];

        var randomQuote = Math.floor(Math.random() * Math.floor(10));
        var quoteObject = quotes[randomQuote]
        setAuthor(quoteObject['author'])
        setQuote(quoteObject['quote'])
    }, []);

    return (
        <Container className='poppin-font  mt-4'>
            <Row>
                <Col>
                    <Card>
                        <Card.Body className='text-center'>
                            <img src={myPic} alt="Logo"  style={{height:300, width:300}}/>
                            <Card.Title><h1>Srijit Bhattacharya</h1></Card.Title>
                            <hr />
                            <Card.Text>
                                <p>
                                    I'm a seasoned data scientist with expertise in 
                                    &nbsp;<span class="badge bg-dark">SQL</span>, 
                                    &nbsp;<span class="badge bg-dark">ML</span>, and 
                                    &nbsp;<span class="badge bg-dark">Data Analytics</span>. 
                                    Proficient in SQL, 
                                    I navigate databases for insights. 
                                    My machine learning skills 
                                    uncover complex patterns, 
                                    while data analytics allows me to distill large datasets into actionable intelligence. I thrive in LA's dynamic tech landscape, contributing to innovation.
                                </p>
                                <hr />
                                <h2 ><q>{quoteStr}</q></h2><p>- {author}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

        </Container>
    );
}


export default HomeComponent;

