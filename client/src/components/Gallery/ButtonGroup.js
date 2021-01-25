// import {useState} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import classes from './Gallery.module.css'

function OptionsButtons({ setOpenEditMode, isEditMode, handleSave, setImage, handleCancel }) {
    const InputFile = () => (
        <>
            <label htmlFor='file'><span className={classes.editIconButton}><AddCircleIcon />add</span></label>
            <input accept="image/*" id='file' type='file' style={{ display: 'none' }} onChange={handleFileInputChange} />
        </>
    )
    
    const handleFileInputChange = (event) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        }
        reader.readAsDataURL(event.currentTarget.files[0]);
    }
    const ButtonGroup = () => (
        isEditMode
            ? <>
                <button className={classes.editIconButton} onClick={handleSave}><SaveIcon />save</button>
                <InputFile />
                <button className={classes.editIconButton} onClick={handleCancel}><CancelIcon />cancel</button>
            </>
            : <>
                <button className={classes.editIconButton} onClick={setOpenEditMode}><EditIcon />edit</button>
            </>
    )
    return <ButtonGroup />

}


export default OptionsButtons