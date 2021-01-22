import ACTION from '../actionTypes';
import CONSTS from '../constants'

const initialState = {
    heroes: [],
    currentPage: 1,
    currentHero: null,
    pageSize: CONSTS.PAGE_SIZE,
    totalHeroesCount: null,
    isFetching: false,
    error: null
};

export default function heroReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.FETCH_HEROES_SUCCESS: {
            return {...state, heroes: action.data};
        }
        case ACTION.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.data};
        }
        case ACTION.GET_HERO_SUCCESS: {
            return {...state, currentHero: action.data};
        }
        case ACTION.SET_TOTAL_SIZE: {
            return {...state, totalHeroesCount: action.data};
        }
        case ACTION.SET_FETCHING_STATUS: {
            return {...state, isFetching: action.data};
        }
        case ACTION.REQUEST_ERROR: {
            return {...state, error: action.data};
        }
        default:
            return state;
    }
}

export const requestHeroes = (pageNumber = 1, pageSize = CONSTS.PAGE_SIZE) => ({
    type: ACTION.REQUEST_HEROES, data: { pageNumber, pageSize }
})
export const getHero = (id) => ({
    type: ACTION.REQUEST_HERO, data: id
})