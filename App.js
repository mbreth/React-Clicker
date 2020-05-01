import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myNum: 0
    }
  }

  addHandler = () => {
    let num = this.state.myNum;
    num++;
    this.setState({myNum: num});
  }

  subHandler = () => {
    let num = this.state.myNum;
    num--;
    this.setState({myNum: num});
  }

  zeroHandler = () => {
    let num = this.state.myNum;
    num *= 0;
    this.setState({myNum: num});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>{this.state.myNum}</h1>
          <hr />
          <button className="fa fa-plus big-butt" onClick={this.addHandler}></button>
          <button className="fa fa-refresh big-butt" onClick={this.zeroHandler}></button>
          <button className="fa fa-minus big-butt" onClick={this.subHandler}></button>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <h1 className="header">React Clicker</h1>
    );
  }
}

export default App;
