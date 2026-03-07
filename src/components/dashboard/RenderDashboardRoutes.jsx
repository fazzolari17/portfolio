import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Fragment } from 'react';


const RenderDashboardRoutes = ({ items }) => {
  const DashboardRoutes = (items) => {
    return Object.entries(items).filter(([key, value]) => value.component ? [key, value] : null).map(([key, value]) => {
      return <Route key={key} path={value.name} element={value.component } />;
    });
  };
  return <Fragment>{DashboardRoutes(items)}</Fragment>;
};

RenderDashboardRoutes.propTypes = {
  items: PropTypes.object
};

export default RenderDashboardRoutes;