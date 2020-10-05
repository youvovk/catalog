
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

import { Hotels } from './components/Hotels/index';
import { FirstHotels } from './components/FirstHotels/index';
import { Filters } from './components/Filters/index';


// import patterns
import { Grid } from './components/patterns/Grid/Grid';
import { Form } from './components/Form/Form';
import { Dropdown } from './components/patterns/Dropdown/index';
import { Line } from './components/patterns/Line/Line';
import { Apply } from './components/patterns/Apply/Apply';

// import styles
import './App.scss';
import './styles/styles.scss';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export const App = ({
                        limit,
                        filters,
                        allHotels,
                        filteredHotelsLength,
                        setPage,
}) => (
    <div className="l-body">
        <div className="l-container">
            <Grid
                left={
                    <>
                        <Form />
                        <Filters />
                    </>
                }
                right={(
                    <>
                        <div className="c-page__hotels">
                            <div className="l-row l-row--flex l-row--between l-row--mt-0 min-1152">
                                <div className="c-title c-title--fs-24 c-title--fw-600 c-title--left">
                                    Отели Лондона: найден 3 391 вариант
                                </div>

                                <Dropdown />
                            </div>

                            <Line />

                            <div className="l-row l-row--mt-20 l-row--max-1151-mt-10">
                                <Apply items={[
                                    { value: '2 звезды', uuid: '2 звезды' },
                                    { value: 'Аппартаменты', uuid: 'Аппартаменты' },
                                    { value: 'Неаполь', uuid: 'Неаполь' }
                                ]} />
                            </div>

                            <FirstHotels />
                            <Hotels />
                        </div>

                        <Pagination
                            count={filters.regions.length > 0 || filters.stars.length > 0
                                ? Math.round(filteredHotelsLength / limit)
                                : Math.round(allHotels.length / limit)
                            }
                            onChange={(event, number) => setPage(number)}
                        />
                    </>
                )}
            />
        </div>
    </div>
);

App.propTypes = {};

