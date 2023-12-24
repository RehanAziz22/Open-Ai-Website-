import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { getData } from '../config/firebasemethods';

export default function MySelect(props) {
    const {
        label,
        value,
        onChange,
        datasource,
        required,
        disabled,
        displayField,
        nodeName,
        valueField } = props
    let [dtSource, setDtSource] = React.useState()

    let getDataSource = () => {
        if (nodeName) {
            // getData(`${nodeName}/`)
            //     .then((res) => { setDtSource(res) })
            //     .catch((err) => { console.log(err) })
        }
    }

    React.useEffect(() => {
        getDataSource()
    }, [])

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    disabled={disabled}
                    required={required}
                    fullWidth={true}
                    onChange={onChange}
                    defaultValue={"Services"}
                >
                    {dtSource ? (dtSource && dtSource.length > 0 ?
                        dtSource.map((e, i) => (
                            <MenuItem value={e[valueField ? valueField : "id"]} key={i}>
                                {e[displayField ? displayField : "fullName"]}
                            </MenuItem>))
                        : null
                    ):
                    (datasource && datasource.length > 0 ?
                        datasource.map((e, i) => (
                            <MenuItem value={e[valueField ? valueField : "id"]} key={i}>
                                {e[displayField ? displayField : "fullName"]}
                            </MenuItem>))
                        : null
                    )}
                </Select>
            </FormControl>
        </>
    )
}
