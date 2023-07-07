import React from "react";
import Header from "../Components/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideNav from "../Components/Shared/LeftSideNav/LeftSideNav";
import { Outlet } from "react-router-dom";
import RightSideNav from "../Components/Shared/RightSideNav/RightSideNav";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
