import { Card, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

import Paginator from '../../components/Paginator/Paginator'
import Preloader from '../../components/Preloader/Preloader';
import classes from './HeroesPage.module.css'

export default function HeroesPage({ currentPage, onPageChanged, pageSize, totalHeroesCount, heroes, ...props }) {
    return (
        <>
            <div className={classes.paginator}>
                {totalHeroesCount < pageSize ? ''
                    : <Paginator
                        portionSize={5}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        totalItemsCount={totalHeroesCount}
                        onPageChanged={onPageChanged}
                    />
                }
            </div>
            <HeroCard data={heroes} />
        </>
    )
}

function HeroCard({ data }) {
    if (!data) return <Preloader />
    return (
        <div className={classes.gridRoot}>
            {data.map(hero => (
                <Card className={classes.gridItem} key={hero._id}>
                    <div className={classes.cardActionArea} style={{ backgroundImage: `url(${hero.poster_image})` }}>
                        <div className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">{hero.nickname}</Typography>
                        </div>
                    </div>
                    <div className={classes.cardActions}>
                        <NavLink to={`/hero/${hero._id}`} className={classes.cardLink}>Learn More</NavLink>
                    </div>
                </Card>
            ))}
        </div>
    )
}