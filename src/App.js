
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { Hotels } from './components/Hotels/index';
import { FirstHotels } from './components/FirstHotels/index';

import { Hotel } from './components/Hotel/index';

import './App.less';

// import { Header } from './components/Header/index';
// import { Footer } from './components/Footer/Footer';

export const App = ({ openedModalWindow }) => (
    <>
        {/*<Header />*/}
        <div className="page">
            <main>
                <FirstHotels />
                <Hotels />
                {/*<Route*/}
                {/*    exact*/}
                {/*    path="/"*/}
                {/*    component={RestaurantsListPage}*/}
                {/*/>*/}

                {/*<Route*/}
                {/*    path="/restaurants/:id"*/}
                {/*    component={RestaurantPage}*/}
                {/*/>*/}
            </main>
        </div>
        {/*<Footer />*/}
    </>
);

App.propTypes = {};