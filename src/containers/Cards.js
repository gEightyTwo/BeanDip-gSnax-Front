import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'

const Cards = () => {

}

const mapStateToProps = ({ list }) => ({ list })

export default connect(mapStateToProps)(Cards)
