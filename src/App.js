import React, {Component} from 'react';
import Marked from 'marked';
import './App.css';
import Data from './Data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Data
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <textarea className="App-text" onChange={this.handleChange} value={this.state.value}> </textarea>
        <div className="App-preview" dangerouslySetInnerHTML={{__html: Marked(this.state.value)}}></div>

        <footer>
          <p><i>This is a Free Code Camp practice project with ReactJS. Inspired by Ommwriter</i></p>
          <p>❤</p>
          <p><a href="//github.com/sabrinaluo/blog" target="_blank">Markdown Previwer</a> by <a
            href="//github.com/sabrinaluo" target="_blank">HiiTea</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
