import React from 'react';
import UsersPage from "./pages/users/UsersPage";
import ProfilePage from "./pages/profile/ProfilePage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (<>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/profile/:username">
                            <ProfilePage/>
                        </Route>
                        <Route path="/">
                            <UsersPage/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </>
    );
}

export default App;
