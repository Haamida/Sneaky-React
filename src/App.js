import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-t-50 p-b-90">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-51">
                  In a site far far away ...
                </span>
                <div className="wrap-input100 validate-input m-b-16" data-validate="Search terms are required">
                  <input className="input100" type="text" name="searchInput" placeholder="Search..." />
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn m-t-17">
                  <button className="login100-form-btn">
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
      <p className="footer-text m-0 col-lg-8 col-md-12">
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script>
        All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"/> by <a
            href="https://colorlib.com" target="_blank">Colorlib</a>
      </p>
    </div>

  );
}

export default App;
