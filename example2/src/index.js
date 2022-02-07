import React from 'react';
import ReactDOM from 'react-dom';
import { ClassComponent } from './components/ClassComponent';
import ClassComponentDefault from './components/ClassComponentDefault';
import { FunctionComponent } from './components/FunctionComponent';
import FunctionComponentDefault from './components/FunctionComponentDefault';


ReactDOM.render(
    <>
        <ClassComponent />
        <FunctionComponent />
        <ClassComponentDefault />
        <FunctionComponentDefault />
    </>,
    document.querySelector('#root')
);