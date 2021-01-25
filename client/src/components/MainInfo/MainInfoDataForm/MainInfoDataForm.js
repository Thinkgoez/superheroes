import { Formik } from 'formik';
import { TextareaAutosize, TextField, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';


import classes from '../MainInfo.module.css'
import DeleteButton from './DeleteButton'

function MainInfoDataForm({ heroInfo, handleCancel, handleSubmit, handleRemoveHero }) {
    let initialValues = {
        nickname: heroInfo.nickname,
        real_name: heroInfo.real_name,
        catch_phrase: heroInfo.catch_phrase,
        superpowers: heroInfo.superpowers,
        origin_description: heroInfo.origin_description,
        poster_image: heroInfo.poster_image,
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                children={(props) => <FormikForm
                    handleCancel={handleCancel}
                    heroInfo={heroInfo}
                    handleRemoveHero={handleRemoveHero}
                    {...props}

                />}
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
    handleReset,
    handleRemoveHero,
    handleCancel
}) {
    const handleFileInputChange = (event) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            setFieldValue("poster_image", reader.result);
        }
        reader.readAsDataURL(event.currentTarget.files[0]);
    }
    const cancelHandler = (e) => {
        handleCancel(handleReset)
    }
    return (
        <form onSubmit={handleSubmit} className={classes.editMode}>
            <div className={classes.topInfo}>
                <div className={classes.imageWrapper}>
                    <img className={classes.posterImage} src={heroInfo.poster_image} alt={heroInfo.nickname} />
                    <input className={classes.imageInput} type='file'
                        name='poster_image'
                        onChange={handleFileInputChange}
                        accept="image/*"
                        required
                    />
                </div>
                <div className={classes.shortInfo}>
                    <div className={classes.optionsButtonGroup}>
                        <DeleteButton nickname={heroInfo.nickname} handleRemoveHero={handleRemoveHero} />
                        <button onClick={cancelHandler}><CancelIcon />cancel</button>
                        <button type='submit' className={classes.saveIconButton}><SaveIcon />save</button>
                    </div>

                    <span><Typography variant='h6'><b>Nickname: </b></Typography>
                        <TextField
                            name='nickname'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nickname}
                            required
                        />
                    </span>

                    <div className={classes.description}>
                        <span><Typography variant='h6'><b>Real name: </b></Typography>
                            <TextField
                                name='real_name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.real_name}
                                required
                            />
                        </span>
                        <span><Typography variant='h6'><b>Catch phrase: </b></Typography>
                            <TextareaAutosize
                                className={classes.textArea}
                                name='catch_phrase'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.catch_phrase}
                                required
                            />
                        </span>
                        <span><Typography variant='body1'><b>Superpowers: </b></Typography>
                            <TextareaAutosize
                                className={classes.textArea}
                                name='superpowers'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.superpowers}
                                required
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
                        required
                    />
                </span>
            </div>

        </form>
    )
}


export default MainInfoDataForm