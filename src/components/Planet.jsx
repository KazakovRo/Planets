import React from 'react'

const Planet = ( { planet: { name, mass, radius, satellites, description, mass_unit, radius_unit, atmosphere  }, showDescription }) => {
    return (
        <li className="planet-card" onClick={ () => showDescription(description)}>
            <h4 className="planet-title">{name}</h4>

            <div className="card-body">
                <p>mass: {mass} {mass_unit}</p>
                <p>radius: {radius} {radius_unit}</p>
                <p>satellites: {satellites} </p>
                <p>atmosphere: {atmosphere} </p>
            </div>
        </li>
    )
}

export default Planet