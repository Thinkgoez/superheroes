import { takeLatest } from 'redux-saga/effects'

import ACTIONS from '../actionTypes'
import { fetchHeroesSaga, getHeroSaga } from './heroesSagas'

export default function* rootSaga() {
    yield takeLatest(ACTIONS.REQUEST_HEROES, fetchHeroesSaga)
    yield takeLatest(ACTIONS.REQUEST_HERO, getHeroSaga)
}