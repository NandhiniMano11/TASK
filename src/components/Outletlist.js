import React from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'

export default function Outletlist(props) {
  
    return (
        <div style={{marginTop :'5px'}}>
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">{props.value.outlet[0].outletName}      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <ListGroup>
                            {(props.value.outlet).length > 1 && 
                            (props.value.outlet).map(e => {return(<ListGroup.Item>{e.outletName}</ListGroup.Item>)  })}
                        </ListGroup>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    )
}
