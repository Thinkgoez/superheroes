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
            return { ...state, heroes: action.data.heroes, totalHeroesCount: action.data.totalCount };
        }
        case ACTION.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.data };
        }
        case ACTION.GET_HERO_SUCCESS: {
            return { ...state, currentHero: action.data };
        }
        case ACTION.SET_FETCHING_STATUS: {
            return { ...state, isFetching: action.data };
        }
        case ACTION.REQUEST_ERROR: {
            return { ...state, error: action.data };
        }
        case ACTION.UPDATE_HERO_SUCCESS: {
            return { ...state, currentHero: {...state.currentHero, ...action.data} };
        }
        case ACTION.DELETE_HERO_SUCCESS: {
            return { ...state, currentHero: {}, heroes: state.heroes.filter(hero => hero.id !== action.data) };
        }
        case ACTION.DELETE_IMAGES_SUCCESS: {
            return {
                ...state,
                currentHero: {
                    ...state.currentHero,
                    images: state.currentHero.images.filter((image) => !action.data.images.includes(image))
                }
            };
        }
        case ACTION.ADD_IMAGE_SUCCESS: {
            let images
            if(state.currentHero.images) images = [...state.currentHero.images].concat(action.data.image)
            else images = [action.data.image]
            return {
                ...state,
                currentHero: {
                    ...state.currentHero,
                    images: Array.from(new Set(images))
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
export const updateHeroData = (id, info) => ({
    type: ACTION.REQUEST_UPDATE_HERO_DATA, data: {id, info}
})
export const removeHero = (data) => ({
    type: ACTION.REQUEST_DELETE_HERO, data
})
export const removeImages = (id, images) => ({
    type: ACTION.REQUEST_DELETE_IMAGES, data: {id, images}
})
export const addNewImage = (id, image) => ({
    type: ACTION.REQUEST_ADD_IMAGE, data: {id, image}
})
export const createHero = (data) => ({
    type: ACTION.REQUEST_CREATE_HERO, data
})