import React from 'react';
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state = {
            badges: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //alert('value entered: ' + this.state.value);
        fetch("https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&accepted=True&body=react&closed=False&nottagged=reactnative&title=bootstrap%20carousel&site=stackoverflow").then((Response) => Response.json()).then((findresponse) => {
                this.setState({
                    badges: findresponse.items,
                })
            }
        )
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="searchInput" placeholder="Search....." value={this.state.value} onChange={this.handleChange}/>
                    <button className="mdc-btn" type="submit">GO</button>
                </form>
                <div className="result" />
                {this.state.badges.map((dynamicData, key) =>
                    <div className="list">
                        <ol>

                            <li><p><a  href="https://stackoverflow.com/questions/{dynamicData.question_id}/{dynamicData.title}">{dynamicData.title}</a>
                            </p>
                            </li>
                            <div className="wrapper">
                                <div className="divider div-transparent"></div>
                            </div>
                        </ol>
                    </div>
                )}
            </div>

        );
    }
}
export default SearchForm;