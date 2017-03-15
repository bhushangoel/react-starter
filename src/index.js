import React from 'react';
import ReactDOM from 'react-dom';

//components
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyB5zTHnYgbIqY3nbZkQK2IMdXyfsmO6TdI";

// Create new component. This component should produce some HTML
const App = () => {
    return <div>
        <SearchBar />
    </div>;
};

/*NOTE: we use this class method instead of a simple function because
this method provides more functionality as compared to above defined method
example: it knows how to communicate with other components, aware of its surroundings
*/

/*class App2 extends React.Component{
 render() {
 return <div>Hi from app2 !</div>
 }
 }*/

// Take the generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));