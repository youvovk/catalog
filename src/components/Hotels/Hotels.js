import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// patterns
import { Card } from '../material-ui/Card/Card';
import { Dropdown } from '../patterns/Dropdown/index';
import { Line } from '../patterns/Line/Line';
import { Apply } from '../patterns/Apply/Apply';

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
            {filteredHotels.length > 0 && filteredHotels.map(([id, hotel], index) => {
                if (index >= (page * limit - limit) && index < (page * limit)) {
                    return (
                        <div key={index}>
                            {id}
                            <Card
                                title={hotel.name}
                                descriptions={hotel.descriptions}
                                fromCenter={hotel.from_center}
                                address={hotel.address}
                                stars={hotel.stars}
                            />
                        </div>
                    );
                } else {
                    return '';
                }
            })}
        </div>
    );
};

Hotels.propTypes = {};

Hotels.defaultProps = {};