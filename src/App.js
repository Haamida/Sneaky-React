import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rest from './components/rest'
import SearchForm from "./components/searchForm";
function App() {
  return (
    <div className="App">
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-t-50 p-b-90">
              <SearchForm></SearchForm>
            </div>
            <Rest></Rest>

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
