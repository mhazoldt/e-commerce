import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import About from './components/About'
import Contact from './components/Contact'
import Furniture from './components/Furniture'
import Jewellery from './components/Jewellery'
import Porcelain from './components/Porcelain'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(

<BrowserRouter>
    <BaseLayout>
        <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/furniture" component={Furniture} />
            <Route exact path="/jewellery" component={Jewellery} />
            <Route exact path="/porcelain" component={Porcelain} />
            <Route exact path="/" component={About} />
        </Switch>
    </BaseLayout>
</BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
