
import React from 'react';

import './Row.scss';

export const Row = ({ children, className = '' }) => (
    <div className={className}>
        {children}
    </div>
);