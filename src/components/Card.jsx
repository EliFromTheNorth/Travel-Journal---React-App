import React from "react";


function Card(props) {

  const description = props.description

  const truncateDescription = (description) => {
    // Check if the description length is greater than 370 characters
    if (description.length > 370) {
      // Truncate the description and add ellipsis
      return description.substring(0, 370) + '...';
    }
    return description; // Return the original description if it's shorter
  };

  return (
    <section className="card">
      <div className="card-img">
        <img src={props.imageUrl} />
      </div>

      <div className="card-text">
        <div className="location-info">
          <img src="public/images/location-icon.png" />
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
        </div>

        <h1>{props.title}</h1>
        <p className="dates">{props.startDate} - {props.endDate}</p>
        <p className="description">{truncateDescription(props.description)}</p>

      </div>
    </section>
  )
}

export default Card
