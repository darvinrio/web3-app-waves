import ReactDOM from "react-dom";
import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    authFunc() {
        const authData = { data: "Auth on my site"}
        if (WavesKeeper) {
            WavesKeeper.auth( authData)
            .then( auth => {
                console.log(  auth )
            })
            .catch( error => {
                console.error( error )
            })
        }
        else {
            alert("Waves Keeper not installed")
        }
    }
    render() {
        return (
            <div className = "container">
                <input className = "btn btn-primary" type = "submit" value = "Auth" onClick = {this.authFunc}/>
            </div>
        )
    }
}

const app = document.getElementById('app')
if (app){
    ReactDOM.render(<App/>,app)
}