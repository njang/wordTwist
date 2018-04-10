import React, { Component } from 'react';
import './App.css';
import Reset from './components/Modals/Reset'
import Instruction from './components/Modals/Instruction'
import WinMessage from './components/Modals/WinMessage'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Word Twist</h1>
                <form autoComplete="off" aria-label="text-entry">
                    <input id="guess" type="text" placeholder="Enter text here" autoFocus required></input>
                    <div id="buttonRow">
                        <button type="submit" className="btn btn-primary" id="submit">Submit</button>
                        <button type="button" className="btn btn-success" id="twist">Twist</button>
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modalReset">Reset</button>
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modalInfo">How to Play</button>  
                    </div>      
                </form>
                <div id="twisted"></div>
                <div id="words" className="text-justify d-inline"></div>

                <Reset />
                <Instruction />
                <WinMessage />

                <script src="/src/components/Words_reduced.json"></script>
                <script type="text/javascript" src="/src/components/Logic.js"></script>
            </div>
        );
    }
}

export default App;
