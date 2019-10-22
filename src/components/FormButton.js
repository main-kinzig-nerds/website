import classNames from 'classnames';
import React from 'react';
import { Button, Spinner } from 'reactstrap';

export default function FormButton({ submitting, success, successLabel, children, color, className, ...rest }) {
  return (
    <Button color={success ? 'success' : color} className={classNames('d-inline-flex', 'align-items-center', className)} {...rest}>
      {submitting && <Spinner size="sm" className="mr-2" />}
      {(success && successLabel) || children}
    </Button>
  );
}
