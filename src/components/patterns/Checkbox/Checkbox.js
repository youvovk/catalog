import React, {useEffect, useState} from 'react';

import './Checkbox.scss';

export const Checkbox = ({
                         name,
                         label,
                         labelAdditional,
                         hotels,
                         handleChange,
                         isResetFilters
                     }) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(false);
    }, [isResetFilters]);

    return (
        <div className="c-checkbox" >
            <label className="c-checkbox__label">
                <input
                    type="checkbox" name="checkbox"
                    onChange={() => setChecked(!checked)}
                    onClick={() => handleChange(name, label)}
                    checked={checked}
                />
                <span className="c-checkbox__icon" />
                <span className="c-checkbox__title">{label} {labelAdditional}</span>
                <span className="c-checkbox__count">{hotels}</span>
            </label>
        </div>
    );
};