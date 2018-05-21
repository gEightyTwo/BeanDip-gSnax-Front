import React from 'react'
import { connect } from 'react-redux'

import Modal from './Modal'

class Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  render(){
    const {card:{name, description, price, img, is_boolean}} = this.props
    return (
      <div className="card col-lg-3 col-md-4 col-sm-6">
        <img className="card-img-top" src={img} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5><span>{price}</span>
          <p className="card-text">{description}</p>
          <button className="btn btn-secondary"
            onClick={() => this.toggleModal()}>More</button>
        </div>
        {
          this.state.showModal && <Modal />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ list, reviewList }) => ({ list, reviewList })

export default connect(mapStateToProps)(Card)
