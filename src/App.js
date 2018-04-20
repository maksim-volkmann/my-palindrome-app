import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {word: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({word: event.target.word});
  }

  handleSubmit(event) {
    var realValue = this.state.value.toLowerCase().replace(/ /g,'');
    var reverseValue = realValue.split('').reverse().join('');

    if(realValue.length == 0){
      this.setState({word: 'Plase enter a word first!'});
    }else if(realValue == reverseValue){
      this.setState({word: 'Palindrome'});
    }else{
      this.setState({word: ('Not palindrome')});
      console.log(realValue.length);
    }
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            This application checks if your word is palindrome. <br/>Please enter the word you wish to check!
          </label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input class="sub-but" type="submit" value="Test it out!" disabled={this.state.word == 0}/>
        </form>
        <p>{this.state.word}</p>
      </div>


    );
  }
}

export default App;
