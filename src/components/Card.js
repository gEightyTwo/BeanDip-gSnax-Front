import React from 'react'
import { connect } from 'react-redux'

import MyModal from './MyModal'

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
    const {card:{id, name, description, price, img, is_boolean}} = this.props
    return (
      <div className="card col-lg-3 col-md-4 col-sm-6">

        <img className="card-img-top" src={img} alt="Delicious!"/>

        <div className="card-body">
          <h5 className="card-title">{name}</h5><span>{price}</span>
          <p className="card-text">{description}</p>
        </div>
        {
          <MyModal ogSnackId={id} name={name} description={description} price={price} img={img} is_boolean={is_boolean}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ list, reviewList }) => ({ list, reviewList })

export default connect(mapStateToProps)(Card)
