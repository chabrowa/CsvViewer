import React from 'react'
import {csvParse, tsvFormat} from 'd3-dsv'
import {MAX_ROWS} from './Constants'
import {Table, Column, Cell} from 'fixed-data-table'

function FileTable ({files, fileName, mode}) {
  const file = files[fileName] || {}
  const filedata = csvParse(file.content || '') || []

  if (filedata.length === 0) {
    return <div>No data for {fileName}</div>
  }

  if (mode === 1) {
    return <pre>{tsvFormat(filedata)}</pre>
  }

  const rowsCount = MAX_ROWS < filedata.length ? MAX_ROWS : filedata.length
  return (
    <Table rowHeight={50}
           headerHeight={50}
           width={window.innerWidth - 16}
           height={400}
           rowsCount={rowsCount}>
      {Object.keys(filedata[0]).map((n, i) =>
        <Column
          header={<Cell>{n}</Cell>}
          cell={props => (
            <Cell {...props}>
              {filedata[props.rowIndex][n]}
            </Cell>
          )}
          width={100}
          key={n} />
      )}
    </Table>
  )
}

export default FileTable
