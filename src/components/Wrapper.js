import React from 'react'

const Wrapper = () => (
    <main className="wrapper tab-content">
        <div id="icon-menu">&#9776;</div>
        <div id="home" className="tab is-active">
            <div className="container t-center align-self-center">
                <h1 className="home-title" data-fade="up">Welcome to</h1>
                <h3 className="home-sub-title" data-fade="down">Rusty Trombone x2</h3>
            </div>
        </div>
        <div id="servers" className="tab">
            <div className="bg-rust-3 wrapper-block-title d-flex flex-column">
                <h3 className="title">Servers</h3>
                <ul className="list-servers">
                    <li><i className="fas fa-server"></i>Vanilla x2</li>
                    <li className="disabled"><i className="fas fa-vials"></i>Modded x2 - SOON</li>
                </ul>
                <a href="#" className="block-title-btn btn-rust small">Play</a>
            </div>
            <div className="wrapper-block-container">
                <div className="d-flex title-page">
                    <h1 className="title" id="server-name" data-fade="left"></h1>
                    <span id="server-status" className="badge-status"></span>
                </div>
                <div id="server-card" className="d-flex">
                    <div className="card-status">
                        <h3 className="title">Status</h3>

                        <p>Players : <span id="server-players"></span>/<span id="server-players-max"></span></p>
                    </div>
                    <div className="card-map">
                        <a id="url-map" href="" className="btn-rust">Map</a>
                    </div>
                </div>
                <div className="table">
                    <h3 className="title">Next Wipes</h3>
                    <ul className="table-head d-flex">
                        <li>DATE</li>
                        <li>TYPE</li>
                        <li>Remove Map</li>
                        <li>Remove Recipe</li>
                    </ul>
                    <ul className="table-item d-flex">
                        <li>4/03/2021 a las 20:00 GMT+1</li>
                        <li>Map Wipe</li>
                        <li>YES</li>
                        <li>NO</li>
                    </ul>
                    <ul className="table-item d-flex">
                        <li>4/03/2021 a las 20:00 GMT+1</li>
                        <li>Map Wipe</li>
                        <li>YES</li>
                        <li>NO</li>
                    </ul>
                    <ul className="table-item d-flex">
                        <li>4/03/2021 a las 20:00 GMT+1</li>
                        <li>Map Wipe</li>
                        <li>YES</li>
                        <li>NO</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
)

export default Wrapper