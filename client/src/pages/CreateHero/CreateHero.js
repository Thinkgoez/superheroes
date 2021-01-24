import { Paper, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox';
import CancelIcon from '@material-ui/icons/Cancel'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { createHero } from '../../redux/reducers/heroReducer'
import classes from './CreateHero.module.css'

function CreateHero({ createHero }) {
    const history = useHistory()
    let initialValues = {
        nickname: '',
        real_name: '',
        catch_phrase: '',
        superpowers: '',
        origin_description: '',
        poster_image: '',
    }

    const handleSubmit = (data) => {
        createHero(data);
        history.push('/heroes')
    }

    return (
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.mainInfoBlock}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    children={(props) => <FormikForm {...props} />}
                    className={classes.shortInfo}
                />
            </Paper>
        </div>
    )
}


function FormikForm({
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleReset
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
                    <img className={classes.posterImage} src={values.poster_image || 'https://запорожье.ремонт-холодильников.org/wp-content/uploads/2014/09/default-placeholder.png'} />
                    <input className={classes.imageInput} type='file'
                        name='poster_image'
                        onChange={handleFileInputChange}
                    />
                </div>
                <div className={classes.shortInfo}>
                    <div className={classes.optionsButtonGroup}>
                        <button onClick={handleReset}><CancelIcon />cancel</button>
                        <button type='submit' className={classes.saveIconButton}><AddBoxIcon />add new hero</button>
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
                            <TextareaAutosize
                                className={classes.textArea}
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

export default connect(null, { createHero })(CreateHero)