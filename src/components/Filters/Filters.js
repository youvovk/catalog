import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import { Checkbox } from '../patterns/Checkbox/Checkbox';

import './Filters.scss';

const getCategory = (accum, category) => {
    if (typeof category !== 'undefined') {
        if (!accum[category]) {
            return {
                ...accum,
                [category]: 1
            }
        }

        const updatedValue = accum[category] + 1;

        return {
            ...accum,
            [category]: updatedValue
        }
    }

    return { ...accum };
};

const getRegions = array => array.reduce((accum, [id, { address: { addressRegion } }]) => getCategory(accum, addressRegion), {});

const getStars = array => array.reduce((accum, [id, { stars }]) => getCategory(accum, stars), {});

const getTypes = array => array.reduce((accum, [id, { hotel_type_name }]) => getCategory(accum, hotel_type_name), {});

export const Filters = ({
    hotels,
    firstHotels,
    filters,
    sorts,
    setFilter,
    setActiveSort,
}) => {
    const [regions, setRegions] = useState([]);
    const [stars, setStars] = useState([]);
    const [types, setTypes] = useState([]);

    const handleChange = (name, label) => {
        const isLabelExist = filters[name].includes(label);
        const updateFilters = isLabelExist
            ? filters[name].filter(item => item !== label)
            : [...filters[name], label];

        setFilter(updateFilters, name);
    };

    useEffect(() => {
        let regions = [];
        let stars = [];
        let types = [];

        if (firstHotels.length > 0 && hotels.length > 0) {
            regions = getRegions([...firstHotels, ...hotels]);
            stars = getStars([...firstHotels, ...hotels]);
            types = getTypes([...firstHotels, ...hotels]);
        } else if (firstHotels.length > 0) {
            regions = getRegions(firstHotels);
            stars = getStars(firstHotels);
            types = getTypes(firstHotels);
        }

        setRegions(regions);
        setStars(stars);
        setTypes(types);
    }, [firstHotels, hotels]);

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
                <a className="c-filter__map" href="/">
                    <div className="c-filter__map--title">
                        Посмотреть на карте
                    </div>
                </a>
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
                            {Object.keys(stars).length > 0 &&
                                Object.keys(stars)
                                    .sort((a, b) => b - a)
                                    .map((label, index) => (
                                        <Checkbox
                                            key={index}
                                            name="stars"
                                            label={label}
                                            labelAdditional="звёзды"
                                            hotels={stars[label]}
                                            handleChange={handleChange}
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
                            {Object.keys(types).length > 0 &&
                                Object.keys(types).sort().map((label, index) => (
                                    <Checkbox
                                        key={index}
                                        name="types"
                                        label={label}
                                        hotels={types[label]}
                                        handleChange={handleChange}
                                    />
                            ))}
                        </div>
                    </div>
                    <div className="c-filter__item">
                        <div className="c-filter__title">
                            Район
                        </div>
                        <div className="c-filter__list">
                            {Object.keys(regions).length > 0 && (
                                Object.keys(regions).sort().map((label, index) =>
                                    <Checkbox
                                        key={index}
                                        name="regions"
                                        label={label}
                                        hotels={regions[label]}
                                        handleChange={handleChange}
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
                    <a className="c-button c-button--blue c-filter__button c-filter__close" href="javascript:void(0)">
                        Применить фильтры
                    </a>
                </div>
            </form>
        </div>
    )
};

Filters.propTypes = {};
