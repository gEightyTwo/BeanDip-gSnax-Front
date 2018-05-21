import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cards from './containers/Cards'

import { getAllSnax, getAllRev} from './actions'



export class App extends Component {
  componentDidMount(){
    this.props.getAllSnax()
    this.props.getAllRev()
  }
  render() {
    return (
      <div>
        <Navbar />
          <Cards />
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({getAllSnax, getAllRev}, dispatch)

export default connect(null, mapDispatchToProps)(App)
