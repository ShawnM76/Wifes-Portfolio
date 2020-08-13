import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Rebecca McManus</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Photo's</Nav.Link>
          <Nav.Link href='#pricing'>Contact me</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
