import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';

import { Card } from '../material-ui/Card/Card';

import { Loader } from '../Loader/index';
import { Error } from '../Error/index';

import './Hotels.less';

export const Hotels = (props) => {
    const {
        hotels,
        firstHotels,
        preparedHotels,
        total,
        offset,
        limit,
        error,
        isLoading,
        loadHotels,
        prepareHotels,
        setOffset,
        loadFirstHotel,
    } = props;

    useEffect(() => {
        if (firstHotels) {
            const loadedAll = offset > total;
            //console.log(loadedAll, 'Hotels', offset)
            //loadHotels(offset, limit, loadedAll, total);

            prepareHotels(offset, limit);
            console.log(preparedHotels)
        }
    }, [firstHotels, offset]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div className="c-hotels__wrapper">
            {hotels && Object.entries(hotels).map(hotel => {
                return <Card key={hotel[0]} />
            })}

            {/*<Pagination count={total} renderItem={() => (*/}
            {/*    <PaginationItem {...item} />*/}
            {/*)} />*/}
        </div>
    );
};

Hotels.propTypes = {};

Hotels.defaultProps = {};