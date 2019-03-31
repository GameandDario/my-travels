import React from "react";
const travels = [
    {
        destination:"",
        country:"",
        photo:"",
        credit:"",
        distance:"",
    },
    {
        destination:"",
        country:"",
        photo:"",
        credit:"",
        distance:"",
    },
    {
        destination:"",
        country:"",
        photo:"",
        credit:"",
        distance:"",
    },
    {
        destination:"",
        country:"",
        photo:"",
        credit:"",
        distance:"",
    },
    {
        destination:"",
        country:"",
        photo:"",
        credit:"",
        distance:"",
    }
];

const Travels =() => (
    <div>
        {travels.map(travel => (
           <Travels destination = {travel.destination} country = {travel.country} photo = {travel.photo} credit = {travel.credit} distance = {travel.distance} />
        )
            )}
    </div>
);




export default Travels;