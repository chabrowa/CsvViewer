import React from 'react'
import { connect } from 'react-redux'
import FileTable from './FileTable'
import styles from './app.css'
import {getFiles} from './store'

const FilesViewer = React.createClass({
  propTypes: {
    files: React.PropTypes.array
  },

  getInitialState () {
    return {
      mode: 0
    }
  },

  handleClickChangeMode () {
    this.setState({ mode: this.state.mode === 0 ? 1 : 0 })
  },

  render () {
    const {files} = this.props
    const {mode} = this.state

    return (
      <div className={ styles.main }>
        <label>
          <input onChange={this.handleClickChangeMode} type='checkbox' />Show Text
        </label>
        {Object.keys(files).map((fileName) =>
          <div key={fileName}>
           <h2>{fileName}</h2>
            <span>
              <FileTable fileName={fileName} files={files} mode={mode} />
            </span>
          </div>)
        }
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    files: getFiles(state)
  }
}

export default connect(
  mapStateToProps,
  null
)(FilesViewer)
