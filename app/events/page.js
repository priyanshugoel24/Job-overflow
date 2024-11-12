import React from 'react'
import EventCatalog from '@/components/EventCatalog'
import '@/components/event-styles.css'

export default function Events() {
    return (
        <div className='events-page top-0 z-[-2] min-h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <div className="heading text-center mt-10 mb-14">
        <h1 className="text-5xl mb-4">Events</h1>
        <p>Events and webinars happening near you helping you to reach out to professionals</p>
      </div>
      <EventCatalog />
    </div>
    )
}



