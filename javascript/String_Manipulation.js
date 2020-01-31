/*
  ====================================================
  Trim Route Path of ":"
  ====================================================
  USAGE: trimPath('/path/:id')

  path (string) : Path to be trimmed
*/

export const trimPath = (path) => {
    let reg = new RegExp('/[^/:]*')
    let trimmedPath = reg.exec(path)

    return trimmedPath[0]
}