import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Paper, Typography } from '@material-ui/core'

import { getHero } from '../../redux/reducers/heroReducer'
import Preloader from '../../components/Preloader/Preloader'
import classes from './HeroInfo.module.css'



function HeroInfoPage({ getCurrentHero, currentHero, isFetching, ...props }) {
    const { id } = useParams()

    useEffect(() => {
        if (!currentHero) getCurrentHero(id)
    }, [currentHero, id, getCurrentHero])

    if (isFetching || !currentHero) return <Preloader />
    return (
        <div className={classes.root}>
            <MainInfo heroInfo={currentHero} />
            <Paper className={classes.imagesBlock} variant="outlined" square />
        </div>
    )
}

function MainInfo({ heroInfo }) {
    return (
        <Paper variant="outlined" className={classes.mainInfoBlock}>
            <div className={classes.topInfo}>
                <img src={heroInfo.images[0]} className={classes.posterImage} alt={heroInfo.nickname} />
                <div className={classes.shortInfo}>
                    <h2>{heroInfo.nickname}</h2>
                    <div className={classes.description}>
                        <span><Typography variant='h6'><b>Real name: </b>{heroInfo.real_name}</Typography></span>
                        <span><Typography variant='body1'><b>Catch phrase: </b>{heroInfo.catch_phrase}</Typography></span>
                        <span><Typography variant='body1'><b>Superpowers: </b>{heroInfo.superpowers}</Typography></span>
                    </div>
                </div>
            </div>
            <div className={classes.bottomInfo}>
                <span>
                    <Typography variant='body1'><b>Descriptions: </b>{heroInfo.origin_description}</Typography></span>
            </div>
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    currentHero: state.heroes.currentHero,
    isFetching: state.heroes.isFetching
})

export default connect(mapStateToProps, { getCurrentHero: getHero })(HeroInfoPage)