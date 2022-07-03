import {useRoutes, Navigate} from "react-router-dom";
import {Dashboard} from "../Views/Dashboard/Dashboard";
import {Ciro} from "../Views/Ciro/Ciro";
import {Users} from "../Views/Users/Users";
import {Auth} from "../Views/Auth/Auth";
import {ChildView} from "../Views/ChildView/ChildView";


export const Router = () => {


    const Routes = [
        {
            path: '/',
            element: <ChildView/>,
            children: [
                {
                    path: '',
                    element: <Navigate to="dashboard"/>
                },
                {
                    path: '/dashboard',
                    element: <Dashboard/>
                },
                {
                    path: '/ciro',
                    element: <Ciro title="Gelir İşlemleri"/>
                },
                {
                    path: '/users',
                    element: <Users title="Kullanıcı İşlemleri"/>
                },
            ]
        },
        {
            path: '/auth',
            element: <Auth/>
        },
        {
            path: '*',
            element: <Navigate to="/"/>
        },
    ]

    return useRoutes(Routes)
}