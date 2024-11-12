import React from 'react';
import Event from './Event';

const events = [
  {
    className: "e1",
    title: "Startup Networking Event - by AY Ventures",
    date: "Sat,Apr 13  11:00AM",
    location: "Delhi",
    imageUrl: "/event-images/event-1.webp"
  },
  {
    className: "e2",
    title: "Placement Expo  2024",
    date: "Tue,Apr 16  10:00AM",
    location: "Bangalore",
    imageUrl: "/event-images/event-2.jpeg"
  },
  {
    className: "e3",
    title: "QS Discover MBA Fair 2024",
    date: "Wed,May 1  11:00AM",
    location: "Gurgaon",
    imageUrl: "/event-images/event-3.jpeg"
  },
  {
    className: "e4",
    title: "Work In Sweden/Europe - Jobs/Employers and Work Visa",
    date: "Wed,Apr 24  7:00PM",
    location: "Delhi",
    imageUrl: "/event-images/event-4.jpeg"
  },
  {
    className: "e5",
    title: "Land First Job Out of College | Upskill Professionals",
    date: "Thu,Apr 25  3:00PM",
    location: "Noida",
    imageUrl: "/event-images/event-5.jpeg"
  },
  {
    className: "e6",
    title: "Delhi Business Network | Business Networking",
    date: "Sat,Apr 13  10:30AM",
    location: "Mehrauli, Guragon",
    imageUrl: "/event-images/event-6.jpeg"
  },
  {
    className: "e7",
    title: "Tech Summit | 2024",
    date: "Sun,Apr 28  9:30AM",
    location: "Delhi",
    imageUrl: "/event-images/event-7.jpeg"
  },
  {
    className: "e8",
    title: "Women In Tech| Seminar",
    date: "Wed,Apr 24  2:30PM",
    location: "Noida",
    imageUrl: "/event-images/event-8.jpeg"
  },
  {
    className: "e9",
    title: "An Introduction to Artificial Intelligence",
    date: "Mon,Apr 15  2:30PM",
    location: "Delhi",
    imageUrl: "/event-images/event-9.jpeg"
  },
  {
    className: "e10",
    title: "Intuit - Debugging Campus Placements",
    date: "Thu,Apr 25  10:30AM",
    location: "Online Event",
    imageUrl: "/event-images/event-10.jpg"
  },
  {
    className: "e11",
    title: "TECHSPO - Technology EXPO",
    date: "Sun,Sep 25  1:30PM",
    location: "Delhi",
    imageUrl: "/event-images/event-11.jpeg"
  },
  {
    className: "e12",
    title: "Talent Park - By UNSTOP",
    date: "Sun,Apr 28  9:30AM",
    location: "Delhi",
    imageUrl: "/event-images/event-12.jpeg"
  }
];

const EventCatalog = () => {
  return (
    <div className="events-container">
      <div className="events-list">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventCatalog;