import { Component } from 'react'
import { connect } from 'react-redux'

import { requestHeroes } from '../../redux/reducers/heroReducer'
import HeroesPage from './HeroesPage'
import Preloader from '../../components/Preloader/Preloader'


class HeroesPageContainer extends Component {
    componentDidMount() {
        this.props.requestHeroes(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestHeroes(pageNumber, this.props.pageSize)
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader /> : <HeroesPage
                    currentPage={this.props.currentPage}
                    heroes={this.props.heroes}
                    totalHeroesCount={this.props.totalHeroesCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                />}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    heroes: state.heroes.heroes,
    isFetching: state.heroes.isFetching,
    pageSize: state.heroes.pageSize,
    currentPage: state.heroes.currentPage,
    totalHeroesCount: state.heroes.totalHeroesCount,
})

export default connect(mapStateToProps, { requestHeroes })(HeroesPageContainer)