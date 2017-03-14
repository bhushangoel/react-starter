import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This component should produce some HTML
const App = () => {
    return <div>Hi !</div>;
};

class App2 {
    render(){
        return <div>Hi from app2 !</div>
    }
}

// Take the generated HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));