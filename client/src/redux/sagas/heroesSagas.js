import { call, put } from 'redux-saga/effects'

import API from '../../api/api'
import ACTIONS from '../actionTypes'

export function* fetchHeroesSaga(action) {
    try {
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: true })
        const res = yield call(API.fetchHeroes, action.data)
        yield put({ type: ACTIONS.FETCH_HEROES_SUCCESS, data: res })
        yield put({ type: ACTIONS.SET_CURRENT_PAGE, data: action.data.pageNumber })
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: false })
    } catch (error) {
        yield put({ type: ACTIONS.REQUEST_ERROR, data: error })
    }
}
export function* getHeroSaga(action) {
    try {
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: true })
        const res = yield call(API.getHero, action.data)
        yield put({ type: ACTIONS.GET_HERO_SUCCESS, data: res })
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: false })
    } catch (error) {
        yield put({ type: ACTIONS.REQUEST_ERROR, data: error })
    }
}
export function* updateHeroSaga(action) {
    try {
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: true })
        const res = yield call(API.updateHeroData, action.data)
        yield put({ type: ACTIONS.UPDATE_HERO_SUCCESS, data: res })
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: false })
    } catch (error) {
        yield put({ type: ACTIONS.REQUEST_ERROR, data: error })
    }
}
export function* deleteHeroSaga(action) {
    try {
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: true })
        yield call(API.deleteHero, action.data)
        yield put({ type: ACTIONS.DELETE_HERO_SUCCESS, data: action.data})
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: false })
    } catch (error) {
        yield put({ type: ACTIONS.REQUEST_ERROR, data: error })
    }
}
export function* deleteImagesSaga(action) {
    try {
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: true })
        yield call(API.deleteImages, action.data)
        yield console.log(action.data)
        yield put({ type: ACTIONS.DELETE_IMAGES_SUCCESS, data: action.data})
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: false })
    } catch (error) {
        yield put({ type: ACTIONS.REQUEST_ERROR, data: error })
    }
}
export function* addImageSaga(action) {
    try {
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: true })
        yield call(API.addImage, action.data)
        yield put({ type: ACTIONS.ADD_IMAGE_SUCCESS, data: action.data})
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: false })
    } catch (error) {
        yield put({ type: ACTIONS.REQUEST_ERROR, data: error })
    }
}
export function* createHeroSaga(action) {
    try {
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: true })
        yield call(API.createHero, action.data)
        yield put({ type: ACTIONS.CREATE_HERO_SUCCESS, data: action.data})
        yield put({ type: ACTIONS.SET_FETCHING_STATUS, data: false })
    } catch (error) {
        yield put({ type: ACTIONS.REQUEST_ERROR, data: error })
    }
}