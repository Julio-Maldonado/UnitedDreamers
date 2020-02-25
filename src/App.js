import React from 'react';

import Form from './views/Form';

import { determineScreenState } from './views/Form/helperFunctions';

import './App.css';

class App extends React.Component {
  state = {
    height: 0,
    width: 0,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => { this.setState({ width: window.innerWidth, height: window.innerHeight }) };

  componentWillUnmount() { window.removeEventListener('resize', this.updateWindowDimensions); }

  render() {
    const { height, width } = this.state;
    const screenState = determineScreenState(width);
    const props = { height, width, screenState };

    return (
      <div className="App">
        <Form {...props}/>
      </div>
    );
  }
}

export default App;
