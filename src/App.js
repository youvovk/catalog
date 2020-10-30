
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';

import { Hotels } from './components/Hotels/index';
import { FirstHotels } from './components/FirstHotels/index';
import { Filters } from './components/Filters/index';
import Preloader from './components/Preloader/Preloader';


// import patterns
import { Grid } from './components/patterns/Grid/Grid';
import { Form } from './components/Form/Form';
import { Dropdown } from './components/patterns/Dropdown/index';
import { Line } from './components/patterns/Line/Line';
import { Apply } from './components/patterns/Apply/Apply';

// import material-ui
import { LinearBuffer as ProgressBar } from './components/material-ui/ProgressBar';

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
                        total,
                        setPage,
                        resetFilters,
                        resetFilter,
                        loadFirstHotel,
}) => {
    useEffect(() => {
        loadFirstHotel(0, 25);
    }, []);

    if (allHotels.length === 0) {
        return <Preloader />
    }

    const isFiltersSelected = filters.districts.length > 0
        || filters.stars.length > 0
        || filters.types.length > 0
        || filters.facilities.length > 0;

    return (
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
                                        {isFiltersSelected ? ` ${filteredHotelsLength} ` : ` ${allHotels.length} `}
                                        вариантов
                                    </div>

                                    <Dropdown />
                                </div>

                                <Line />

                                {total > 0 && <ProgressBar total={total} length={allHotels.length} />}

                                {isFiltersSelected
                                        ? (
                                            <div className="l-row l-row--mt-20 l-row--max-1151-mt-10">
                                                <Apply
                                                    items={[
                                                        ...filters.types.map(category => ({ label: category, category, name: 'types' })),
                                                        ...filters.districts.map(category => ({ label: category, category, name: 'districts' })),
                                                        ...filters.stars.map(category => ({ label: `${category} звезды`, category, name: 'stars' })),
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
                                count={isFiltersSelected
                                        ? Math.round(filteredHotelsLength / limit)
                                        : Math.round(allHotels.length / limit)
                                }
                                onChange={(event, number) => setPage(number)}
                                showFirstButton
                                showLastButton
                                variant="outlined"
                                shape="rounded"
                            />
                        </>
                    )}
                />
            </div>
        </div>
    )
};

App.propTypes = {};



