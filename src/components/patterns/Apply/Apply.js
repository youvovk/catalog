import React from 'react';

export const Apply = ({ items = [], handleChange = () => {} }) => {
    return (
        <div className="c-apply">
            <div className="c-apply__selected">
                {items && items.map(value => (
                    <div className="c-apply__item" key={value}>
                        {value}
                    </div>
                ))}
            </div>
            <div className="c-apply__reset" onClick={handleChange}>
                Сбросить все
            </div>
        </div>
    );
};