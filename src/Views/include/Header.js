import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../Store/AuthSlice/AuthSlice";

export const Header = () => {


    const dispatch = useDispatch()


    const log = () => {
        dispatch(logout())
    }

    return (
        <div className="main-header">
            {/*// <!-- Logo Header -->*/}
            <div className="logo-header" data-background-color="blue">
                <NavLink to='/'>
                    <a href="index.html" className="logo">
                        <img src="assets/img/logo.svg" alt="navbar brand" className="navbar-brand"/>
                    </a>
                </NavLink>
                <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse"
                        data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">
						<i className="icon-menu"></i>
					</span>
                </button>
                <button className="topbar-toggler more"><i className="icon-options-vertical"/></button>
                <div className="nav-toggle">
                    <button className="btn btn-toggle toggle-sidebar">
                        <i className="icon-menu"/>
                    </button>
                </div>
            </div>
            {/*// <!-- End Logo Header -->*/}
            {/*//*/}
            {/*// <!-- Navbar Header -->*/}
            <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">

                <div className="container-fluid">

                    <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                        <li className="nav-item dropdown hidden-caret">
                            <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"
                               aria-expanded="false">
                                <div className="avatar-sm">
                                    <img src="../assets/img/profile.jpg" alt="..."
                                         className="avatar-img rounded-circle"/>
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-user animated fadeIn">
                                <div className="dropdown-user-scroll scrollbar-outer">
                                    <li>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item" href="#">Account Setting</a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item" onClick={log}>Logout</a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*// <!-- End Navbar -->*/}
        </div>
    )
}