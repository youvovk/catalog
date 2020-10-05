import React, { useState } from 'react';

const classNames = require('classnames');

export const Dropdown = ({ isActiveSort, setIsActiveSort }) => {
    return (
        <div className={classNames('c-select c-select--sort', { 'c-select--active': isActiveSort })}>
            <div className="c-select__selected" onClick={() => setIsActiveSort(!isActiveSort)}>
                Сортировать по
            </div>
            <div className="c-select__dropdown" onClick={() => setIsActiveSort(!isActiveSort)}>
                <div className="c-select__scroll">
                    <div className="c-select__item">
                        <div className="c-select__item--title">
                            Значение-1
                        </div>
                    </div>
                    <div className="c-select__item">
                        <div className="c-select__item--title">
                            Значение-2
                        </div>
                    </div>
                    <div className="c-select__item">
                        <div className="c-select__item--title">
                            Значение-3
                        </div>
                    </div>
                    <div className="c-select__item">
                        <div className="c-select__item--title">
                            Значение-4
                        </div>
                    </div>
                    <div className="c-select__item">
                        <div className="c-select__item--title">
                            Значение-5
                        </div>
                    </div>
                    <div className="c-select__item">
                        <div className="c-select__item--title">
                            Значение-6
                        </div>
                    </div>
                    <div className="c-select__item">
                        <div className="c-select__item--title">
                            Значение-7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};