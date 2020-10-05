import React from 'react';

export const Apply = ({ items = [] }) => {
    return (
        <div className="c-apply">
            <div className="c-apply__selected">
                {
                    items && items.map(({ value, uuid }) => (
                        <div className="c-apply__item" key={uuid}>
                            {value}
                        </div>
                    ))
                }
            </div>
            <div className="c-apply__reset">
                Сбросить все
            </div>
        </div>
    );
};