import React from 'react';
import PropTypes from 'prop-types';
import BarChart from 'components/BarChart';

export default function BarChartView(props) {
    const { data } = props;
    return (
        <div>
            <BarChart data={data} />
        </div>
    );
}

BarChartView.defaultProps = {
    data: [10, 20, 30, 40, 50, 60],
};

BarChartView.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
};
