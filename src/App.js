
import React from 'react';
import PropTypes from 'prop-types';
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
                        resetFilters,
                        resetFilter,
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
                                    Отели Лондона: найден
                                    {
                                        filters.districts.length > 0
                                        || filters.stars.length > 0
                                        || filters.types.length > 0
                                        || filters.facilities.length > 0
                                            ? ` ${filteredHotelsLength} `
                                            : ` ${allHotels.length} `
                                    }
                                    вариантов
                                </div>

                                <Dropdown />
                            </div>

                            <Line />

                            {
                                filters.districts.length > 0
                                || filters.stars.length > 0
                                || filters.types.length > 0
                                || filters.facilities.length > 0
                                ? (
                                    <div className="l-row l-row--mt-20 l-row--max-1151-mt-10">
                                        <Apply
                                            items={[
                                                ...filters.types.map(category => ({ label: category, category, name: 'types' })),
                                                ...filters.districts.map(category => ({ label: category, category, name: 'districts' })),
                                                ...filters.stars.map(category => ({ label: category, category, name: 'stars' })),
                                                ...filters.facilities.map(category => ({ label: category, category, name: 'facilities' }))
                                            ]}
                                            handleChangeFilters={resetFilters}
                                            handleChangeFilter={resetFilter}
                                        />
                                    </div>
                                )
                                : ''
                            }

                            <FirstHotels />
                            <Hotels />
                        </div>

                        <Pagination
                            count={
                                filters.districts.length > 0
                                || filters.stars.length > 0
                                || filters.types.length > 0
                                || filters.facilities.length > 0
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



