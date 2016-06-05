import React from 'react'
import { connect } from 'react-redux'
import FilesViewer from './FilesViewer'
import DataManager from './DataManager'
import Dropzone from 'react-dropzone'
import styles from './app.css'
import { loadFile, loadFileData } from './FileActions'

const App = React.createClass({
  propTypes: {
    loadFile: React.PropTypes.func,
    loadFileData: React.PropTypes.func
  },

  onDrop (files) {
    files.forEach((file) => {
      if (file.type !== 'text/csv') {
        window.alert('Only files with \'csv\' extension are supported.')
        return
      }

      this.props.loadFile(file)

      var r = new window.FileReader()

      r.onload = (e) => this.props.loadFileData(file, e.target.result)

      r.readAsText(file)
    })
  },

  render () {
    return (
      <div>
        <h1> File Viewer</h1>
        <Dropzone onDrop={ this.onDrop }
                  className={ styles.dropZone }>
          Drop files or click here
        </Dropzone>
        <DataManager />
        <FilesViewer />
      </div>
    )
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    loadFile: (file) => {
      dispatch(loadFile(file))
    },
    loadFileData: (file, content) => {
      dispatch(loadFileData(file, content))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
