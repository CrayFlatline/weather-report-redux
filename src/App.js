import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeCityAction} from './actions/simpleAction';

import './App.css';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    changeCity: (id) => dispatch(changeCityAction(id))
});

class App extends Component {

    btnAction = id => {
        this.props.changeCity(id);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button className="btn" onClick={this.btnAction.bind(this, 3)}>Test redux action</button>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header>
                <pre>
 {JSON.stringify(this.props)}
                </pre>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
