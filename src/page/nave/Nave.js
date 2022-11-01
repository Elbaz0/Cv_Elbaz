import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nave.css'

const Nave = () => {
    return (
        <div className='asas' >

            <Nav variant="pills" activeKey="1" >  <img src='./uplouds/1.jpg' className='mm ' />
                <Nav.Item>

                    <Nav.Link eventKey="1" href="./home">
                        HOME
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Item" href="./about">
                        About
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" href="./work">
                        Work
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Information" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">CV</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">about Eng:Bazooka</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">call </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">D.V.W</NavDropdown.Item>
                </NavDropdown>
            </Nav></div>
    )
}

export default Nave