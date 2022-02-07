import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

class ClassSaludo extends React.Component {

    componentDidMount() {
        console.log("Saludo Component Cargado....");
    }

    componentDidUpdate() {
        console.log("Saludo Component actualizado....");
    }

    componentWillUnmount() {
        console.log("Saludo Component eliminado....");
    }

    render() {
        return (
            <h1>
                Hola {this.props.name} {this.props.lastname}
            </h1>
        )
    }
}

class StateClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Luis',
            lastname: 'Rodriguez',
            users: [
                { id: 1, name: 'A', lastname: 'B' },
                { id: 2, name: 'C', lastname: 'D' },
            ],
            show: true
        }
    }

    componentDidMount() {
        console.log("Component Cargado....");
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                {
                    this.state.show ? (
                        <ClassSaludo name={this.state.name} lastname={this.state.lastname} />
                    ) : null
                }
                <button onClick={() => {
                    this.setState({
                        name: 'Pedro'
                    })
                }}> Cambiar Nombre</button>
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>
                    Ocultar Saludo
                </button>
            </>
        )
    }
}

function FunctionSaludo({ name, lastname }) {
    useEffect(() => {
        // componentDidMount
        console.log("Saludo Function Component Cargado...");

        return () => {
            // componentWillUnmount
            console.log("Saludo Function Component Eliminado...");
        }

    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("Saludo Function Component Actualizado...");
    }, [name, lastname])
    return (
        <h1>Hola, {name} {lastname}</h1>
    )
}

function StateFunctionComponent(props) {

    const [state, setState] = useState({
        name: 'Luis',
        lastname: 'Rodriguez'
    })

    const [users, setUsers] = useState([
        { id: 1, name: 'A', lastname: 'B' },
        { id: 2, name: 'C', lastname: 'D' },
    ])

    const [show, setShow] = useState(true);

    useEffect(() => {
        // componentDidMount
        console.log("Function Component Cargado...");

        return () => {
            // componentWillUnmount
            console.log("Function Component Eliminado...");
        }

    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("Function Component Actualizado...");
    }, [state])

    return (
        <>
            {
                show ? (
                    <FunctionSaludo name={state.name} lastname={state.lastname} />
                ) : null
            }
            <button onClick={() => {
                setState({
                    ...state,
                    name: 'Pedro'
                })
            }}> Cambiar Nombre</button>
            <button onClick={() => {
                setShow(!show);
            }}>
                Ocultar Saludo
            </button>
        </>
    )
}


function Saludo() {
    const [notas, setNotas] = useState([]);

    useEffect(() => {

        generarNotas();
        
    }, [])

    const generarNotas = () => {
        for (let i = 0; i < 10; i++) {
            //setNotas([...notas, (Math.floor(Math.random() * 10) + 1) * 2])

            setNotas((prevNotas) => {
                return [...prevNotas, (Math.floor(Math.random() * 10) + 1) * 2]
            })
        }
    }

    return (
        <ul>
            {
                notas.map((nota, i) => {
                    return <li key={i}>{nota}</li>
                })
            }
        </ul>
    )
}


function Login(){
    /* const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); */

    const [avatar, setAvatar] = useState(null);

    function saludo(){
        /* console.log(username);
        console.log(password); */
        console.log(usernameRef.value);
        console.log(passwordRef.value);
        passwordRef.style.backgroundColor = 'green';
        passwordRef.type = 'password'
        passwordRef.style.padding = '10px';
    }

    let usernameRef = useRef();
    let passwordRef = useRef();
    let imgAvatar = useRef();

    return (
        <>
            {/* <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> */}
            <input type="text" placeholder='Username' ref={elem => usernameRef = elem} />
            <input type="text" placeholder='Password' ref={elem => passwordRef = elem} />
            <img src={avatar && avatar} ref={elem => imgAvatar = elem}/>
            <input type="file" onChange={(e) => setAvatar(e.target.files[0]) } />
            <button onClick={() => saludo()}>Login</button>
        </>
    )
}


ReactDOM.render(
    <>
        <StateClassComponent />
        <StateFunctionComponent />
        <Saludo />
        <Login />
    </>,
    document.querySelector('#root')
);
