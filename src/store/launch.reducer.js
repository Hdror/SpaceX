const initialState = {
    launches: [],
}

export function launchReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_LAUNCHES':
            newState = { ...state, launches: [...action.launches] }
            break;
        default:
    }
    return newState;
}
