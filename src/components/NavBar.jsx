import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">All Products</Link>
                            <Link className="nav-link" to="#">Featured Products</Link>
                            <Link className="nav-link" to="/cart">Cart 0</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar