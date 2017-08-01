import React, { Component } from 'react';
import './style.css';
import OptionsList from "../OptionsList/OptionsList";
import Link from "./Link/Link";

export default class LinkContainer extends Component {

    render() {
        return (
            <div className="row large">
                <OptionsList name="Links"/>
                {
                    this.props.data.map((val, key) => {
                      return (<Link key={key} value={val.link} subject={val.subject} />);
                    })
                }
            </div>
        );
    }
}