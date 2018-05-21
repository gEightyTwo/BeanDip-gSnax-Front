import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import Card from './components/Card'

import { getAllSnax, getAllRev} from '../actions'



class App extends React.Component {
  componentDidMount(){
    this.props.getAllSnax()
    this.props.getAllRev()
  }
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
const mapDispatchToProps = dispatch => bindActionCreators({getAllSnax, getAllRev}, dispatch)

export default connect(null, mapDispatchToProps)(App)
