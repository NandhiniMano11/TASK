import React, { Component } from "react";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Collapse, Button
} from 'reactstrap';
import '../App.css'
import "bootstrap/dist/css/bootstrap.css";
import Accordion from 'react-bootstrap/Accordion'

export default class Rescards extends Component {
    render() {
        return (
            <div class="col-2 ">
                <div class="card card-block ">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <img width="100%" src={this.props.value.bannerImage} alt="Card  cap" />
                        </Card></Accordion>
                </div>
            </div>
        )
    }
}

