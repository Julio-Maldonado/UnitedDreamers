import React from 'react';

import Form from './views/Form';

import { determineScreenState } from './views/Form/helperFunctions';

import { Helmet } from 'react-helmet';

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
        <Helmet>
          <title>United Dreamers</title>
          <meta
              name="description"
              content="Our DACA community strongly supports each other - this form is intended for business owners who are also Dreamers so that our community can rally and support each other as DACA recipients."
            />
            <meta
              property="og:title"
              content="United Dreamers"
            />
            <meta
              property="og:description"
              content="Our DACA community strongly supports each other - this form is intended for business owners who are also Dreamers so that our community can rally and support each other as DACA recipients."
            />
            <meta
              property="og:image"
              content="/UnitedDreamersMeta.png"
            />
            <meta property="og:url" content="uniteddreamers.juliomaldonado.com"/>
            <meta property="og:site_name" content="United Dreamers"/>
            <meta property="og:type" content="website" />
        </Helmet>
        <Form {...props}/>
      </div>
    );
  }
}

export default App;
