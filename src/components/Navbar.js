import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




const Navbar = (props)=>{

    const [search, setSearch] = useState("");
    const onChange = (e)=>{
        e.persist();
        setSearch(e.target.value);
    }
    useEffect(() => {
        //console.log(search);
        props.search(search)
    }, [search]);
    
        return (
            <div>
                <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/About">About</Link>
                                </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className={`dropdown-menu `} aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                            </ul>
                            <div className="form-check form-switch mx-3 w-auto" style={{paddingLeft:'1.5rem'}}>
                                <input className="form-check-input" type="checkbox" role="switch" id="themeToggle" onClick={props.toggleMode} />
                                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">DarkMode is <b>{props.mode === 'light' ? 'OFF' : 'ON'}</b> </label>
                            </div>
                            <form className="d-flex" onSubmit={props.searchHandle}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onChange} />
                                <button className="btn btn-outline-success" type="submit" >Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }


export default Navbar
