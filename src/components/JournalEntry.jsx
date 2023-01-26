import pinDrop from "../assets/pinDrop.svg";

export default function JournalEntry(props) {
  return (
    <div className="entry--border">
      <section className="entry--container">
        <img
          className="entry--image"
          src={props.imageUrl}
          alt="An image of the destination"
        />
        <div className="entry--content">
          <div className="entry--location-details">
            <img
              src={pinDrop}
              alt="A pin drop icon"
              className="entry--pin-drop"
            />
            <h5 className="entry--country">{props.location.toUpperCase()}</h5>
            <a href={props.googleMapsUrl} className="entry--maps-link">
              View on Google Maps
            </a>
          </div>
          <div className="entry--content-details">
            <h2 className="entry--location-visited">{props.title}</h2>
            <p className="entry--date-visited">
              {props.startDate} - {props.endDate}
            </p>
            <p className="entry--journal-entry">{props.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
