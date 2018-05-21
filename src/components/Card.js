import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const Card = () => {
  return (
    <div className="card col-lg-3 col-md-4 col-sm-6">
      <img className="card-img-top" src="..." alt="Card image cap">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch)

export default connect(null, mapDispatchToProps)(Card)
