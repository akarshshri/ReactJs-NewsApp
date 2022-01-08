import React, { Component } from 'react'


export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsApp</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/About">About</a>
                                </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Business</a></li>
                                    <li><a className="dropdown-item" href="/">Entertainment</a></li>
                                    <li><a className="dropdown-item" href="/">General</a></li>
                                    <li><a className="dropdown-item" href="/">Health</a></li>
                                    <li><a className="dropdown-item" href="/">Science</a></li>
                                    <li><a className="dropdown-item" href="/">Sports</a></li>
                                    <li><a className="dropdown-item" href="/">Technology</a></li>
                                </ul>
                            </li>
                            </ul>
                            <div className="form-check form-switch mx-3">
                                <input className="form-check-input" type="checkbox" role="switch" id="themeToggle" onClick={this.props.toggleMode} />
                                <label className={`form-check-label text-${this.props.toggleMode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">DarkMode is <b>{this.props.toggleMode === 'light' ? 'OFF' : 'ON'}</b> </label>
                            </div>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
