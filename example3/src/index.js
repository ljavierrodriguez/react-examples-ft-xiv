import React from 'react';
import ReactDOM from 'react-dom';
import PropsClassComponent from './PropsClassComponent';
import PropsFunctionComponent from './PropsFunctionComponent';

ReactDOM.render(
    <>
        <PropsFunctionComponent name="Luis" />,
        <PropsClassComponent name="Luis" />
    </>,
    document.querySelector('#root')
);