import {NavLink, useLocation} from "react-router-dom";
import {useState} from "react";

export const Sidebar = () => {


    const [isActive, setIsActive] = useState('')
    let location = useLocation();

    return (
        <div className="sidebar sidebar-style-2">
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <div className="user">
                        <div className="avatar-sm float-left mr-2">
                            <img src="../assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle"/>
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
								<span>
									Hizrian
									<span className="user-level">Administrator</span>

								</span>
                            </a>
                            <div className="clearfix"></div>

                        </div>
                    </div>
                    <ul className="nav nav-primary">


                        <li className={`nav-item ${location.pathname === '/dashboard' || location.pathname === '/' ? 'active' : ''}`}>
                            <NavLink
                                to='/dashboard'>
                                <i className="fas fa-home"/>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>


                        <li className="nav-section">
							<span className="sidebar-mini-icon">
								<i className="fa fa-ellipsis-h"></i>
							</span>
                            <h4 className="text-section">Components</h4>
                        </li>


                        <li className={`nav-item ${location.pathname === '/ciro' ? 'active' : ''}`}>
                            <NavLink to='/ciro'
                            >

                                <i className="fas fa-layer-group"/>
                                <p>Ciro</p>
                            </NavLink>
                        </li>


                        <li className={`nav-item ${location.pathname === '/users' ? 'active' : ''}`}>
                            <NavLink to='/users'
                            >

                                <i className="fas fa-layer-group"/>
                                <p>Kullanıcılar</p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <a data-toggle="collapse" href="#sidebarLayouts">
                                <i className="fas fa-th-list"></i>
                                <p>Sidebar Layouts</p>
                                <span className="caret"></span>
                            </a>
                            <div className="collapse" id="sidebarLayouts">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="sidebar-style-1.html">
                                            <span className="sub-item">Sidebar Style 1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="overlay-sidebar.html">
                                            <span className="sub-item">Overlay Sidebar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="compact-sidebar.html">
                                            <span className="sub-item">Compact Sidebar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="static-sidebar.html">
                                            <span className="sub-item">Static Sidebar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="icon-menu.html">
                                            <span className="sub-item">Icon Menu</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}