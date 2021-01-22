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