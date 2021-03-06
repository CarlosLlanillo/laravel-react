import React from 'react';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import routes from '../../routes/routes';
import { Route, Routes, Navigate } from 'react-router-dom';

const MasterLayout = () => {

    return (
        <div className="sb-nav-fixed" >
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>

                        <Routes>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            paht={route.path}
                                            exac={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                )
                            })}
                            <Navigate from="/admin" to="/admin/dashboard"  replace={true} />
                        </Routes>

                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;