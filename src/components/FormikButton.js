import { connect } from 'formik';
import React from 'react';
import FormButton from './FormButton';

function FormikButton({ formik, disabled, ...rest }) {
  const { isValid, isSubmitting } = formik;
  return <FormButton disabled={disabled || isSubmitting || !isValid} submitting={isSubmitting} {...rest} />;
}

export default connect(FormikButton);
