import React, { useState, useEffect } from "react";
import { landingService } from "../services/landing.service.js";
import { loadLandings } from "../store/landing.action.js";

export function Paginate({ landings }) {
    console.log(landings)

    const [currPage, setCurrPage] = useState(1)
    const [landingsPerPage, setLandingsPerPage] = useState(20)

    const indexOfLastLanding = currPage * landingsPerPage
    const indexOfFirstLanding = indexOfLastLanding - landingsPerPage
    const currLandings = landings.slice(indexOfFirstLanding, indexOfLastLanding)
    console.log(currLandings);

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(landings.length / landingsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log('pageNumbers:', pageNumbers);

    const paginate = () => {
        setCurrPage()
    }

    return (
        <nav>
            <h1></h1>
        </nav>

    )
}