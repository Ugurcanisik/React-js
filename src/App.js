import './App.css';
import {Router} from "./Router/Router";
import {useLayoutEffect} from "react";
import {initAuth} from "./Store/AuthSlice/AuthSlice";
import {useDispatch} from "react-redux";

function App() {

    // const dispatch = useDispatch()
    //
    // useLayoutEffect(() => {
    //     dispatch(initAuth())
    // }, [])

    return (
        <Router/>
    );
}

export default App;
