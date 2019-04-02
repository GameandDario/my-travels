import React from "react";
import Travel from "./Travel";
const travels = [
    {
        destination:"Kyoto",
        country:"Japan",
        photo:"https://upload.wikimedia.org/wikipedia/commons/4/42/Hiroshige_nuit_de_neige_%C3%A0_Kambara.JPG",
        credit:"Hirochige, 'Nuit de neige à Kambara', estampe, XIX° siècle ",
        distance:"9630 km from Paris.",
    },
    {
        destination:"musée d'Árbær",
        country:"Islande",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Islande_-_Ferme.JPG/800px-Islande_-_Ferme.JPG",
        credit:"",
        distance:"3500 km from Marseille.",
    },
    {
        destination:"Vosges",
        country:"France",
        photo:"http://gerardmerinfo.fr/wp-content/uploads/2016/01/Col_Vosges_Neige_01.jpg",
        credit:"via http://gerardmer.info.fr",
        distance:"689 km from Marseille",
    },
    {
        destination:"Scotland",
        country:"United Kingdom",
        photo:"http://medieval.mrugala.net/Architecture/Ecosse,_Dornie,_Eilean_Donan,_Chateau/Ecosse,%20chateau%20Eilean%20Donan%20(1).jpg",
        credit:"Chateau d'Elean Donan via 'http://medieval.mrugala.net/'",
        distance:"1.887 km from Marseille.",
    },
    {
        destination:"Coimbra",
        country:"Portugal",
        photo:"https://nelsoncarvalheiro.com//wp-content/uploads/2013/11/Nelson_Carvalheiro_-1.jpg",
        credit:"via http://nelsoncarvalheiro.com",
        distance:"1.493 km from Marseille",
    }
];

const Travels = () => (
    <div>
        {travels.map(travel => 
        (
           <Travel destination = {travel.destination} country = {travel.country} photo = {travel.photo} credit = {travel.credit} distance = {travel.distance} />
        )
            // <Travels {... travel} />
            )}
    </div>
);




export default Travels;