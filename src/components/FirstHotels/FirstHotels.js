import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';

import { Card } from '../material-ui/Card/Card';

import { Loader } from '../Loader/index';
import { Error } from '../Error/index';

import './FirstHotels.less';

export const FirstHotels = (props) => {
    const {
        hotels,
        firstHotels,
        error,
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

    return firstHotels && Object.entries(firstHotels).map(hotel => {
        return (
            <div key={hotel[0]}>
                {hotel[0]}
                <Card />
            </div>
        );
    })
};

FirstHotels.propTypes = {};

FirstHotels.defaultProps = {};