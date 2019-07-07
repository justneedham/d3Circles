import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { draw } from '../../helpers/lineChart';
import './lineChart.css';

export default class LineChart extends Component {
    componentDidMount() {
        draw();
    }

    componentDidUpdate() {
        draw();
    }

    render() {
        return (
            <div className="lineChart" />
        );
    }
}
