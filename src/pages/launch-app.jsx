import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { LaunchList } from '../cmps/launch-list'
import { FilterBar } from '../cmps/filter-bar'

import { loadLaunches } from '../store/launch.action.js'

export const LaunchApp = (props) => {
    const { launches } = useSelector(state => state.launchModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadLaunches())
    }, [])

    const [filteredLaunches, setFiltersLaunches] = useState([])

    const onSetFiltersLaunches = (filteredLaunches) => {
        setFiltersLaunches(filteredLaunches)
    }

    const launchesToDisplay = filteredLaunches.length ? filteredLaunches : launches
    return <main className="main-container page">
        <section>
            <FilterBar setFiltersLaunches={onSetFiltersLaunches} launches={launches} />
            <LaunchList launches={launchesToDisplay} />
        </section>
    </main>
}


