import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function MyRadioButton(props) {
    const {
        label,
        value,
        onChange,
        datasource,
        required,
        disabled,
        displayField,
        valueField } = props
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
                onChange={onChange}
                label={label}
                disabled={disabled}
                required={required}
                fullWidth={true}
            >
                {datasource && datasource.length > 0 ?
                    datasource.map((e, i) => (


                        < FormControlLabel value={e[valueField ? valueField : "id"]} control={< Radio />} label={e[displayField ? displayField : "fullName"]} />

                    ))
                    : null
                }
            </RadioGroup>
        </FormControl>
    );
}
