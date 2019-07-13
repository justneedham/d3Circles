import React from 'react';
import { Route, Switch } from 'react-router';

const hi = () => (
    <div>hi</div>
);

const bye = () => (
    <div>bye</div>
);

export default function Router(props) {
    const { match: { path } } = props;
    return (
        <div>
            <p>hi</p>
            <Switch>
                <Route path={`${path}/hi`} component={hi} />
                <Route path={`${path}/bye`} component={bye} />
            </Switch>
        </div>
    );
}
