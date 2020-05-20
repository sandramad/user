import React, { Component } from 'react';

class App extends Component {
    // http://127.0.0.1:8000/api/users
    render() {
        return (
            componentDidMount() {
            fetch('http://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then((data) => {
                    this.setState({ contacts: data })
                })
                .catch(console.log)
        }
    );
        componentDidMount() {
            fetch('http://127.0.0.1:8000/api/users')
                .then(res => res.json())
                .then((data) => {
                    this.setState({ contacts: data })
                })
                .catch(console.log)
        }
    }
}

export default App;