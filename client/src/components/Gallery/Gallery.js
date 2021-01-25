import { useState } from "react";
import { connect } from 'react-redux'
import { Dialog, Paper } from "@material-ui/core";

import { removeImages, addNewImage } from '../../redux/reducers/heroReducer'
import classes from './Gallery.module.css'
import GalleryList from './GalleryList'
import ButtonGroup from './ButtonGroup'

function Gallery({ images, removeImages, addNewImage, heroID }) {
    const [open, setOpen] = useState(false);
    const [newImage, setImage] = useState(null);
    const [isEditMode, setEditMode] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    let deleteImages = []

    const checkRemoveImage = (image, checked = true) => {
        if (checked) { deleteImages.push(image) }
        else deleteImages = deleteImages.filter(item => item !== image)
    }
    const handleOpenCurrentImage = (url) => {
        setOpen(true);
        setCurrentImage(url)
    }
    const handleCloseCurrentImage = () => {
        setOpen(false);
        setCurrentImage(null)
    }
    const setOpenEditMode = () => {
        setEditMode(true)
    }
    const handleSave = () => {
        if (newImage) addNewImage(heroID, newImage)
        if(deleteImages.length !== 0) removeImages(heroID, deleteImages)
        setEditMode(false)
    }
    const handleCancel = () => {
        setEditMode(false)
        setImage(null)
        deleteImages = []
    }

    return (
        <Paper variant="outlined" className={classes.imagesBlock}>
            <div className={classes.optionsButtonGroup}>
                <ButtonGroup
                    setEditMode={setEditMode}
                    isEditMode={isEditMode}
                    handleSave={handleSave}
                    setImage={setImage}
                    handleCancel={handleCancel}
                    setOpenEditMode={setOpenEditMode}
                />
            </div>
            
            <GalleryList
                isEditMode={isEditMode}
                images={images}
                handleOpenImage={handleOpenCurrentImage}
                checkRemoveImage={checkRemoveImage}
                newImage={newImage}
            />
            <Dialog
                disableScrollLock
                open={open}
                onClose={handleCloseCurrentImage}
                maxWidth='lg'
            >
                <img src={currentImage} className={classes.modalImage} />
            </Dialog>
        </Paper>
    )
}


const mStateToProps = (state) => ({
    images: state.heroes.currentHero.images,
    heroID: state.heroes.currentHero._id
})

export default connect(mStateToProps, { removeImages, addNewImage })(Gallery)