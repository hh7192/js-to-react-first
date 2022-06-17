import React, {Component} from "react";

class MainNavbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Tasks
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/'>
                  To Do List
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/ShopList'>
                  ShopList
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/randomhexbg'>
                  RandomHex Background
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/randomgradientbg'>
                  RandomGradient Background
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/guessnumber'>
                  Number Guess
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/hangman'>
                  Hangman
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNavbar;
