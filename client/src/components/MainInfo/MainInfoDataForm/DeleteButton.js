import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import classes from '../MainInfo.module.css'

function DeleteButton({ nickname, handleRemoveHero }) {
    const [open, setOpen] = useState(false);
    const history = useHistory()

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

export default DeleteButton