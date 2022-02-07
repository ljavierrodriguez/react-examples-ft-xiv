import React from 'react';

class PropsClassComponent extends React.Component {
    render(){
        return (
            <h1>Hola {this.props.name}</h1>
        )
    }
}

PropsClassComponent.propTypes = {
    name: PropTypes.string.isRequired
}

export default PropsClassComponent;