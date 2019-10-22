import React from 'react';
import { Spinner } from 'reactstrap';
import classes from './GlobalSpinner.module.scss';

export default function GlobalSpinner({ title, message }) {
  return (
    <div className={classes.wrapper}>
      <Spinner color="primary" size="lg" className={classes.spinner} />
      {message && <span className={classes.message}>{message}</span>}
    </div>
  );
}
