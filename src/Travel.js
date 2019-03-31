import React from "react";

const Travel = ({ destination, country, photo, credit, distance }) => (
  <figure>
    <h2>{destination}</h2>
    <img src={photo} alt={destination} width="80%" />
    <figcaption>
      <blockquote><em>{destination}</em> {country}</blockquote>
      <p><small>{credit}</small></p>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;