import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxLabel = ({
    label,
    labelAddition,
    name,
    checked,
    handleChange
}) => {
    const labelWithAddition = labelAddition ? `${label} ${labelAddition}` : label;
    return (
        <FormControlLabel
            control={<Checkbox
                checked={checked}
                onChange={(event) => handleChange(event, label)}
                name={name}
            />}
            label={labelWithAddition}
        />
    );
};

export default CheckboxLabel;