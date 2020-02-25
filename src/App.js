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
        {/* <Helmet>
          <title>Yeux Technologies</title>
          <meta
              name="description"
              content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
            />
            <meta
              property="og:title"
              content="Yeux Technologies"
            />
            <meta
              property="og:description"
              content="Yeux have big goals and we want to help you achieve them. We design and develop websites, mobile apps, social media automations and any other techincal solution you might need. Our goal is to support small minority-owned business using our expertise in web development, mobile app development, logo designs, SEO, marketing, and social media. Let us help yeux."
            />
            <meta
              property="og:image"
              content="/logo192.png"
            />
            <meta property="og:url" content="yeux.tech"/>
            <meta property="og:site_name" content="Yeux Technologies"/>
            <meta property="og:type" content="website" />
        </Helmet> */}
        <Form {...props}/>
      </div>
    );
  }
}

export default App;
