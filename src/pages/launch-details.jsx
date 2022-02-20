import { useEffect, useState } from 'react'

import { launchService } from '../services/launch.service.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import spacex from '../assest/img/spacex.svg'

export const LaunchDetails = (props) => {
    const [launch, setLaunch] = useState(null)

    useEffect(() => {
        const { launchId } = props.match.params
        loadLaunch(launchId)
    }, [props.match.params])

    const loadLaunch = async (launchId) => {
        const launch = await launchService.getById(launchId)
        setLaunch(launch)
    }

    if (!launch) return <h1>Loading...</h1>
    const { name, links, details, cores } = launch
    return <main className="launch-details main-container page">
        <section className="details-container ">
            <div className="info-container flex">
                <div className="text-container">
                    <h1>{name}</h1>
                    <p className="info-text" >{details}</p>
                    <h3>The landing attempt was  {cores[0].landing_success ? "successful" : "a failure"}</h3>
                    <a title="To wiki" target="_blank" className="clean-link" href={links.wikipedia}>
                        <FontAwesomeIcon className="fa fa-wikipedia" icon={faWikipediaW} />
                    </a>
                    <a title="To spaceX" target="_blank" href={links.presskit}>
                        <img className="fa spacex-logo" src={spacex} alt="" />
                    </a>
                </div>
                <div className="img-container flex">
                    <img src={links.patch.large} alt="img not found" />
                </div>
            </div>
            <iframe src={`https://www.youtube.com/embed/${links.youtube_id}`} frameBorder="0"></iframe>
        </section>
    </main>
}
