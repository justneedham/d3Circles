import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Circles from 'components/circle';

export default class App extends PureComponent {
    state = {
        color: '',
        width: '',
        toDraw: [],
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { width, color, toDraw } = this.state;
        const newShape = {
            color,
            width,
        };
        this.setState({
            toDraw: [...toDraw, newShape],
        });
    };

    onChange = (event) => {
        const { target: { value, name } } = event;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { color, toDraw } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <select name="color" onChange={this.onChange} value={color}>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <input name="width" onChange={this.onChange} />
                    <button type="submit">Draw!</button>
                </form>
                {
                    toDraw.length >= 1 && <Circles shapes={toDraw} />
                }
            </div>
        );
    }
}
