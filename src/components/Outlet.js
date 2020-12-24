import React from 'react'
import { Accordion, Card, ListGroup } from 'react-bootstrap'

export default function Outlet(props) {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle eventKey="0">
                            {props.outletvalue.outlet[0].outletName}</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0"><Card.Body>
                        <ListGroup>
                            {(props.outletvalue.outlet).map(e => {
                                <ListGroup.Item>{e.outletName}</ListGroup.Item>
                            })}    </ListGroup> </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    )
}
