/** Use react hook for operating state */
import { useState } from 'react';

/** Import PropTypes to strict the types of the props */
import PropTypes from 'prop-types';

/** Import UI Material components */
import {
    Box,
    Input,
    Button
} from '@mui/material';

const AddRequestForm = ({addRequestFunction}) => {
  /** Set state for input */
  const [inputValue, setInputValue] = useState(0);

  /** Submit button function */
  const addAndCount = () => {
      addRequestFunction(inputValue);
  };

  return (
    <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
            width: '300px',
            height: 'auto',
            border: 'thin solid #ccc',
            borderRadius: '2px',
            marginTop: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '15px'
        }}
    >
        <Input
            defaultValue={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            placeholder='Enter a number'
            type='number'
            sx={{
                width: 'auto',
                marginBottom: '10px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        />
        <Button variant="contained" onClick={addAndCount}>Count a number</Button>
    </Box>
  )
}

/** Set a type of the props and set up them as a required */
AddRequestForm.propTypes = {
    addRequestFunction: PropTypes.func.isRequired
};

/** Export Module */
export default AddRequestForm;
