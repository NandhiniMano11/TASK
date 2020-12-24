import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Col, Row
} from 'reactstrap';
import nveg from '../images/icons8-non-vegetarian-food-symbol-48.png'
import veg from '../images/icons8-vegetarian-food-symbol-48.png'
import Outletlist from './Outletlist';

const ListRes = (props) => {
    return (
        <Col xs={6} md={4} style={{ marginBottom: '10px' }}>
            <Card>
                <CardImg class="cardimg" top height='200vh' width="100%" src={props.value.restaurantImage} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{props.value.restaurantName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.value.cuisines}</CardSubtitle>
                    <CardText>{props.value.displayTime}</CardText>
                    <Row>
                        <Col><Button outline color="success"><i class="bi bi-star-fill"></i> {props.value.averageReview}</Button> </Col>
                        <Col>{props.value.displayCostForTwo}</Col>
                        <Col >{props.value.isPureVeg === 1 ?
                            <img style={{ float: "right" }} src={veg} class="icon" alt="veg" /> :
                            <img style={{ float: "right" }} src={nveg} class="icon" alt="nveg" />
                        }</Col>
                    </Row>
                    <Row>
                       <Outletlist value={props.value}></Outletlist>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ListRes;
