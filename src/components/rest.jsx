import React from 'react';

class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [],
        };
    }

    componentWillMount() {
        fetch("https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&accepted=True&body=react&closed=False&nottagged=reactnative&title=bootstrap%20carousel&site=stackoverflow").then((Response) => Response.json()).then((findresponse) => {
                this.setState({
                    badges: findresponse.items,
                })
            }
        )
    }


    render() {
        return (
            <div >
                {this.state.badges.map((dynamicData, key) =>
                    <div>

                        <a href="https://stackoverflow.com/questions/{dynamicData.question_id}/{dynamicData.title}">{dynamicData.title}</a>

                    </div>
                )}
            </div>
        );
    }
}

export default Rest;
