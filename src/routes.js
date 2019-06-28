import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Swith => Garante que apenas uma rota seja acessada.

import Feed from './pages/Feed';
import New from './pages/New';

//exact => identica.
function Routes() {
    return (
        <Switch> 
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    )
}

export default Routes;