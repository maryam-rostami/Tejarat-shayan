export const pathParser = ({ pathname, params }) => {
  let result = pathname
  for (const param of Object.keys(params)) {
    let regex = new RegExp(`:${param}`, "i")
    result = result.replace(regex, params[param])
  }
  return result
}