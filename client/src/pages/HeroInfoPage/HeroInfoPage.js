import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Paper } from '@material-ui/core'

import { getHero, removeHero, updateHeroData } from '../../redux/reducers/heroReducer'
import Preloader from '../../components/Preloader/Preloader'
import MainInfoDataForm from './MainInfo/MainInfoDataForm'
import MainInfoData from './MainInfo/MainInfoData'
import Gallery from './Gallery/Gallery'
import classes from './HeroInfo.module.css'


function HeroInfoPage({ getCurrentHero, currentHero, isFetching, updateHeroData, removeHero }) {
    const { id } = useParams()

    useEffect(() => {
        if (!currentHero) getCurrentHero(id)
    }, [currentHero, id, getCurrentHero])

    if (isFetching || !currentHero) return <Preloader />
    return (
        <div className={classes.root}>
            <MainInfo heroInfo={currentHero} updateHeroData={updateHeroData} removeHero={removeHero} />
            <Gallery images={currentHero.images} className={classes.gallery}/>
        </div>
    )
}

function MainInfo({ heroInfo, updateHeroData, removeHero }) {
    const [isEditMode, setEditMode] = useState(false)
    
    const openEditMode = () => {
        setEditMode(true)
    }
    const closeEditMode = () => {
        setEditMode(false)
    }

    const handleRemoveHero = () => {
        removeHero(heroInfo.id)
    }
    const handleSubmit = (data) => {
        closeEditMode()
        updateHeroData(data)
    }
    return (
        <Paper variant="outlined" className={classes.mainInfoBlock}>
            {isEditMode
                ? <MainInfoDataForm handleSubmit={handleSubmit} heroInfo={heroInfo} handleRemoveHero={handleRemoveHero} />
                : <MainInfoData openEditMode={openEditMode} heroInfo={heroInfo} />}
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    currentHero: state.heroes.currentHero,
    isFetching: state.heroes.isFetching
})

export default connect(mapStateToProps, { getCurrentHero: getHero, updateHeroData, removeHero })(HeroInfoPage)