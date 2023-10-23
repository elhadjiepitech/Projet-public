import React from "react";

function Location() {
    const cities = ["Haguenau", "Strasbourg", "Illkirch", "Oswalt", "Robertsau", "Chiltgheim", "Chronumbourg"];

    return (
        <div>
            <h1>Liste des villes</h1>
            <ul>
                {cities.map((city) => (
                    <li key={city}>{city}</li>
                ))}
            </ul>
        </div>
    );
}

export default Location;