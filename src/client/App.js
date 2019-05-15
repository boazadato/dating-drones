import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            greeting: ''
        };
    }

    state = { username: null };

    // componentDidMount() {
    //   fetch('/api/runOnCsv')
    //     .then(res => res.json())
    //     .then(user => this.setState({ username: user.username }));
    // }

    handleRowsChange = (event) => {
        this.setState({ rows: event.target.value });
    };

    handleColsChange = (event) => {
        this.setState({ cols: event.target.value });
    };


    handleTestCsv = (event) => {
        event.preventDefault();
        fetch(`/api/runOnCsv?name=${encodeURIComponent(this.state.name)}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    };

    handleTestFileDir = (event) => {
        event.preventDefault();
        fetch(`/api/createDir?rows=${this.state.rows}&columns=${this.state.cols}`);
    };

    render() {
        const { username } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <form onSubmit={this.handleTestCsv}>
                        <button type="submit">Test CSV</button>
                    </form>
                    <form onSubmit={this.handleTestFileDir}>
                        <input
                            id="rows"
                            type="number"
                            value={this.state.rows}
                            onChange={this.handleRowsChange}
                        />
                        <input
                            id="rows"
                            type="number"
                            value={this.state.cols}
                            onChange={this.handleColsChange}
                        />
                        <button type="submit">Test File dir</button>
                    </form>
                    <p>{this.state.greeting}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}
