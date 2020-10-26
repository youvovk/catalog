import React from 'react';

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