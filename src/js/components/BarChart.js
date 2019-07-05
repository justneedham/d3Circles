import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { draw } from '../helpers/barChart';

export default class BarChart extends Component {
    componentDidMount() {
        const { data } = this.props;
        draw(data);
    }

    componentDidUpdate() {
        const { data } = this.props;
        draw(data);
    }

    render() {
        return (
            <div className="barChart" />
        );
    }
}

BarChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
};
