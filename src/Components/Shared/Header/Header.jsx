import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AunthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user } = useContext(AunthContext);

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">Breaking News</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">
              {user?.uid ? (
                <>
                  {user?.displayName}
                  <Button className="ms-2" variant="danger">
                    LogOut
                  </Button>{" "}
                </>
              ) : (
                <></>
              )}
            </Nav.Link>
            <Nav.Link>
              {user?.photoURL ? (
                <Image roundedCircle style={{ width: "40px" }}></Image>
              ) : (
                <FaUser></FaUser>
              )}
              {user?.photoURL ? (
                <Image
                  roundedCircle
                  style={{ width: "40px" }}
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
