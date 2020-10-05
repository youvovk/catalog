import React from 'react';

import './Grid.scss';

export const Grid = ({
                        left,
                        right
                    }) => (
    <section className="c-grid">
        <div className="c-grid__left">
            {left}
        </div>
        <div className="c-grid__right">
            {right}
        </div>
    </section>
);