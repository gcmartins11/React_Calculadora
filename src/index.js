import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Fragment>
        <h1>Calculadora</h1>
        <Calculator/>
    </Fragment>
    // [<h1>Calculadora</h1>, <Calculator/>]
    , document.getElementById('root'));

serviceWorker.unregister();
