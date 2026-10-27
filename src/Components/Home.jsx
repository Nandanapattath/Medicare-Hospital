import React from "react";

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '.../Components/ExampleCarouselImage';
import home from "../assets/home1.jpg";
import './home.css';
function Home(){
    return (
        <>
        
    {/* <Nav fill variant="tabs" defaultActiveKey="link-1">
        <h3>MediCare</h3>
     <Nav.Item>
        <Nav.Link eventKey="link-1"><Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
     <Nav.Item>
        <Nav.Link eventKey="link-2">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Booking</Nav.Link>
      </Nav.Item>
     <Nav.Item>
        <Nav.Link eventKey="link-4">Doctors</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">Departments</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6">Contact Us</Nav.Link>
      </Nav.Item>
      
    </Nav> */}
    <Carousel>
      <Carousel.Item>
        <img
        className="home1"
        src={home}
        alt="Home img"
        style={{height: "550px", objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h2>Welcome to MediCare</h2>
          <p>Your health is our priority.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="home1"
        src={home}
        alt="Home img"
        style={{height: "550px", objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h2>Quality Healthcare</h2>
          <p>We care for your health and wellbeing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="home1"
        src={home}
        alt="Home img"
        style={{height: "550px", objectFit:"cover"}}
        />
        <Carousel.Caption>
          <h2>Experienced Doctors</h2>
          <p>
           Get the best care from our Medical Team.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="mid">
    <h2>Welcome to Medicare Hospital</h2>
    <p>We provide quality medical services with advanced technology,compassionate healthcare professionals, and dedicated support for every patient and family</p>
    </div>
    {/* <div className="footer">
      <div footer-about>
        <h2>Medicare Hospital</h2>
        <p>Compassionate healthcare with experienced  <br />
        doctors,modern facilities,and patient-first service <br />
        for every family
        </p>
      </div>
      <div className="footer-mid">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Booking</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <p>Email:support@medicare.com</p>
        <p>Phone:+91 9876543210</p>
        <p>Location:Chennai,India</p>
      </div>
    </div> */}
    </>

  );
}
export default Home;