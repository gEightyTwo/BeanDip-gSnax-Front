import React from 'react'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import {getAllRev} from '../actions'
import MyModal from './MyModal'

class Card extends React.Component {
  constructor(props) {
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

  // componentDidMount() {
  // this.props.getAllRev()
  // }


  render() {
    const {
      card: {
        id,
        name,
        description,
        price,
        img,
        is_boolean
      }
    } = this.props
    return (
    <div className="card col-lg-3 col-md-2 col-sm-2">
      <div className="card-header">
        <h5 className="card-title">{name}</h5> <span>${price}</span>
      </div>
      <div className="card-body">
        <img className="rounded-top" src={img} alt="Delicious!"/>
        <div className="averageReview"></div>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-muted">
        {<MyModal ogSnackId={id} name={name} description={description} price={price} img={img} is_boolean={is_boolean}/>}
      </div>
    </div>
    )
  }
}

const mapStateToProps = ({list, reviewList}) => ({list, reviewList})
// const mapDispatchToProps = dispatch => bindActionCreators({getAllRev}, dispatch)
export default connect(mapStateToProps)(Card)
