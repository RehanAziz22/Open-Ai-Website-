import React from 'react'
import TextField from '@mui/material/TextField';


export default function MyTextField(props) {
    const { required, label, onChange, defaultValue, type,value,disabled,ref ,onBlur} = props
    return (
        <TextField
            fullWidth
            required={required}
            id="outlined-required"
            label={label}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disabled}
            value={value}
            sx={{margin:"0px 2px "}}
            ref={ref}
onBlur={onBlur}
            type={type}
        />
    )
}
