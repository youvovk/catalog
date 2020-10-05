
import React from 'react';

import './Input.scss';

export const Input = ({
                        img = '',
                        alt = '',
                        classInput = '',
                        type = '',
                        placeholder = '',
                        required = '',
                        dataTitle = ''
                      }) => (
    <div className={classInput} data-title={dataTitle}>
        <input type={type} placeholder={placeholder} required={required} />
        { img && <img src={img} alt={alt} /> }
    </div>
);