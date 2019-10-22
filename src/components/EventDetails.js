import React from 'react';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { useEvent, useLocation } from '../data';
import DateFmt from './DateFmt';
import classes from './EventDetails.module.scss';
import Header from './Header';

export default function EventDetails({ id }) {
  const event = useEvent(id);
  const location = useLocation(event.location);

  return (
    <>
      <Header title={event.name}>
        <meta name="description" content={event.description} />
      </Header>
      <Link to="/events" className="text-muted">
        ← back
      </Link>
      <h1>{event.name}</h1>
      <div className={classes.date}>
        <DateFmt value={event.date} dateStyle="long" />, <DateFmt value={`2000-01-01T${event.startTime}`} timeStyle="short" />
        -
        <DateFmt value={`2000-01-01T${event.endTime}`} timeStyle="short" />
      </div>
      <div className={classes.location}>
        <a
          href={`https://www.google.com/maps/@${location.coordinates.latitude},${location.coordinates.longitude},17.25z`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {location.name}, {location.address}, {location.city}
        </a>
      </div>
      <Markdown source={event.description} className={classes.description} />
      <Link to={`/events/${event.id}/edit`}>edit</Link>
    </>
  );
}
