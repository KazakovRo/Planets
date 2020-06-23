import React, { useState } from 'react'

import Planets from './Planets'
import ShortDescription from './ShortDescription'
import Search from './Search'
import SortPlanets from './SortPlanets'

const App = () => {
  const planets = [
    {
      id: 1,
      name: 'Mercury',
      mass: 0.06,
      mass_unit: 'earth mass',
      radius: 2440,
      radius_unit: 'km',
      satellites: 0,
      distance_from_sun: 57910000,
      distance_from_sun_unit: 'km',
      atmosphere: ['min'],
      description:
        'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods.'
    },
  
    {
      id: 2,
      name: 'Venus',
      mass: 0.82,
      mass_unit: 'earth mass',
      radius: 6052,
      radius_unit: 'km',
      satellites: 0,
      distance_from_sun: 108200000,
      distance_from_sun_unit: 'km',
      atmosphere: ['CO2', 'N2'],
      description:
        'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.'
    },
  
    {
      id: 3,
      name: 'Earth',
      mass: 1,
      mass_unit: 'earth mass',
      radius: 6378,
      radius_unit: 'km',
      satellites: 1,
      distance_from_sun: 149600000,
      distance_from_sun_unit: 'km',
      atmosphere: ['N2', 'O2'],
      description:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, which is Earth's only natural satellite. "
    },
  
    {
      id: 4,
      name: 'Mars',
      mass: 0.11,
      mass_unit: 'earth mass',
      radius: 3397,
      radius_unit: 'km',
      satellites: 2,
      distance_from_sun: 227900000,
      distance_from_sun_unit: 'km',
      atmosphere: ['H2', 'He'],
      description:
        'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being only larger than Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'
    },
  
    {
      id: 5,
      name: 'Jupiter',
      mass: 317.8,
      mass_unit: 'earth mass',
      radius: 71490,
      radius_unit: 'km',
      satellites: 62,
      distance_from_sun: 778500000,
      distance_from_sun_unit: 'km',
      atmosphere: ['H2', 'He'],
      description:
        'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history.'
    },
  
    {
      id: 6,
      name: 'Saturn',
      mass: 95.2,
      mass_unit: 'earth mass',
      radius: 60270,
      radius_unit: 'km',
      satellites: 34,
      distance_from_sun: 1434000000,
      distance_from_sun_unit: 'km',
      atmosphere: ['H2', 'He'],
      description:
        'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture.'
    },
  
    {
      id: 7,
      name: 'Uranus',
      mass: 14.6,
      mass_unit: 'earth mass',
      radius: 25560,
      radius_unit: 'km',
      satellites: 27,
      distance_from_sun: 2871000000,
      distance_from_sun_unit: 'km',
      atmosphere: ['H2', 'He'],
      description:
        'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants.'
    },
  
    {
      id: 8,
      name: 'Neptune',
      mass: 17.2,
      mass_unit: 'earth mass',
      radius: 24760,
      radius_unit: 'km',
      satellites: 13,
      distance_from_sun: 4495000000,
      distance_from_sun_unit: 'km',
      atmosphere: ['H2', 'He'],
      description:
        'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.'
    }
  ]
  
  const [description, setDescription] = useState('Choose a planet to get its description.')
  const [currentPlanets, setCurrentPlanets] = useState(planets)
  
  const planetsForSearch = planets

  const handleSearch = value => {
    setCurrentPlanets(planetsForSearch.filter( planet => 
      planet.name.toLowerCase().startsWith(value.toLowerCase()) ||
      planet.atmosphere.some(atmosphere => atmosphere.toLowerCase().startsWith(value.toLowerCase()))
    ))
}

  const handleSortBy = value => {
    const planetsForSort = [...planets]
    
    switch (planetsForSort, value) {
      case 'size':
        setCurrentPlanets(planetsForSort.sort( (a, b) => b.mass - a.mass ))
        break

      case 'distance':
        setCurrentPlanets(planetsForSort.sort( (a, b) => b.distance_from_sun - a.distance_from_sun ))
        break

      case 'satellites':
        setCurrentPlanets(planetsForSort.sort( (a, b) => b.satellites  - a.satellites ))
        break

      default:
        break
    }
  }

  const showDescription = shortDescription => {
    setDescription(shortDescription)
  }

  return ( 
    <>
      <div className="sort-planet">  
        <Search handleSearch={handleSearch} />
        <SortPlanets handleSortBy={handleSortBy} />
      </div>

      <Planets planets={currentPlanets} showDescription={showDescription} />
      <ShortDescription value={description}/>
    </>
  )
}


export default App
