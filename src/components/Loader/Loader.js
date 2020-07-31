
import React from 'react';
import './Loader.less';

export const Loader = () => (
    <div className="loader-container">
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);