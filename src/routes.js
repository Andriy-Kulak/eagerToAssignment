import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/app';
import DashboardIndex from './components/dashboardIndex';
import DetailOverview from './components/detailOverview';
import {Faq} from './components/faq';
import {About} from './components/about';
import {Contact} from './components/contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardIndex}/>
    <Route path="id/:id" component={DetailOverview}/>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="faq" component={Faq}/>
  </Route>
);
