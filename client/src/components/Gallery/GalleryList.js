import { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import CONSTS from '../../constants'
import classes from './Gallery.module.css'
import { Checkbox } from '@material-ui/core';

function GalleryList({ isEditMode, images, handleOpenImage, checkRemoveImage , newImage}) {
    let [isShowMore, setShowMore] = useState(false)
    let showImages = images
    if (newImage) showImages.unshift(newImage)
    if (!images || images.length === 0) return <>There are no images</>
    let imagesLength = CONSTS.COUNT_VISIBLE_ITEMS

    if (images.length <= CONSTS.COUNT_VISIBLE_ITEMS || isShowMore) { imagesLength = images.length }

    let visibleImages = showImages.slice(0, imagesLength)
    return (
        <>
            <ul className={classes.flexList}>
                {
                    visibleImages.map((image, id) => (
                        <li
                            key={id}
                            className={classes.galleryFlexItem}
                        >
                            <img
                                onClick={() => handleOpenImage(image)}
                                src={image} alt={'gallerItemImage'}
                                className={classes.galleryImageItem}
                            />
                            {isEditMode
                                ?
                                <CheckBoxInput image={image} checkRemoveImage={checkRemoveImage} />
                                : ''
                            }
                        </li>
                    ))
                }
            </ul>
            <ButtonMore imageLength={images.length} isShowMore={isShowMore} setShowMore={setShowMore} />
        </>
    )
}

function ButtonMore({ imageLength, isShowMore, setShowMore }) {
    const handleMore = () => { setShowMore(!isShowMore) }
    const IconMore = () => isShowMore ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
    return (
        <>
            {imageLength <= CONSTS.COUNT_VISIBLE_ITEMS ? ''
                : <button className={classes.buttonMore} onClick={handleMore}>
                    {isShowMore ? 'Hide' : 'ShowMore'}<IconMore />
                </button>
            }
        </>
    )
}

function CheckBoxInput({ image, checkRemoveImage }) {
    const handleChange = (event) => {
        checkRemoveImage(event.target.value, event.target.checked)
    }
    return (
        <div className={classes.deleteIconWrapper}>
            <Checkbox
                onChange={handleChange}
                value={image}
                icon={<DeleteIcon className={classes.deleteIcon} style={{ color: 'white' }} fontSize="small" />}
                checkedIcon={<DeleteIcon className={classes.deleteIcon} fontSize="small" />}
                name="checkedI"
            /></div>
    )
}

export default GalleryList