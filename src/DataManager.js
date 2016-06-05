import React from 'react'
import { connect } from 'react-redux'
import styles from './app.css'

const DataManager = React.createClass({
  getInitialState () {
    return {
      headerIndex: 0
    }
  },

  // handleClickChangeMode () {
  //   this.setState({ mode: this.state.mode === 0 ? 1 : 0 })
  // },

  render () {
    const {headerIndex} = this.state

    return (
      <div className={ styles.main }>
        <label>
          NANANANANNANAA BATMAN
        </label>
      </div>
    )
  }
})

 export default DataManager
