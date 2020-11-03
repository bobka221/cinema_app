import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Cinema = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" alt="Card image cap">
          
        </CardImg>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>{props.text}</CardText>
          <Button>Watch</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Cinema;