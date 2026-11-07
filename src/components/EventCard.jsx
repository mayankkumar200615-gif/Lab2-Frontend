function EventCard({ name, date, venue }) {
  return (
    <article className="event-card">
      <div className="event-card__topline">
        <span className="event-card__label">Featured event</span>
        <span className="event-card__icon" aria-hidden="true">
          ↗
        </span>
      </div>
      <h2 className="event-card__name">{name}</h2>
      <dl className="event-card__details">
        <div>
          <dt>Date</dt>
          <dd>{date}</dd>
        </div>
        <div>
          <dt>Venue</dt>
          <dd>{venue}</dd>
        </div>
      </dl>
      <div className="event-card__footer">
        <span>Event details</span>
        <span aria-hidden="true">→</span>
      </div>
    </article>
  )
}

export default EventCard
