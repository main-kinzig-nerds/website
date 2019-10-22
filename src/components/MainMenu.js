import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Container } from 'reactstrap';
import Logo from '../assets/Logo';
import classes from './MainMenu.module.scss';

export default function MainMenu() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/" className={classes.brand}>
          <Logo title="Main-Kinzig-Nerds" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar></Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
