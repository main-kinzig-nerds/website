import React from 'react';
import { Container } from 'reactstrap';
import MainMenu from './MainMenu';

export default function Layout({ children }) {
  return (
    <>
      <MainMenu />
      <main className="mt-4">
        <Container>{children}</Container>
      </main>
    </>
  );
}
