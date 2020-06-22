import React from 'react'

import Planet from './Planet'

const Planets = ({ planets, showDescription }) => {
    return (
        <ul className="planets-list">
            {planets.map(planet => (
                <Planet 
                planet={planet}
                key={planet.id}
                showDescription={showDescription}
                />
            ) )}
        </ul>
    )
}

export default Planets