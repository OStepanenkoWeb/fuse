import React from 'react';
import './App.css';
import { Header } from "./components/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { TinderCards } from "./components/cards/TinderCards";
import { SwipeButtons } from "./components/swipeButtons/SwipeButtons";
import { ChatScreen } from "./components/chatScreen/ChatScreen";
import { Chats } from "./components/chats/Chats";

function App() {
    console.log(process.env.TEST_NAME);
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/chat/:person">
                        <Header backButton="/chat"/>
                        <ChatScreen/>
                    </Route>
                    <Route exact path="/">
                        <Header/>
                        <TinderCards/>
                        <SwipeButtons/>
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/"/>
                        <Chats/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
