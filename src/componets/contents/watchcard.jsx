import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

const WatchCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="../img/thor.webp" />
          <Card.Body>
            <Card.Title> Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Play</Button>
            <hr className='text-light' />
          </Card.Body>
        </Card>
      );
    }
export default WatchCard
