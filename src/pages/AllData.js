import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { Card, ListGroup } from 'react-bootstrap';
import Des from '../components/Des';
import Name from '../components/Name'; // Update the path
import ImageOne from '../components/ImageOne';
import Price from '../components/Price';

function AllData() {
return (
    <div>
    <>
        <div className="carddsss">
          {/* Start First Card */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ImageOne} height={"300px"} /> {/* Update the image source */}
            <Card.Body>
            <Name />
            <Des />
            </Card.Body>
            <ListGroup className="list-group-flush">
            <Price />
            </ListGroup>
            <Card.Body>
            <Card.Link href="https://www.tiktok.com/@cartvpress/video/7168380817197092101?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
            <Card.Link href="https://www.tiktok.com/@audiworld_official/video/7027363102328982789?is_from_webapp=1&sender_device=pc&web_id=7287724770635318789">See More</Card.Link>
            </Card.Body>
        </Card>
          {/* End First Card */}
        </div>
    </>
    </div>
);
}

export default AllData;
