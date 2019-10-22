import React from 'react';
import EventDetails from '../../components/EventDetails';

export default function EventDetailsPage({
  match: {
    params: { id },
  },
}) {
  return <EventDetails id={id} />;
}
