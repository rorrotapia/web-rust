import React from 'react'
import logo from '../assets/images/logorust.svg';

const SidebarLeft = () => (
    <header className="sidebar-left">
        <div className="d-flex flex-column sidebar-container h-100">
            <div className="d-flex sidebar-block-top">
                <a href="/"><img className="logo-rust" src={logo} alt=""/></a>
            </div>
            <nav className="navbar d-flex sidebar-block-center">
                <ul className="nav-tabs">
                    <li className="navbar-item is-active" data-target="home" data-tab="content">Home</li>
                    <li className="navbar-item"><a href="https://app.gpay.io/store/rustytrombone"
                                                   className="bg-transparent border-0">Store</a></li>
                    <li className="navbar-item" data-target="servers">Servers</li>
                    <li className="navbar-item disabled">Stats (SOON)</li>
                </ul>
            </nav>
        </div>
    </header>
)

export default SidebarLeft