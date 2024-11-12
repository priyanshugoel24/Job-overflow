import React from 'react';

const Event = ({ event }) => {
  return (
    <div className={`event ${event.className}`}>
      <img src={event.imageUrl} alt={event.title} height="100px" />
      <div className="event-title">{event.title}</div>
      <div className="date-and-location">
        <div className="date"><p>{event.date}</p></div>
        <div className="location"><p>{event.location}</p></div>
      </div>
    </div>
  );
};

export default Event;