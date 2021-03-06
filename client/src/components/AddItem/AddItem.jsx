import React from 'react';
import { useState } from 'react';

// material ui
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

// styles
import './AddItem.css';

function AddItem(props) {
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputText) {
            props.onAdd({ name: inputText });
            setInputText('');
        }
    }

    return (
    <div className="add-container">
        <form onSubmit={handleSubmit} noValidate autoComplete="off" action={void(0)}>
            <TextField className="add-field" onChange={handleChange} value={inputText} label="New Item" />
            <Fab className="add-button" onClick={handleSubmit} color="secondary" aria-label="add">
                <AddIcon />
            </Fab>   
        </form>
    </div>
    );
}

export default AddItem;