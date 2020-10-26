import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { Checkbox } from '../patterns/Checkbox/Checkbox';
import { getCategory, setClassForFilterItem } from '../../fixtures/index';

export const Filters = ({
    allHotels,
    filteredHotels,
    filters,
    sorts,
    setFilter,
    setActiveSort,
    isResetFilters,
    resetFilter,
    allFilters
}) => {
    const [districts, setDistricts] = useState([]);
    const [stars, setStars] = useState([]);
    const [types, setTypes] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [prevFilterSelectedInfo, setPrevFilterSelectedInfo] = useState('');
    const [isLabelExist, setIsLabelExist] = useState(false);

    const handleChange = (name, label) => {
        const isLabelExist = filters[name].includes(label);
        const updatedFilters = isLabelExist
            ? filters[name].filter(item => item !== label)
            : [...filters[name], label];

        setFilter(updatedFilters, name);
        setPrevFilterSelectedInfo(name);
        setIsLabelExist(isLabelExist);
    };

    useEffect(() => {
        let districtsFiltered = districts;
        let starsFiltered = stars;
        let typesFiltered = types;
        let facilitiesFiltered = facilities;

        if (filteredHotels.length > 0) {
            if (prevFilterSelectedInfo !== 'districts'
                || (prevFilterSelectedInfo === 'districts' && isLabelExist && filters.districts.length === 0))
            {
                districtsFiltered = getCategory({ way: 'address', data: filteredHotels });
            }

            if (prevFilterSelectedInfo !== 'stars'
                || (prevFilterSelectedInfo === 'stars' && isLabelExist && filters.stars.length === 0))
            {
                starsFiltered = getCategory({ way: 'stars', data: filteredHotels });
            }

            if (prevFilterSelectedInfo !== 'types'
                || (prevFilterSelectedInfo === 'types' && isLabelExist && filters.types.length === 0))
            {
                typesFiltered = getCategory({ way: 'hotel_type_name', data: filteredHotels });
            }

            if (prevFilterSelectedInfo !== 'facilities'
                || (prevFilterSelectedInfo === 'facilities' && isLabelExist && filters.facilities.length === 0))
            {
                facilitiesFiltered = getCategory({ way: 'name', data: filteredHotels.reduce((accum, [id, hotel]) => (
                    [ ...accum, ...Object.entries(hotel.facilities)]
                ), []) });
            }
        }

        setDistricts(districtsFiltered);
        setStars(starsFiltered);
        setTypes(typesFiltered);
        setFacilities(facilitiesFiltered);
    }, [filteredHotels]);

    const setSort = sort => {
        const updateSort = sorts.includes(sort)
            ? sorts.filter(sort => sort !== sort)
            : [ ...sorts, sort ];

        setActiveSort(updateSort);
    };

    return (
        <div className="c-filters">

            {/*<Button variant="contained" color="primary" onClick={() => setSort('id')}>Sort by id</Button>*/}

            <form className="c-filter" id="c-filter">
                <div className="c-filter__map">
                    <div className="c-filter__map--title">
                        Посмотреть на карте
                    </div>
                </div>
                <div className="c-filter__header">
                    <div className="c-filter__header--title c-filter__close">
                        Фильтры
                    </div>
                    <div className="c-filter__header--reset">
                        Сбросить
                    </div>
                </div>
                <div className="c-filter__main">
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Количество звезд
                        </div>
                        <div className="c-filter__list">
                            {Object.keys(allFilters.stars).length > 0 &&
                                Object.keys(allFilters.stars)
                                    .sort((a, b) => b - a)
                                    .map(label =>
                                        <Checkbox
                                            key={label}
                                            name="stars"
                                            additionalClass={setClassForFilterItem (prevFilterSelectedInfo, stars[label])}
                                            label={{ label: label === '0' ? 'без звёзд' : label, value: label }}
                                            labelAdditional={label === '0' ? '' : 'звезды'}
                                            hotels={stars[label] ? stars[label] : 0}
                                            handleChange={handleChange}
                                            isResetFilters={isResetFilters}
                                            resetFilter={resetFilter}
                                        />
                                    )}
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Налоги
                        </div>
                        <div className="c-filter__list">
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Включая налоги
                                                </span>
                                        <span className="c-checkbox__count">
                                                    675
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Не включая налоги
                                                </span>
                                        <span className="c-checkbox__count">
                                                    675
                                                </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Тип размещения
                        </div>
                        <div className="c-filter__list">
                            {Object.keys(allFilters.types).length > 0 &&
                                Object.keys(allFilters.types).sort().map(label =>
                                    <Checkbox
                                        key={label}
                                        name="types"
                                        label={{ label: label, value: label }}
                                        additionalClass={setClassForFilterItem (prevFilterSelectedInfo, types[label])}
                                        hotels={types[label] ? types[label] : 0}
                                        handleChange={handleChange}
                                        isResetFilters={isResetFilters}
                                        resetFilter={resetFilter}
                                    />
                                )}
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Район
                        </div>
                        <div className="c-filter__list">
                            {Object.keys(allFilters.districts).length > 0 && (
                                Object.keys(allFilters.districts).sort().map(label =>
                                    <Checkbox
                                        key={label}
                                        name="districts"
                                        label={{ label: label, value: label }}
                                        additionalClass={setClassForFilterItem (prevFilterSelectedInfo, districts[label])}
                                        hotels={districts[label] ? districts[label] : 0}
                                        handleChange={handleChange}
                                        isResetFilters={isResetFilters}
                                        resetFilter={resetFilter}
                                    />
                                )
                            )}
                            <div className="c-filter__more">
                                Показать еще
                            </div>
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Рейтинг TripAdvisor
                        </div>
                        <div className="c-filter__list">
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    <span className="c-filter__advisor">
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                    </span>
                                                </span>
                                        <span className="c-checkbox__count">
                                                    675
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    <span className="c-filter__advisor">
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span className="c-filter__advisor--item" />
                                                    </span>
                                                </span>
                                        <span className="c-checkbox__count">
                                                    675
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    <span className="c-filter__advisor">
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span className="c-filter__advisor--item" />
                                                        <span className="c-filter__advisor--item" />
                                                    </span>
                                                </span>
                                        <span className="c-checkbox__count">
                                                    675
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    <span className="c-filter__advisor">
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span
                                                            className="c-filter__advisor--item c-filter__advisor--active" />
                                                        <span className="c-filter__advisor--item" />
                                                        <span className="c-filter__advisor--item" />
                                                        <span className="c-filter__advisor--item" />
                                                    </span>
                                                </span>
                                        <span className="c-checkbox__count">
                                                    675
                                                </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Удобства
                        </div>
                        <div className="c-filter__list">
                            {Object.keys(allFilters.facilities).length > 0 && (
                                Object.keys(allFilters.facilities).sort().map(label =>
                                    <Checkbox
                                        key={label}
                                        name="facilities"
                                        label={{ label: label, value: label }}
                                        additionalClass={setClassForFilterItem (prevFilterSelectedInfo, facilities[label])}
                                        hotels={facilities[label] ? facilities[label] : 0}
                                        handleChange={handleChange}
                                        isResetFilters={isResetFilters}
                                        resetFilter={resetFilter}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Отели по типам
                        </div>
                        <div className="c-filter__list">
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Отели Кракова 5 звезд
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Отели Кракова 4 звезды
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Отели Кракова 3 звезды
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Недорогие отели Кракова
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Апарт отели
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Апартаменты Лондона
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Хостелы лондона
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox c-checkbox--no-check">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                            Виллы Лондона
                                        </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-filter__footer">
                    <a className="c-button c-button--blue c-filter__button c-filter__close">
                        Применить фильтры
                    </a>
                </div>
            </form>
        </div>
    )
};

Filters.propTypes = {};
