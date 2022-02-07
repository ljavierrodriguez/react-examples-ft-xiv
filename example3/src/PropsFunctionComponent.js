import React from 'react';
import PropTypes from 'prop-types';

function PropsFunctionComponent(props){
    return (
        <h1>Hola, {props.name}</h1>
    )
}

PropsFunctionComponent.propTypes = {
    name: PropTypes.string
}

export default PropsFunctionComponent;