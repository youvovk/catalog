import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// patterns
import { Card } from '../patterns/Card/Card';

import { Loader } from '../Loader/index';
import { Error } from '../Error/index';

import { url } from '../../store/actions';

import './Hotels.scss';

export const Hotels = (props) => {
    const [preparedHotels, prepareHotels] = useState([]);
    const [offsetHotels, setOffsetHotels] = useState(25);
    const [preparedAllHotels, setPreparedAllHotels] = useState(false);
    const [filteredHotels, setFilteredHotels] = useState([]);

    const {
        allHotels,
        hotels,
        firstHotels,
        filters,
        page,
        total,
        limit,
        error,
        sorts,
        isLoading,
        loadHotels,
        setLimit,
        setFilteredHotelsLength,
    } = props;

    useEffect(() => {
        if (offsetHotels < total) {
            prepareHotels([...preparedHotels, url(offsetHotels, limit)]);
            setOffsetHotels(offsetHotels + 50);
        } else if (!!total) {
            setPreparedAllHotels(true);
            setLimit(25);
        }
    }, [firstHotels, offsetHotels]);

    useEffect(() => {
        loadHotels(preparedHotels);
    }, [preparedAllHotels]);

    useEffect(() => {
        // if (hotels.length > 0) {
        //     let filtered = hotels;
        //
        //     if (filters.regions.length > 0) {
        //         filtered = filtered.filter(([id, item]) => filters.regions.includes(item.address.addressRegion))
        //     }
        //
        //     if (filters.stars.length > 0) {
        //         filtered = filtered.filter(([id, item]) => filters.stars.includes(item.stars));
        //     }
        //
        //     setFilteredHotels(filtered);
        // } else if (firstHotels) {
        //     let filtered = firstHotels;
        //
        //     if (filters.regions.length > 0) {
        //         filtered = filtered.filter(([id, item]) => filters.regions.includes(item.address.addressRegion))
        //     }
        //
        //     if (filters.stars.length > 0) {
        //         filtered = filtered.filter(([id, item]) => filters.stars.includes(item.stars));
        //     }
        //
        //     setFilteredHotels(filtered);
        // }

        let filtered = allHotels.length > 0 ? allHotels : [];

        if (filters.regions.length > 0) {
            filtered = filtered.filter(([id, item]) => filters.regions.includes(item.address.addressRegion))
        }

        if (filters.stars.length > 0) {
            filtered = filtered.filter(([id, item]) => filters.stars.includes(item.stars));
        }

        if (filters.types.length > 0) {
            filtered = filtered.filter(([id, item]) => filters.types.includes(item.hotel_type_name));
        }

        if (sorts.includes('id')) {
             filtered = [...filtered].sort((a, b) => Number(b[0]) - Number(a[0]));
        }

        setFilteredHotels(filtered);
        setFilteredHotelsLength(filtered.length);
    }, [filters, firstHotels, hotels, sorts]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div className="c-page">
            <div className="l-row l-row--mt-20 l-row--max-1151-mt-10">
                {filteredHotels.length > 0 && filteredHotels.map(([id, hotel], index) => {
                    if (index >= (page * limit - limit) && index < (page * limit)) {
                        return <Card card={hotel} key={id}/>;
                    } else {
                        return '';
                    }
                })}

                <div className="c-card c-card--catalog">
                    {/*<div className="c-card__left">*/}
                    {/*    <div className="c-slick__wrap">*/}
                    {/*        <div className="c-slick c-slick__card">*/}
                    {/*            <div className="c-card--shadow">*/}
                    {/*                <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*/}
                    {/*                     alt="image" />*/}
                    {/*            </div>*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=1"*!/*/}
                    {/*            /!*          alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=2"*!/*/}
                    {/*            /!*          alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*          alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=2"*!/*/}
                    {/*            /!*          alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=1"*!/*/}
                    {/*            /!*          alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*          alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card__quantity">1 / 3</div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__ribbon max-1151">*/}
                    {/*        Выгодный вариант*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="c-card__center">*/}
                    {/*    <div className="c-card__row">*/}
                    {/*        <a className="c-card__title" href="javascript:void(0)">*/}
                    {/*            Ibis Budget Auckland Airport*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row">*/}
                    {/*        <div className="c-card__square">*/}
                    {/*            <span className="c-card__square--item" />*/}
                    {/*            <span className="c-card__square--item" />*/}
                    {/*            <span className="c-card__square--item" />*/}
                    {/*            <span className="c-card__square--item" />*/}
                    {/*            <span className="c-card__square--item" />*/}
                    {/*        </div>*/}
                    {/*        <span className="c-card__tag--item c-card__tag--single">*/}
                    {/*                        Апарт-отель*/}
                    {/*                    </span>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row max-767">*/}
                    {/*        <div className="c-card__rating">*/}
                    {/*            <div className="c-card__rating--number">*/}
                    {/*                8.7*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__rating--text">*/}
                    {/*                Отличное расположение*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row">*/}
                    {/*        <div className="c-card--group">*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <a className="c-card__location" href="javascript:void(0)"*/}
                    {/*                   title="Урочище Наталка, ул. 2-я линия, 26, Оболонский район, Киев, Украина">*/}
                    {/*                    <svg className="icon icon--pin">*/}
                    {/*                        <use href="images/_sprite.svg#icon--pin" />*/}
                    {/*                    </svg>*/}
                    {/*                    <span className="c-card__location--region">*/}
                    {/*                                    Урочище Наталка,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--address">*/}
                    {/*                                    ул. 2-я линия, 26,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--district">*/}
                    {/*                                    Оболонский район,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--city">*/}
                    {/*                                    Киев,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--country">*/}
                    {/*                                    Украина*/}
                    {/*                                </span>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <div className="c-card__distance">*/}
                    {/*                    200 м от центра*/}
                    {/*                </div>*/}
                    {/*                <div className="c-card__dot" />*/}
                    {/*                <a className="c-card__map" href="javascript:void(0)">*/}
                    {/*                    Показать на карте*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row min-1152">*/}
                    {/*        <div className="c-card__alert">*/}
                    {/*            <div className="c-card__alert--img">*/}
                    {/*                <img src="images/all/attention.svg"  alt="image" />*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__alert--content">*/}
                    {/*                <div className="c-card__alert--title">*/}
                    {/*                    Распродано*/}
                    {/*                </div>*/}
                    {/*                <div className="c-card__alert--text">*/}
                    {/*                    На нашем сайте в этом варианте размещения не осталось номеров на ваши даты:*/}
                    {/*                    <br/>*/}
                    {/*                    ср, 20 февр. 2019 - сб, 23 февр. 2019 (3 ночи)*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="c-card__right min-1152">*/}
                    {/*    <div className="c-card__rating">*/}
                    {/*        <div className="c-card__rating--row">*/}
                    {/*            <div className="c-card__rating--review">*/}
                    {/*                678*/}
                    {/*                <br/>*/}
                    {/*                отзывов*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__rating--number">*/}
                    {/*                8.7*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card__rating--text">*/}
                    {/*            Великолепно*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__buy">*/}
                    {/*        <div className="c-card__buy--hourglass">*/}
                    {/*            <svg className="icon icon--hourglass">*/}
                    {/*                <use href="images/_sprite.svg#icon--hourglass" />*/}
                    {/*            </svg>*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card--fs-16 c-card--fw-600">*/}
                    {/*            Вы не успели!*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card--fs-12 c-card--mt-0">*/}
                    {/*            Попробуйте другие даты*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <div className="c-card c-card--catalog">
                    {/*<div className="c-card__left">*/}
                    {/*    <div className="c-slick__wrap">*/}
                    {/*        <div className="c-slick c-slick__card">*/}
                    {/*            <div className="c-card--shadow">*/}
                    {/*                <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*/}
                    {/*                     alt="image" />*/}
                    {/*            </div>*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=1"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=2"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=1"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=2"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card__quantity">1 / 3</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="c-card__center">*/}
                    {/*    <div className="c-card__row c-card--flex-between c-card--column-max-1151 c-card--align-start">*/}
                    {/*        <div className="c-card__column">*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <a className="c-card__title" href="javascript:void(0)">*/}
                    {/*                    Ibis Budget Auckland Airport*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <div className="c-card__square">*/}
                    {/*                                <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                </div>*/}
                    {/*                <span className="c-card__tag--item c-card__tag--single">*/}
                    {/*                                Апарт-отель*/}
                    {/*                            </span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card__column c-card--mt-6-max-1151">*/}
                    {/*            <div className="c-card__rating">*/}
                    {/*                <div className="c-card__rating--row">*/}
                    {/*                    <div className="c-card__rating--review min-1152">*/}
                    {/*                        678*/}
                    {/*                        <br/>*/}
                    {/*                        отзывов*/}
                    {/*                    </div>*/}
                    {/*                    <div className="c-card__rating--number">*/}
                    {/*                        8.7*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="c-card__rating--text">*/}
                    {/*                    Великолепно*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row">*/}
                    {/*        <div className="c-card--group">*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <a className="c-card__location" href="javascript:void(0)"*/}
                    {/*                   title="Урочище Наталка, ул. 2-я линия, 26, Оболонский район, Киев, Украина">*/}
                    {/*                    <svg className="icon icon--pin">*/}
                    {/*                        <use href="images/_sprite.svg#icon--pin" />*/}
                    {/*                    </svg>*/}
                    {/*                    <span className="c-card__location--region">*/}
                    {/*                                    Урочище Наталка,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--address">*/}
                    {/*                                    ул. 2-я линия, 26,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--district">*/}
                    {/*                                    Оболонский район,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--city">*/}
                    {/*                                    Киев,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--country">*/}
                    {/*                                    Украина*/}
                    {/*                                </span>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <div className="c-card__distance">*/}
                    {/*                    200 м от центра*/}
                    {/*                </div>*/}
                    {/*                <div className="c-card__dot" />*/}
                    {/*                <a className="c-card__map" href="javascript:void(0)">*/}
                    {/*                    Показать на карте*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row min-1152">*/}
                    {/*        <div className="c-card__alert c-card__alert--blue">*/}
                    {/*            <div className="c-card__alert--img">*/}
                    {/*                <img src="images/all/no-disturb.svg"  alt="image" />*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__alert--content">*/}
                    {/*                <div className="c-card__alert--text">*/}
                    {/*                    У нас не осталось номеров на ваши даты: ср, 20 февр. 2019 - сб, 23 февр. 2019 (3*/}
                    {/*                    ночи)*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row min-1152 c-card--mt-10">*/}
                    {/*        На эти даты еще есть номера, но они могут закончиться*/}
                    {/*    </div>*/}
                    {/*    /!*<div className="c-card__row min-1152 c-card--mt-10">*!/*/}
                    {/*    /!*    <div className="c-card__slideset c-slick c-slick__card--slideset c-slick--arrow-m-0">*!/*/}
                    {/*    /!*        <div className="c-card__slideset--item">*!/*/}
                    {/*    /!*            <div className="c-card__slideset--top">*!/*/}
                    {/*    /!*                2 нояб - 3 нояб*!/*/}
                    {/*    /!*                <br/>*!/*/}
                    {/*    /!*                    3 ночи сб - вт*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*            <div className="c-card__slideset--bottom">*!/*/}
                    {/*    /!*                От 3560 UAH*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*        <div className="c-card__slideset--item">*!/*/}
                    {/*    /!*            <div className="c-card__slideset--top">*!/*/}
                    {/*    /!*                2 нояб - 3 нояб*!/*/}
                    {/*    /!*                <br/>*!/*/}
                    {/*    /!*                    3 ночи сб - вт*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*            <div className="c-card__slideset--bottom">*!/*/}
                    {/*    /!*                От 3560 UAH*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*        <div className="c-card__slideset--item">*!/*/}
                    {/*    /!*            <div className="c-card__slideset--top">*!/*/}
                    {/*    /!*                2 нояб - 3 нояб*!/*/}
                    {/*    /!*                <br/>*!/*/}
                    {/*    /!*                    3 ночи сб - вт*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*            <div className="c-card__slideset--bottom">*!/*/}
                    {/*    /!*                От 3560 UAH*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*        <div className="c-card__slideset--item">*!/*/}
                    {/*    /!*            <div className="c-card__slideset--top">*!/*/}
                    {/*    /!*                2 нояб - 3 нояб*!/*/}
                    {/*    /!*                <br/>*!/*/}
                    {/*    /!*                    3 ночи сб - вт*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*            <div className="c-card__slideset--bottom">*!/*/}
                    {/*    /!*                От 3560 UAH*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*        <div className="c-card__slideset--item">*!/*/}
                    {/*    /!*            <div className="c-card__slideset--top">*!/*/}
                    {/*    /!*                2 нояб - 3 нояб*!/*/}
                    {/*    /!*                <br/>*!/*/}
                    {/*    /!*                    3 ночи сб - вт*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*            <div className="c-card__slideset--bottom">*!/*/}
                    {/*    /!*                От 3560 UAH*!/*/}
                    {/*    /!*            </div>*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*    </div>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    <div className="c-card__row c-card--text-right c-card--mt-10 max-1151">*/}
                    {/*        <div className="c-card__mark">*/}
                    {/*            Распродано*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row c-card--red c-card--lh c-card--text-right max-1151">*/}
                    {/*        Объект размещения полностью*/}
                    {/*        <br/>*/}
                    {/*        забронирован на нашем сайте*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <div className="c-card c-card--catalog">
                    {/*<div className="c-card__left">*/}
                    {/*    <div className="c-slick__wrap">*/}
                    {/*        <div className="c-slick c-slick__card">*/}
                    {/*            <div className="c-card--shadow">*/}
                    {/*                <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*/}
                    {/*                     alt="image" />*/}
                    {/*            </div>*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=1"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=2"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=1"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=2"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}

                    {/*            /!*<div className="c-card--shadow">*!/*/}
                    {/*            /!*    <img src="https://dummyimage.com/270x270/8BBAE5/fff.png&amp;text=3"*!/*/}
                    {/*            /!*         alt="image" />*!/*/}
                    {/*            /!*</div>*!/*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card__quantity">1 / 3</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="c-card__center">*/}
                    {/*    <div className="c-card__row c-card--flex-between">*/}
                    {/*        <div className="c-card__column">*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <a className="c-card__title" href="javascript:void(0)">*/}
                    {/*                    Ibis Budget Auckland Airport*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <div className="c-card__square">*/}
                    {/*                                <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__star--item">*/}
                    {/*                                    <svg className="icon icon--star">*/}
                    {/*                                        <use href="images/_sprite.svg#icon--star" />*/}
                    {/*                                    </svg>*/}
                    {/*                                </span>*/}
                    {/*                </div>*/}
                    {/*                <span className="c-card__tag--item c-card__tag--single">*/}
                    {/*                                Апарт-отель*/}
                    {/*                            </span>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card__column min-1152">*/}
                    {/*            <div className="c-card__rating">*/}
                    {/*                <div className="c-card__rating--row">*/}
                    {/*                    <div className="c-card__rating--review">*/}
                    {/*                        678*/}
                    {/*                        <br/>*/}
                    {/*                        отзывов*/}
                    {/*                    </div>*/}
                    {/*                    <div className="c-card__rating--number">*/}
                    {/*                        8.7*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="c-card__rating--text">*/}
                    {/*                    Великолепно*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row">*/}
                    {/*        <div className="c-card--group">*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <a className="c-card__location" href="javascript:void(0)"*/}
                    {/*                   title="Урочище Наталка, ул. 2-я линия, 26, Оболонский район, Киев, Украина">*/}
                    {/*                    <svg className="icon icon--pin">*/}
                    {/*                        <use href="images/_sprite.svg#icon--pin" />*/}
                    {/*                    </svg>*/}
                    {/*                    <span className="c-card__location--region">*/}
                    {/*                                    Урочище Наталка,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--address">*/}
                    {/*                                    ул. 2-я линия, 26,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--district">*/}
                    {/*                                    Оболонский район,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--city">*/}
                    {/*                                    Киев,*/}
                    {/*                                </span>*/}
                    {/*                    <span className="c-card__location--country">*/}
                    {/*                                    Украина*/}
                    {/*                                </span>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <div className="c-card__distance">*/}
                    {/*                    200 м от центра*/}
                    {/*                </div>*/}
                    {/*                <div className="c-card__dot" />*/}
                    {/*                <a className="c-card__map" href="javascript:void(0)">*/}
                    {/*                    Показать на карте*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row">*/}
                    {/*        <div className="c-card--has-icon c-card--fs-12-max-1151 c-card--lh-max-1151">*/}
                    {/*            <img src="images/all/card__bell.svg" alt="image" />*/}
                    {/*            Последний раз забронированно на ваши даты 17 минут назад*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="c-card__row min-1152">*/}
                    {/*        <div className="c-card--has-icon c-card--red">*/}
                    {/*            <img src="images/all/card__search.svg" alt="image" />*/}
                    {/*            Еще 2 человека просматривали этот отель на ваши даты за последние 10 минут*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className="c-card__row c-card--flex-between c-card--column-max-1151 c-card--flex-end-max-1151">*/}
                    {/*        <div className="c-card__column">*/}
                    {/*            <div className="c-card__row min-1152">*/}
                    {/*                <div className="c-card__mark">*/}
                    {/*                    Выгодный вариант*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row">*/}
                    {/*                <div*/}
                    {/*                    className="c-card--fw-600 c-card--lh c-card--text-right-max-1151 c-card--fs-12 max-1151">*/}
                    {/*                    Стандартный двухместный номер*/}
                    {/*                    <br/>*/}
                    {/*                    с 2 отдельными кроватями*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row min-1152">*/}
                    {/*                1 большая двухместная кровать*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row min-1152">*/}
                    {/*                <div className="c-card--fw-600 c-card--blue">*/}
                    {/*                    На нашем сайте остался 1 номер*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="c-card__column">*/}
                    {/*            <div className="c-card__row c-card--text-right c-card--mt-0 c-card--fs-12 max-1151">*/}
                    {/*                <div className="c-card--gray">*/}
                    {/*                    2 ночи, 2 взросых и 2 детей*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row c-card--text-right c-card--mt-0">*/}
                    {/*                <div className="c-card__price c-card--fs-14-max-1151">*/}
                    {/*                    <s className="c-card--fw-300 c-card--fs-12 max-1151">8 879 UAH</s> 8 879 UAH*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row c-card--text-right c-card--mt-0">*/}
                    {/*                <div className="c-card--gray c-card--fs-12">*/}
                    {/*                    + налоги и сборы (UAH 678)*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row c-card--text-right c-card--mt-0">*/}
                    {/*                <div className="c-card--blue c-card--fw-600 c-card--text-transform c-card--fs-12">*/}
                    {/*                    ПРЕДОПЛАТА НЕ ТРЕБУЕТСЯ -*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row c-card--text-right c-card--mt-0">*/}
                    {/*                <div className="c-card--lh c-card--fs-12">*/}
                    {/*                    платите на месте*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="c-card__row c-card--text-right c-card--mt-0">*/}
                    {/*                <div className="c-card--green c-card--fw-600 c-card--fs-12">*/}
                    {/*                    Беслатная отмена*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

Hotels.propTypes = {};

Hotels.defaultProps = {};