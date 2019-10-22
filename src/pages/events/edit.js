import React from 'react';
import EditEvent from '../../components/EditEvent';

export default function EditEventPage({
  match: {
    params: { id },
  },
}) {
  return <EditEvent id={id} />;
}
