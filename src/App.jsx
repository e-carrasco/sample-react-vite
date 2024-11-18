import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export function NavBar() {
    return (
<nav className='navbar navbar-expand-lg'>
    <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
            <img src={viteLogo} alt='Vite Logo' width="30"/>
        </a>
        <span className='collapse navbar-collapse navbar-brand'>Vite</span>
        <NavBarHamburgerMenu />
        <NavBarLinks />
    </div>
</nav>
    )
}

function NavBarLinks() {
    return(
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
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
            <NarBarSearch />
        </ul>
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
    <form class="d-flex" role="search">
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
