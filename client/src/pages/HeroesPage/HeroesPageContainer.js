import { useEffect } from 'react'
import { connect } from 'react-redux'

import { requestHeroes } from '../../redux/reducers/heroReducer'
import HeroesPage from './HeroesPage'
import Preloader from '../../components/Preloader/Preloader'


// class HeroesPageContainer extends Component {
// componentDidMount() {
//     this.props.requestHeroes(this.props.currentPage, this.props.pageSize)
// }
function HeroesPageContainer({ currentPage, pageSize, requestHeroes, ...props }) {
    useEffect(() => {
        requestHeroes(currentPage, pageSize)
    }, [currentPage, pageSize, requestHeroes])

    const onPageChanged = (pageNumber) => {
        requestHeroes(pageNumber, pageSize)
    }
    // render() {
    return (
        <div>
            {props.isFetching ? <Preloader /> : <HeroesPage
                currentPage={currentPage}
                heroes={props.heroes}
                totalHeroesCount={props.totalHeroesCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />}
        </div>
    )
    // }
}


const mapStateToProps = (state) => ({
    heroes: state.heroes.heroes,
    isFetching: state.heroes.isFetching,
    pageSize: state.heroes.pageSize,
    currentPage: state.heroes.currentPage,
    totalHeroesCount: state.heroes.totalHeroesCount,
})

export default connect(mapStateToProps, { requestHeroes })(HeroesPageContainer)