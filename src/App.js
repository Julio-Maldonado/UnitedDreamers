import React from 'react';
import './App.css';
// import Form from './views/Form';
import Form from './views/Form/index2';

const determineScreenState = (width) => {
  if (width > 1500) {
    return "wide";
  } else if (width > 1200) {
    return "full";
  } else if (width > 900) {
    return "pacman";
  } else if (width > 700) {
    return "half";
  }
  return "mobile";
}

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
