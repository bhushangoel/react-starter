import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import YTsearch from 'youtube-api-search';

//components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyB5zTHnYgbIqY3nbZkQK2IMdXyfsmO6TdI";

/*NOTE: we use this class method instead of a simple function because
 this method provides more functionality as compared to above defined method
 example: it knows how to communicate with other components, aware of its surroundings
 */

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTsearch({key: API_KEY, term: 'bmw'}, (videos) => {
            //when key and value have the same name, then we can condense them to one variable only
            this.setState({videos});
        });
    }

    render() {
        //here videos is a props that can be accessed inside component
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

// Take the generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));