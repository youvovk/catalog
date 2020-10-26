import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Map = ({ children, match }) => (
    <Link to={`${match.path}/map`}>{children}</Link>
)

export const MapWithRouter = withRouter(Map);