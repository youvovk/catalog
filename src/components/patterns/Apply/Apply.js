import React from 'react';

export const Apply = ({ items = [], handleChangeFilters = () => {}, handleChangeFilter = () => {} }) => {
    return (
        <div className="c-apply">
            <div className="c-apply__selected">
                {items && items.map(({ label, category, name }) => (
                    <div className="c-apply__item" key={category} onClick={() => handleChangeFilter(name, category)}>
                        {label}
                    </div>
                ))}
            </div>
            <div className="c-apply__reset" onClick={handleChangeFilters}>
                Сбросить все
            </div>
        </div>
    );
};