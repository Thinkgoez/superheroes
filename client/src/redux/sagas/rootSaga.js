import { takeLatest, takeEvery } from 'redux-saga/effects'

import ACTIONS from '../actionTypes'
import { fetchHeroesSaga, getHeroSaga, updateHeroSaga, deleteHeroSaga, deleteImageSaga } from './heroesSagas'

export default function* rootSaga() {
    yield takeLatest(ACTIONS.REQUEST_HEROES, fetchHeroesSaga)
    yield takeLatest(ACTIONS.REQUEST_HERO, getHeroSaga)
    yield takeLatest(ACTIONS.REQUEST_UPDATE_HERO_DATA, updateHeroSaga)
    yield takeLatest(ACTIONS.REQUEST_DELETE_HERO, deleteHeroSaga)
    yield takeEvery(ACTIONS.REQUEST_DELETE_IMAGE, deleteImageSaga)
}