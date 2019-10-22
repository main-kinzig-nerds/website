import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { date, object, string } from 'yup';
import { useEvent, useLocations, useSaveEvent } from '../data';
import FormikButton from './FormikButton';
import Header from './Header';
import InputText from './InputText';

const Schema = object().shape({
  name: string().required(),
  date: date().required(),
});

export default function EditEvent({ id }) {
  const event = useEvent(id);
  const locations = useLocations();
  const saveEvent = useSaveEvent(id);
  const [saved, setSaved] = useState(false);

  const submit = async (values, actions) => {
    console.log('submit:', values);
    try {
      await saveEvent(values);
      setSaved(true);
    } catch (error) {
      console.error('error:', error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Header title={event.name} />
      <h1>{event.name}</h1>
      <Formik initialValues={event} isInitialValid={true} validationSchema={Schema} onSubmit={submit} enableReinitialize>
        {() => (
          <Form>
            <InputText name="name" label="Name" required />
            <Row>
              <Col sm={4}>
                <InputText name="date" type="date" label="Date" required />
              </Col>
              <Col sm={4}>
                <InputText name="startTime" type="time" label="Start time" required />
              </Col>
              <Col sm={4}>
                <InputText name="endTime" type="time" label="End time" required />
              </Col>
            </Row>
            <InputText type="textarea" name="description" label="Description" required cols={20} />
            <InputText type="select" name="location" label="Location" required>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </InputText>

            <div className="mt-3">
              <FormikButton type="submit" color="primary" success={saved} successLabel="Saved">
                Save
              </FormikButton>
              <Link to={`/events/${event.id}`} className="text-muted ml-3">
                Cancel
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
