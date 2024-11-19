import React from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export function NavBar() {
    return (
<nav className='navbar navbar-expand-lg sticky-top bg-info-subtle'>
    <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
            <img src={viteLogo} alt='Vite Logo' width="30"/>
            Vite
        </a>
        <NavBarHamburgerMenu />
        <NavBarLinks />
    </div>
</nav>
    )
}

function NavBarLinks() {
    return(
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav me-auto mb-2 mb-xl-0'>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Home</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>About</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='#'>Contact</a>
            </li>
            <NavBarDropdown />
        </ul>
        <NarBarSearch />
        <NavThemeToggle />
    </div>
    )
}

function NavBarHamburgerMenu(){
    return(
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
    </button>
    )
}

function NarBarSearch(){
    return(
    <form class="d-flex px-2" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    )
}

function NavBarDropdown() {
    return(
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </li>
    )
}

function NavThemeToggle() {
    return(
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="ThemeToggle" onChange={ThemeToggle}/>
    </div>
    )
}

function ThemeToggle() {
    const theme = document.getElementById('ThemeToggle');

    if (theme.checked) {
        document.body.setAttribute('data-bs-theme', 'dark');
    } else {
        document.body.removeAttribute('data-bs-theme');
    }
}