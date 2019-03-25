import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
      <h2>{destination}</h2>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{destination} {country}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;