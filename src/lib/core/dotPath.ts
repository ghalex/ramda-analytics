import * as r from 'ramda'

const splitByDot = r.split('.')
const dotPath = r.useWith(r.path, [splitByDot, r.identity])

export default dotPath
