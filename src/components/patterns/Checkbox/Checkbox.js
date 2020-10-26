import React, {useEffect, useState} from 'react';

const classNames = require('classnames');

export const Checkbox = ({
     name,
     label: { label, value },
     labelAdditional,
     additionalClass,
     hotels,
     handleChange,
     isResetFilters,
     resetFilter
 }) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (isResetFilters) setChecked(false);

        if (resetFilter === value) setChecked(false);

    }, [isResetFilters, resetFilter]);

    return (
        <div className={classNames('c-checkbox', { [additionalClass]: !!additionalClass })}>
            <label className="c-checkbox__label">
                <input
                    type="checkbox"
                    name="checkbox"
                    className={checked && !additionalClass ? 'c-checkbox__input--checked' : ''}
                    onClick={() => {
                        handleChange(name, value);
                        setChecked(!checked);
                    }}
                />
                <span className="c-checkbox__icon" />
                <span className="c-checkbox__title">{label} {labelAdditional}</span>
                <span className="c-checkbox__count">{hotels}</span>
            </label>
        </div>
    );
};