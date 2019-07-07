import React from 'react';
import { Switch, Route } from 'react-router';
import Circles from './views/Circles';
import BarChart from './views/BarChart';
import LineChart from './views/LineChart';

export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/circles" component={Circles} />
                <Route path="/barchart" component={BarChart} />
                <Route path="/linechart" component={LineChart} />
            </Switch>
        </div>
    );
}
