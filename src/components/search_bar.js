/*
 * statement (import React, {Component} from 'react';)
 * is equal to
 * statement (import React from 'react'; const Component = React.Component;)
 * */

import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);       //calling method of a parent class

        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}/>
            </div>
        );
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }
}

export default SearchBar;