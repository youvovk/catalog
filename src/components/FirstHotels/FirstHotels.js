import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// patterns
import { Card } from '../patterns/Card/index';

import { Loader } from '../Loader/index';
import { Error } from '../Error/index';

import './FirstHotels.scss';

export const FirstHotels = (props) => {
    const {
        firstHotels,
        hotels,
        filters,
        page,
        error,
        sorts,
        isLoading,
        loadFirstHotel,
    } = props;

    useEffect(() => {
        loadFirstHotel(0, 25);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    if (hotels.length > 0) {
        return '';
    }

    return firstHotels.length > 0 && (
        <div className="c-page">
            <div className="l-row l-row--mt-20 l-row--max-1151-mt-10">
                {firstHotels.map(([id, hotel]) => <Card card={hotel} key={id}/>)}
            </div>
        </div>
    )
};

FirstHotels.propTypes = {};

FirstHotels.defaultProps = {};