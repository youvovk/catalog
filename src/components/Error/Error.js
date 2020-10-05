
import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = (props) => {
    const { message, path = 'Home' } = props;

    return (
        <div className="error">
            <p className="error__text">
                {message}
            </p>

            <a href="/" className="error__link">
                {`Got to ${path}`}
            </a>
        </div>
    );
};

Error.propTypes = {
    path: PropTypes.string,
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'Sorry, something went wrong',
    path: 'Home',
};