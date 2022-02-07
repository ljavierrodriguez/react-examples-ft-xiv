import React from 'react';
import ReactDOM from 'react-dom';


class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Class Component </h1>
        )
    }
}

function FunctionComponent(){
    return (
        <h1>Function Component</h1>
    )
}


ReactDOM.render(
    <>
        <ClassComponent />
        <FunctionComponent />
    </>,
    document.querySelector('#root')
);