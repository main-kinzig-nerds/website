import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { useEvents } from '../data';
import DateFmt from './DateFmt';
import Header from './Header';

export default function Events() {
  const events = useEvents();

  return (
    <>
      <Header title="Events" />
      <h1>Events</h1>
      <ListGroup>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ListGroup>
    </>
  );
}

function EventCard({ event }) {
  return (
    <ListGroupItem tag={Link} to={`/events/${event.id}`} action>
      <ListGroupItemHeading>{event.name}</ListGroupItemHeading>
      <ListGroupItemText className="mb-0">
        <DateFmt value={event.date} dateStyle="long" />, <DateFmt value={`2000-01-01T${event.startTime}`} timeStyle="short" />
        -
        <DateFmt value={`2000-01-01T${event.endTime}`} timeStyle="short" />
      </ListGroupItemText>
    </ListGroupItem>
  );
}
