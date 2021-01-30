import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidebarRight = () => (
    <footer className="d-flex sidebar-right">
        <div className="sidebar-block-top d-flex">
            <div className="sidebar-block-item">
                <a href="#" className="text-light">
                    <i><FontAwesomeIcon icon="envelope" /></i>
                </a>
            </div>
            <div className="sidebar-block-item disabled">
                <a href="#" className="text-light">
                    <i><FontAwesomeIcon icon="language" /></i>
                </a>
            </div>
        </div>
        <div className="sidebar-block-bottom d-flex">
            <div className="sidebar-block-item">
                <a href="https://discord.gg/e3sMDUgqPH">
                    <i><FontAwesomeIcon  icon={['fab', 'discord']} /></i>
                </a>
            </div>
            <div className="sidebar-block-item">
                <a href="#">
                    <i><FontAwesomeIcon icon={['fab', 'steam']} /></i>
                </a>
            </div>
            <div className="sidebar-block-item">
                <a href="#">
                    <i><FontAwesomeIcon icon={['fab', 'facebook-square']} /></i>
                </a>
            </div>
        </div>
    </footer>
)

export default SidebarRight