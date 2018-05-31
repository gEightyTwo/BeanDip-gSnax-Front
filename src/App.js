import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { request } from './helpers'
import Footer from './components/Footer'
import Header from './components/Navbar'
import Cards from './containers/Cards'
import { getAllSnax, getAllRev, loginSetState} from './actions'



export class App extends Component {
  componentDidMount(){
    this.props.getAllSnax()
    this.props.getAllRev()
    // const loggedIn = localStorage.getItem('token')
    return request('/auth/token')
    .then(response => {
      this.props.loginSetState(response.data)
    })
  }
  render() {
    return (
      <div>
        <Header />
          <Cards />
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({getAllSnax, getAllRev, loginSetState}, dispatch)

export default connect(null, mapDispatchToProps)(App)
