import ACTION from '../actionTypes';


const initialState = {
    superheroes: [],
    error: null
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.FETCH_HEROES_SUCCESS:{
            return initialState;
        }
        default:
            return state;
    }
}