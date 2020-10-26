import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { Checkbox } from '../patterns/Checkbox/Checkbox';

const getCategory = ({ data, way }) => data.reduce((accum, [id, item]) => {
    let category = item[way];

    if (way === 'address') {
        category = item[way].addressRegion;
    }

    if (typeof category !== 'undefined') {

        if (!accum[category]) return { ...accum, [category]: 1 };

        const updatedValue = accum[category] + 1;

        return { ...accum, [category]: updatedValue };
    }

    return { ...accum };
}, {});

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
    const [regions, setRegions] = useState([]);
    const [stars, setStars] = useState([]);
    const [types, setTypes] = useState([]);
    const [prevFilterSelectedInfo, setPrevFilterSelectedInfo] = useState('');
    const [isLabelExist, setIsLabelExist] = useState([]);

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
        let regionsFiltered = regions;
        let starsFiltered = stars;
        let typesFiltered = types;

        if (filteredHotels.length > 0) {
            if (prevFilterSelectedInfo !== 'regions') {
                //console.log(prevFilterInfo, prevFilterInfo !== 'regions', 1)
                regionsFiltered = getCategory({ way: 'address', data: filteredHotels });
            }



            if (prevFilterSelectedInfo !== 'stars') {
                //console.log(prevFilterInfo, prevFilterInfo !== 'stars', 2)
                starsFiltered = getCategory({ way: 'stars', data: filteredHotels });
                //console.log(filteredHotels)
            }



            if (prevFilterSelectedInfo !== 'types') {
                //console.log(prevFilterInfo, prevFilterInfo !== 'types', 3)
                typesFiltered = getCategory({ way: 'hotel_type_name', data: filteredHotels });
            }


        }

        setRegions(regionsFiltered);
        setStars(starsFiltered);
        setTypes(typesFiltered);
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
                                    .map(label => (
                                        <Checkbox
                                            key={label}
                                            name="stars"
                                            additionalClass={stars[label] ? '' : 'disabled'}
                                            label={{ label: label === '0' ? 'без звёзд' : label, value: label }}
                                            labelAdditional={label === '0' ? '' : 'звезды'}
                                            hotels={stars[label] ? stars[label] : 0}
                                            handleChange={handleChange}
                                            isResetFilters={isResetFilters}
                                            resetFilter={resetFilter}
                                        />
                            ))}
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
                                Object.keys(allFilters.types).sort().map(label => (
                                    <Checkbox
                                        key={label}
                                        name="types"
                                        label={{ label: label, value: label }}
                                        additionalClass={types[label] ? '' : 'disabled'}
                                        hotels={types[label] ? types[label] : 0}
                                        handleChange={handleChange}
                                        isResetFilters={isResetFilters}
                                        resetFilter={resetFilter}
                                    />
                            ))}
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Район
                        </div>
                        <div className="c-filter__list">
                            {Object.keys(allFilters.regions).length > 0 && (
                                Object.keys(allFilters.regions).sort().map(label =>
                                    <Checkbox
                                        key={label}
                                        name="regions"
                                        label={{ label: label, value: label }}
                                        additionalClass={regions[label] ? '' : 'disabled'}
                                        hotels={regions[label] ? regions[label] : 0}
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
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Wi-Fi
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Парковка
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Трансфер
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Номера для некурящих
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Размещение с животными
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Фитнес-центр
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Бассейн
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    СПА
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Ресторан
                                                </span>
                                </label>
                            </div>
                            <div className="c-checkbox">
                                <label className="c-checkbox__label">
                                    <input type="checkbox" name="checkbox" />
                                        <span className="c-checkbox__icon" />
                                        <span className="c-checkbox__title">
                                                    Бар
                                                </span>
                                </label>
                            </div>
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
