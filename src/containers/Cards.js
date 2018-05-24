import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'

const Cards = (props) => {
  return (
    <div id="cardContainer" className="container-fluid">
    <div class="d-flex align-content-around flex-wrap">
    {
      props.list.map(card => {
        return (
        <Card key={card.id} card={card} />
      )
      })
    }
  </div>
  </div>
  )
}

const mapStateToProps = ({ list }) => ({ list })

export default connect(mapStateToProps)(Cards)
