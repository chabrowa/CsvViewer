import React from 'react'
import { connect } from 'react-redux'
import styles from './app.css'

const DataManager = React.createClass({
  // propTypes: {
  //   files: React.PropTypes.array
  // },

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
          //<input onChange={this.handleClickChangeMode} type='checkbox' />Show Text
          NANANANANNANAA BATMAN
        </label>
        // {Object.keys(files).map((fileName) =>
        //   <div key={fileName}>
        //    <h2>{fileName}</h2>
        //     <span>
        //       <FileTable fileName={fileName} files={files} mode={mode} />
        //     </span>
        //   </div>)
        // }
      </div>
    )
  }
})

// const mapStateToProps = (state) => {
//   return {
//     files: getFiles(state)
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   null
// )(FilesViewer)
