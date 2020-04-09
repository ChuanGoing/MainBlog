function transform(data) {
  let ret = ''
  for (const it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}
function transToformData(data) {
  const fdata = new FormData()
  const keys = Object.keys(data)
  keys.map(ele => {
    data[ele].map((x, y) => {
      const key = ele + '[' + y + ']'
      const value = x
      fdata.append(key, value)
    })
  })
  return fdata
}
export { transform, transToformData }
