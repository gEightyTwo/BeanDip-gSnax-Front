import React from 'react';

import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Card from './components/Card'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Card /> */}
         <Footer />
      </div>
    );
  }
}
export default App
