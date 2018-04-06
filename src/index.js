import React from 'react';
import ReactDOM from 'react-dom';
import PersonalSite from './Containers/PersonalSite/PersonalSite';
import './Styles/styles.scss';

ReactDOM.render(<PersonalSite />, document.getElementById('app'));

module.hot.accept();