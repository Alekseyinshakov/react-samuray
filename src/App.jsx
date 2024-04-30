import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Navbar} from "./components/Navbar/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

function App(props) {

    return (
        <BrowserRouter>
            <div className="container">
                <HeaderContainer/>
                <Navbar/>
                {/*<Profile />*/}
                {/*<Dialogs />*/}
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainer />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer  />}/>
                    <Route path="/users/*" element={<UsersContainer  />}/>
                    <Route path="/login/*" element={<Login  />}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
