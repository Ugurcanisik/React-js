import {Footer} from "../include/Footer";
import {Router} from '../../Router/Router'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchAsyncCiro} from "../../Store/CiroSlice/CiroSlice";
import {fetchAsyncUser} from "../../Store/UsersSlice/UsersSlice";
import {Outlet} from 'react-router-dom'
import {Header} from "../include/Header";
import {Sidebar} from "../include/Sidebar";
import {useLayoutEffect} from "react";


export const ChildView = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncCiro())
        dispatch(fetchAsyncUser())
    }, [])



    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <div className="main-panel">
                <div className="content">
                    {/*Outlet Buraya Gelecek*/}
                    <Outlet/>
                    {/*Outlet Buraya Gelecek*/}
                </div>
                <Footer/>
            </div>

        </div>
    )
}