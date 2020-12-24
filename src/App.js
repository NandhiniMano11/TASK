import React, { Component } from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Collapse, Button, CardDeck, Container, Row, Col
} from 'reactstrap';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ResCards from "./components/Rescards";
import Api from "./helpers/api";
import Res from "./response.json";
import BannerNav from "./components/BannerNav";
import ListRes from "./components/ListRes";


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const api = new Api();
    const fetchUser = () => {
      api
        .listRestaurant({ "latitude":13.0358481, "longitude":80.244455 } )
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    };
  
  }
  render() {
    return (
      <div>  <BannerNav></BannerNav>
        <div class="container-fluid ">
          <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 ">
            {(Res.banners).map(el => {
              return (<ResCards value={el} ></ResCards>)
            })}
          </div>
        </div>
        <Container>
          <Row style={{marginTop:'15px'}}>
            {(Res.listRestaurants).map(el => {
              return (<ListRes value={el}></ListRes>)
            })}
          </Row>
        </Container></div>
    );
  }
}

export default App;


