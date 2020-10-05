import React from 'react';

import './Checkbox.scss';

export const Checkbox = ({
                         name,
                         label,
                         labelAdditional,
                         hotels,
                         handleChange
                     }) => (
    <div className="c-checkbox">
        <label className="c-checkbox__label">
            <input type="checkbox" name="checkbox" onClick={() => handleChange(name, label)} />
            <span className="c-checkbox__icon" />
            <span className="c-checkbox__title">{label} {labelAdditional}</span>
            <span className="c-checkbox__count">{hotels}</span>
        </label>
    </div>
);