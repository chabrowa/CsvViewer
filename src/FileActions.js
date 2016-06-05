export const LOAD_FILE = 'LOAD_FILE'
export const LOAD_FILE_DATA = 'LOAD_FILE_DATA'

export function loadFile (file) {
  return {
    type: LOAD_FILE,
    payload: file
  }
}

export function loadFileData (file, content) {
  return {
    type: LOAD_FILE_DATA,
    payload: {
      content,
      file
    }
  }
}
