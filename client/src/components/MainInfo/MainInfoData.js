import { Typography } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';

import classes from './MainInfo.module.css'

function MainInfoData({ openEditMode, heroInfo }) {
    return (
        <div className={classes.dataMode}>
            <div className={classes.topInfo}>
                <div className={classes.imageWrapper}>
                    <img src={heroInfo.poster_image} className={classes.posterImage} alt={heroInfo.nickname} />
                </div>

                <div className={classes.shortInfo}>
                <div className={classes.optionsButtonGroup}>
                    <button className={classes.editIconButton} onClick={openEditMode}><EditIcon />edit</button>
                </div>
                    
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
        </div>
    )
}

export default MainInfoData