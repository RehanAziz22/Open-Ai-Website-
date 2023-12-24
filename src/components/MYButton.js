import React from 'react'
import Button from '@mui/material/Button';

export default function MyButton(props) {
    let { label, onClick, disabled, variant ,backgroundColor} = props;
    return (
        <Button variant={variant ?? "contained"}
            sx={{ backgroundImage: backgroundColor?"none": "linear-gradient( 109.6deg, rgb(107 155 227) 11.2%, rgba(110,123,251,1) 91.1% );", backgroundColor:backgroundColor}}
            disabled={disabled}
            fullWidth
            onClick={onClick}>
            {label}
        </Button>
    )
}
