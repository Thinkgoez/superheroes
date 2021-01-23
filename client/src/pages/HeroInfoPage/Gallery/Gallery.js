import { useState } from "react";
import { connect } from 'react-redux'
import { Dialog, Paper } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


import { removeImage } from '../../../redux/reducers/heroReducer'
import classes from './Gallery.module.css'

function Gallery({ images, removeImage }) {
    const [open, setOpen] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [newImage, setImage] = useState(null);

    const handleClickOpen = (url) => {
        setOpen(true);
        setCurrentImage(url)
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage(null)
    };

    const closeEditMode = () => {
        setEditMode(false)
    }
    const openEditMode = () => {
        setEditMode(true)
    }

    const InputFile = () => (
        <>
            <label for='file'><span className={classes.editIconButton}><AddCircleIcon />add</span></label>
            <input id='file' type='file' style={{ display: 'none' }} onChange={handleFileInputChange} />
        </>
    )

    const ButtonGroup = () => (
        isEditMode
            ? <>
                <button className={classes.editIconButton} ><SaveIcon />save</button>
                <button className={classes.editIconButton} onClick={closeEditMode}><CancelIcon />cancel</button>
            </>
            : <>
                <InputFile />
                <button className={classes.editIconButton} onClick={openEditMode}><EditIcon />edit</button>
            </>
    )
    const handleFileInputChange = (event) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            setImage("poster_image", reader.result);
        }
        reader.readAsDataURL(event.currentTarget.files[0]);
    }
    return (
        <Paper variant="outlined" className={classes.imagesBlock}>
            <div className={classes.optionsButtonGroup}>
                <ButtonGroup />
            </div>
            <SimpleComponent
                isEditMode={isEditMode}
                images={images}
                handleClickOpen={handleClickOpen}
                removeImage={removeImage}
            />
            <Dialog
                disableScrollLock
                open={open}
                onClose={handleClose}
                maxWidth='lg'
            >
                <img src={currentImage} className={classes.modalImage} />
            </Dialog>

        </Paper>
    )
}

function SimpleComponent({ isEditMode, images, handleClickOpen, removeImage }) {
    let [isShowMore, setShowMore] = useState(false)
    let visibleImages = []
    let imagesLength = 8

    if (images.length <= 8 || isShowMore) { imagesLength = images.length }
    visibleImages = images.slice(0, imagesLength)

    const handleMore = () => { setShowMore(!isShowMore) }
    const IconMore = () => isShowMore ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
    const ButtonMore = () => (
        <button className={classes.buttonMore} onClick={handleMore}>
            {isShowMore ? 'Hide' : 'ShowMore'}<IconMore />
        </button>
    )

    return (
        <>
            <ul className={classes.flexList}>
                {
                    visibleImages.map((image, id) => (
                        <li
                            key={id}
                            className={classes.galleryFlexItem}
                            onClick={() => handleClickOpen(image)}
                        >
                            <img src={image} alt={'gallerItemImage'} className={classes.galleryImageItem} />
                            {isEditMode
                                ? <button
                                    className={classes.deleteImageIcon}
                                    onClick={() => removeImage(image)}
                                ><DeleteIcon /></button>
                                : ''
                            }
                        </li>
                    ))
                }

            </ul>
            <ButtonMore />
        </>
    )
}

const mStateToProps = (state) => ({
    images: state.heroes.currentHero.images
})

export default connect(mStateToProps, { removeImage })(Gallery)