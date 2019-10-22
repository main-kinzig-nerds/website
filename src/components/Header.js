import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Header(props) {
  return <Helmet titleTemplate="%s - Main-Kinzig-Nerds" {...props} />;
}
