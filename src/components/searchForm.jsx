import React from 'react';
import Rest from "./rest";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('value entered: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit}>
                <span className="login100-form-title p-b-51">
                  In a site far far away ...
                </span>
                <div className="wrap-input100 validate-input m-b-16" data-validate="Search terms are required">
                    <input className="input100" type="text" name="searchInput" placeholder="Search..." value={this.state.value} onChange={this.handleChange}/>
                    <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn m-t-17">
                        <input className="login100-form-btn" type="submit" value="GO" />
                </div>
            </form>

        );
    }
}
export default SearchForm;