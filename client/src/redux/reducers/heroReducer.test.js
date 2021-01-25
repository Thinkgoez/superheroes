import heroReducer, { requestHeroes } from './heroReducer'
import ACTION from '../actionTypes'


// const initialState = {
//     heroes: [],
//     currentPage: 1,
//     currentHero: null,
//     pageSize: CONSTS.PAGE_SIZE,
//     totalHeroesCount: null,
//     isFetching: false,
//     error: null
// };

it('length of heroes should be incremented', () => {
    const state = {
        heroes: []
    }
    const data = { heroes:[ {id: '1', data: 'hero info'}], totalHeroesCount: 1 }
    const action = { type: ACTION.FETCH_HEROES_SUCCESS, data }
    let newState = heroReducer(state, action)
    expect(newState.heroes.length).toBe(1)
})

it('currentPage should be changed', () => {
    const state = {
        currentPage: null
    }
    const action = { type: ACTION.SET_CURRENT_PAGE, data: 1 }
    let newState = heroReducer(state, action)
    expect(newState.currentPage).toBe(1)
})
it('currentHero.id should be changed', () => {
    const state = {
        currentHero: {}
    }
    const hero = {id: 1, info: 'hero info'}
    const action = { type: ACTION.GET_HERO_SUCCESS, data: hero }
    let newState = heroReducer(state, action)
    expect(newState.currentHero.id).toBe(1)
})
it('isFetching should be changed to true', () => {
    const state = {
        isFetching: false
    }
    // const hero = {id: 1, info: 'hero info'}
    const action = { type: ACTION.SET_FETCHING_STATUS, data: true }
    let newState = heroReducer(state, action)
    expect(newState.isFetching).toBe(true)
})
it('isFetching should be changed to true', () => {
    const state = {
        isFetching: false
    }
    // const hero = {id: 1, info: 'hero info'}
    const action = { type: ACTION.SET_FETCHING_STATUS, data: true }
    let newState = heroReducer(state, action)
    expect(newState.isFetching).toBe(true)
})