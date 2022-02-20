import React, { useState, useEffect, useRef } from "react";

export const FilterBar = (props) => {

    const [filterBy, setFilter] = useState('All')
    const isMounting = useRef(true)

    useEffect(() => {

        if (isMounting.current) {
            isMounting.current = false
            return
        }
        filterLaunches()
    }, [filterBy])

    const filterLaunches = () => {
        const { launches } = props
        const filteredLaunches = launches.filter(launch => {
            if (filterBy === 'All') return launch
            if (filterBy === 'Success') return launch.cores[0].landing_success
            else return !launch.cores[0].landing_success
        })
        props.setFiltersLaunches(filteredLaunches)
    }

    const handleChange = (ev) => {
        let field = ev.target.innerText
        if (field === filterBy) field = 'All'
        setFilter(field)
    }

    return <div className="filter-bar">
        <div className="filter-bar-container flex">
            <div className={filterBy === "Success" ? "active" : ""} onClick={handleChange}>Success</div>
            <div className={filterBy === "Fail" ? "active" : ""} onClick={handleChange}>Fail</div>
            <div className={filterBy === "All" ? "active" : ""} onClick={handleChange}>All</div>
        </div>
    </div>
}
