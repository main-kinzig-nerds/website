import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';

export default function InputText({ name, id = name, label, description, required, ...rest }) {
  return (
    <Field id={id} name={name}>
      {({ field, form }) => (
        <FormGroup>
          <Label for={id}>
            {label}
            {required && <sup title="required">*</sup>}
          </Label>
          <Input id={id} invalid={isInvalid({ form, field })} required={required} {...field} {...rest} />
          <ErrorMessage name={name} component={FormFeedback} />
          {description ? <FormText color="muted">{description}</FormText> : null}
        </FormGroup>
      )}
    </Field>
  );
}

function isInvalid({ form, field }) {
  return field.name in form.errors;
}
