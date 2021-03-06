import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Paper } from '@material-ui/core'

import { getHero, removeHero, updateHeroData } from '../../redux/reducers/heroReducer'
import Preloader from '../../components/Preloader/Preloader'
import MainInfoDataForm from '../../components/MainInfo/MainInfoDataForm/MainInfoDataForm'
import MainInfoData from '../../components/MainInfo/MainInfoData'
import Gallery from '../../components/Gallery/Gallery'
import classes from './HeroInfo.module.css'


function HeroInfoPage({ getCurrentHero, currentHero, isFetching, updateHeroData, removeHero }) {
    const { id } = useParams()

    useEffect(() => {
        if (!currentHero || id !== currentHero._id) getCurrentHero(id)
    }, [currentHero, id, getCurrentHero])

    if (isFetching || !currentHero) return <Preloader />
    return (
        <div className={classes.root}>
            <MainInfo heroInfo={currentHero} updateHeroData={(data) => updateHeroData(id, data)} removeHero={removeHero} />
            <Gallery images={currentHero.images} className={classes.gallery} />
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
        removeHero(heroInfo._id)
    }
    const handleSubmit = (data) => {
        closeEditMode()
        updateHeroData(data)
    }
    const handleCancel = (func) => {
        func()
        closeEditMode()
    }
    return (
        <Paper variant="outlined" className={classes.mainInfoBlock}>
            {isEditMode
                ? <MainInfoDataForm
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                    heroInfo={heroInfo}
                    handleRemoveHero={handleRemoveHero}
                />
                : <MainInfoData openEditMode={openEditMode} heroInfo={heroInfo} />}
        </Paper>
    )
}

const mapStateToProps = (state) => ({
    currentHero: state.heroes.currentHero,
    isFetching: state.heroes.isFetching
})

export default connect(mapStateToProps,
    {
        getCurrentHero: getHero,
        updateHeroData,
        removeHero,
    }
)(HeroInfoPage)