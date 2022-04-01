import { launchService } from '../services/launch.service.js'
import {localStorageServices} from '../services/stroage.service.js'

const STORAGE_KEY = 'launchesDB'

export function loadLaunches() {
    return (dispatch) => {
        launchService.getLaunches()
            .then(launches => {
                localStorageServices.saveToStorage(STORAGE_KEY, launches)
                const action = { type: 'SET_LAUNCHES', launches }
                dispatch(action)
            })

    }
}

