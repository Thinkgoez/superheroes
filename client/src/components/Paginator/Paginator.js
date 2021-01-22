import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import s from './Paginator.module.css'


let Paginator = ({ totalItemsCount, pageSize, currentPage, portionSize = 5, ...props }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let currentPortion = Math.ceil(currentPage > portionSize ? currentPage / portionSize : 1)
    let [portionNumber, setPortionNumber] = useState(currentPortion)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            { portionNumber > 1 && <Button variant='outlined' onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prevent</Button>}
            {
                pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(el => {
                        return <span key={el}
                            onClick={(e) => { props.onPageChanged(el) }}
                            className={currentPage === el ? s.selectedPage : ''}
                        >{el}</span>
                    })
            }
            {
                portionCount > portionNumber && <Button variant='outlined' onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</Button>
            }
        </div>
    )
}

export default Paginator