import { useState, useEffect } from "react";
import {NavBar, Container} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-Icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';


    export const navbar = () =>  {
        const [activeLink, setActiveLink] = useState('home');
        const [scrolled, seScrolled] = useState(false);

        useEffect(() => {
const onScroll = () => {
    if (window.scrollY > 50) {
        seScrolled(true);
    }else {
        seScrolled(false);
    }
}

window.addEventListener('scroll', onScroll);

return () => window.removeEventListener("scrool", onScroll);
    }, [])

const onUpdateActiveLink = (value) => {
    setActiveLink (value);
}

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span classname = "navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'link' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('link')}>Link</Nav.Link>
            <Nav.Link href="about us" className={activeLink === 'about us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about us')}>About Us</Nav.Link>
          </Nav>
          <span classname='navbar-text'>
          <div classsname='social-icon'>
            <a href="#"><img src={navIcon1} alt='' /></a>
            <a href="#"><img src={navIcon2} alt='' /></a>
            <a href="#"><img src={navIcon3} alt='' /></a>
          </div>
          <button classname="vvd" onClick={() => console.log("connect")}><span>Let´s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
