import React, { Component } from 'react'

import Chronometer from './components/ChronometerHook'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        height: 100vh;
        background: #923cb5 linear-gradient(0deg, #923cb5 0%, #000000 74%) no-repeat;
        color:#C997f1;
        text-align:center;
    }
`

class App extends Component {

    render() {
        return (
            <>
                <GlobalStyle />
                <h1>Chronometer</h1>
                <Chronometer />
            </>
        )
    }
}


export default App;