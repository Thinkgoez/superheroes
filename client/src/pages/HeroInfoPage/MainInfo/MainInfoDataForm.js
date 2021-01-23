
import { Formik } from 'formik';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import classes from './MainInfo.module.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function MainInfoDataForm({ heroInfo, handleSubmit, handleRemoveHero }) {
    return (
        <>
            <Formik
                initialValues={{
                    nickname: heroInfo.nickname,
                    real_name: heroInfo.real_name,
                    catch_phrase: heroInfo.catch_phrase,
                    superpowers: heroInfo.superpowers,
                    origin_description: heroInfo.origin_description,
                    poster_image: heroInfo.poster_image,
                }}
                onSubmit={handleSubmit}
                children={(props) => <FormikForm heroInfo={heroInfo} handleRemoveHero={handleRemoveHero} {...props} />}
                className={classes.shortInfo}
            />

        </>
    )
}

function FormikForm({
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    heroInfo,
    setFieldValue,
    handleRemoveHero
}) {
    const handleFileInputChange = (event) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            setFieldValue("poster_image", reader.result);
        }
        reader.readAsDataURL(event.currentTarget.files[0]);
    }
    return (
        <form onSubmit={handleSubmit} className={classes.editMode}>
            <div className={classes.topInfo}>
                <div className={classes.imageWrapper}>
                    <img className={classes.posterImage} src={heroInfo.poster_image} alt={heroInfo.nickname} />
                    <input className={classes.imageInput} type='file'
                        name='poster_image'
                        onChange={handleFileInputChange}
                    />
                </div>
                <div className={classes.shortInfo}>
                    <div className={classes.optionsButtonGroup}>
                        <DeleteButton nickname={heroInfo.nickname} handleRemoveHero={handleRemoveHero} />
                        <button type='submit' className={classes.saveIconButton}><SaveIcon />save</button>
                    </div>

                    <span><Typography variant='h6'><b>Nickname: </b></Typography>
                        <TextField
                            name='nickname'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nickname}
                        />
                    </span>

                    <div className={classes.description}>
                        <span><Typography variant='h6'><b>Real name: </b></Typography>
                            <TextField
                                name='real_name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.real_name}
                            />
                        </span>
                        <span><Typography variant='h6'><b>Catch phrase: </b></Typography>
                            <TextField
                                name='catch_phrase'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.catch_phrase}
                            />
                        </span>
                        <span><Typography variant='body1'><b>Superpowers: </b></Typography>
                            <TextareaAutosize
                                className={classes.textArea}
                                name='superpowers'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.superpowers}
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.bottomInfo}>
                <span><Typography variant='body1'><b>Descriptions: </b></Typography>
                    <TextareaAutosize
                        className={classes.textArea}
                        name='origin_description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.origin_description}
                    />
                </span>
            </div>

        </form>
    )
}

function DeleteButton({ nickname, handleRemoveHero }) {
    const [open, setOpen] = useState(false);
    const history = useHistory()
    console.log(history);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeHero = () => {
        handleRemoveHero()
        history.push('/heroes')
    }
    return (
        <>
            <button type='button' onClick={handleClickOpen} className={classes.deleteIconButton}><DeleteForeverIcon />delete hero</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={classes.confirmDialog}
            >
                <DialogTitle id="alert-dialog-title">{"Remove this superhero?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {nickname} will be removed, you won't be able to recover data.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} autoFocus>Cancel</button>
                    <button onClick={removeHero} className={classes.dialogRemoveButton}>Remove</button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MainInfoDataForm