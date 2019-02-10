import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { NavigationPanel } from './components/NavigationPanel'
import { About } from './components/About'
import { Services } from './components/Services'
import { Contacts } from './components/Contacts'
import { OurWorks } from "./components/OurWorks"

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <NavigationPanel></NavigationPanel>
                    <Switch>
                        <Route path = '/about' children = {()=> (
                            <About/>
                        )}/>
                        <Route path = '/services' children = {() => (
                            <Services/>
                        )}/>
                        <Route path = '/contacts' children = {() => (
                            <Contacts/>
                        )}/>
                        <Route path = '/ourWorks' children = {() => (
                            <OurWorks/>
                        )}/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>

        );
    }
}

export default App;
