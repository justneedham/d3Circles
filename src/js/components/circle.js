import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { draw } from '../helpers/circle';

export default class Circle extends Component {
    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate() {
        draw(this.props);
    }

    render() {
        return (
            <div className="viz" />
        );
    }
}

Circle.propTypes = {
    shapes: PropTypes.arrayOf(PropTypes.shape()),
};
