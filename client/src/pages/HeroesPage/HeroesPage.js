import { Card, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

import Paginator from '../../components/Paginator/Paginator'
import Preloader from '../../components/Preloader/Preloader';
import classes from './HeroesPage.module.css'

export default function HeroesPage({ currentPage, onPageChanged, totalHeroesCount, heroes, ...props }) {
    return (
        <>
            <div className={classes.paginator}>
                <Paginator
                    portionSize={15}
                    pageSize={5}
                    currentPage={currentPage}
                    totalItemsCount={500}
                    onPageChanged={onPageChanged}
                />
            </div>

            <HeroCard data={heroes} />
        </>
    )
}

function HeroCard({ data }) {
    if (!data) return <Preloader />
    return (
        <div className={classes.gridRoot}>
            {data.map(tile => (
                <Card className={classes.gridItem} key={tile.id}>
                    <div className={classes.cardActionArea} style={{ backgroundImage: `url(${tile.images[0]})` }}>
                        <div className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">{tile.nickname}</Typography>
                        </div>
                    </div>
                    <div className={classes.cardActions}>
                        <NavLink to={`/hero/${tile.id}`} className={classes.cardLink}>Learn More</NavLink>
                    </div>
                </Card>
            ))}
        </div>
    )
}