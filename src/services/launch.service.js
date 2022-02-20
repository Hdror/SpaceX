import {storageService} from './async.storage.service.js'

const axios = require('axios')

export const launchService = {
   getLaunches,
   getById
}

// getLandings()

export async function getLaunches() {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v4/launches`)
        const launches = res.data.filter(launch => {
            if (launch.cores[0].landing_attempt) return launch
        })
        console.log(launches);
        return launches
    } catch (err) {
        console.log('Error getting launches:', err)
    }
}


function getById(launchId) {
    return storageService.get('launchesDB', launchId)
}

