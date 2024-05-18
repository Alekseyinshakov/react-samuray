import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {withRouter} from "./hoc/withRouter";
import {initializeApp} from "./Redux/app-reduser";
import {Preloader} from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }
        return (

                <div className="container">
                    <HeaderContainer/>
                    <Navbar/>
                    {/*<Profile />*/}
                    {/*<Dialogs />*/}
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer />}/>
                        <Route path="/dialogs" element={<DialogsContainer  />}/>
                        <Route path="/users/*" element={<UsersContainer  />}/>
                        <Route path="/login" element={<Login  />}/>
                    </Routes>
                </div>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    connect(mapStateToProps, { initializeApp }),
    withRouter,
    // withAuthRedirect
)
(App)

export const SamuraiJSApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}


