import React, { Component } from 'react';
import './style.css';
import OptionsList from "../Options/OptionsList/OptionsList";

export default class QueryResults extends Component {
    //Add an additionalClass prop to customize this specific style its dirty but it works =/
    render() {
        return (
            <div className="query-results">
                <OptionsList name="Search Results" />
                <div className="row">
                    <div className="col-md-12">
                        <ul>
                            {
                                this.props.results.map((result, key) => {
                                    return <li key={key} dangerouslySetInnerHTML={result} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

