import ACTION from '../actionTypes';
import CONSTS from '../../constants'

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
            return { ...state, heroes: action.data.data, totalHeroesCount: action.data.totalCount };
        }
        case ACTION.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.data };
        }
        case ACTION.GET_HERO_SUCCESS: {
            return { ...state, currentHero: action.data };
        }
        case ACTION.SET_TOTAL_SIZE: {
            alert('set total sizee')
            return { ...state, totalHeroesCount: action.data };
        }
        case ACTION.SET_FETCHING_STATUS: {
            return { ...state, isFetching: action.data };
        }
        case ACTION.REQUEST_ERROR: {
            return { ...state, error: action.data };
        }
        case ACTION.UPDATE_HERO_SUCCESS: {
            return { ...state, currentHero: action.data };
        }
        case ACTION.DELETE_HERO_SUCCESS: {
            return { ...state, currentHero: {}, heroes: state.heroes.filter(hero => hero.id !== action.data) };
        }
        case ACTION.DELETE_IMAGES_SUCCESS: {
            console.log(state.currentHero.images.filter((image) => !action.data.includes(image)));
            return {
                ...state,
                currentHero: {
                    ...state.currentHero,
                    images: state.currentHero.images.filter((image) => !action.data.includes(image))
                }
            };
        }
        case ACTION.ADD_IMAGE_SUCCESS: {
            return {
                ...state,
                currentHero: {
                    ...state.currentHero,
                    images: [...state.currentHero.images].concat(action.data)
                }
            };
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
export const updateHeroData = (data) => ({
    type: ACTION.REQUEST_UPDATE_HERO_DATA, data
})
export const removeHero = (data) => ({
    type: ACTION.REQUEST_DELETE_HERO, data
})
export const removeImages = (data) => ({
    type: ACTION.REQUEST_DELETE_IMAGES, data
})
export const addNewImage = (data) => ({
    type: ACTION.REQUEST_ADD_IMAGE, data
})
export const createHero = (data) => ({
    type: ACTION.REQUEST_CREATE_HERO, data
})