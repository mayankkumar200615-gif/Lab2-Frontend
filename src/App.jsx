import EventCard from './components/EventCard.jsx'
import './App.css'

const events = [
  {
    name: 'React Summit',
    date: 'November 14, 2026',
    venue: 'The Glasshouse, New York',
  },
  {
    name: 'Community Hack Night',
    date: 'November 21, 2026',
    venue: 'Innovation Hub, Brooklyn',
  },
  {
    name: 'Design Systems Workshop',
    date: 'December 5, 2026',
    venue: 'Studio 8, Manhattan',
  },
]

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Save your spot</p>
        <h1>Events worth showing up for.</h1>
        <p className="intro">
          Meet curious people, learn something new, and make your next day out
          count.
        </p>
      </header>

      <section className="event-grid" aria-label="Upcoming events">
        {events.map((event) => (
          <EventCard
            key={event.name}
            name={event.name}
            date={event.date}
            venue={event.venue}
          />
        ))}
      </section>
    </main>
  )
}

export default App
