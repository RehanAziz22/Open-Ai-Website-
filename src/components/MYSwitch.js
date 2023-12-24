import * as React from 'react';
import Switch from '@mui/material/Switch';


export default function MySwitch(props) {
  const { onChange, label, value, disabled } = props
  return (
    <div>
      <Switch checked={value} disabled={disabled} label={label} onChange={onChange} />
    </div>
  );
}
