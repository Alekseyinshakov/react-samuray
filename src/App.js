import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App(props) {

    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Navbar/>
                {/*<Profile />*/}
                {/*<Dialogs />*/}
                <Routes>
                    <Route path="/profile" element={<Profile store = {props.store}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs store = {props.store} />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
