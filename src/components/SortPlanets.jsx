import React from 'react'

const SortPlanets = ({ handleSortBy }) => {
    return (
        <select required
            defaultValue={"def"}
            className="select-input"
            onChange={ ({target: { value }}) => handleSortBy(value) }
            >
            <option value="def" disabled> You can sort it ... </option>
            <option value="size"> to size </option>
            <option value="distance"> far from the sun </option>
            <option value="satellites"> by the number of satellites </option>
        </select>
    )
}

export default SortPlanets

