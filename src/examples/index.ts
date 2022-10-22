
import { AAPL } from './data'
import { addCol, getCol, distinct, dotPath, dropCol, groupBy, mutate, rename, summarize, min, max, rolling } from '@/lib'
import * as r from 'ramda'
import dayjs from 'dayjs'

type Bar = typeof AAPL[number]
const obj = { user: { fname: 'Alex', sex: 'm' } }

// 1. getCol
const price = getCol('close', AAPL)
console.log(price)

// 2. addCol
const withId: Array<Bar & { id: number }> = addCol('id', [1, 2, 3, 4, 5], AAPL)
console.log(withId)

// 3. distinct
const distinctData = distinct((x: any) => x.open, AAPL)
console.log(distinctData)

distinct()
// 4. dot path
let res = dotPath('user.fname', obj)
console.log(res)
res = dotPath('user.missfield.name', obj)
console.log(res)

// 5. drop col
res = dropCol('id', withId)
console.log(res)

// 5. groupby
const groupedData = groupBy(x => dayjs(x.date).format('MM-YYYY'), r.length, AAPL)
console.log(groupedData)

// 6. mutate
const mutatedData = mutate({
  // date: (val) => dayjs(val),
  volume: (val: Bar) => (val.volume / 1000).toFixed(0) + ' K',
  newKey: (val: Bar) => `${val.volume}  test`
},
AAPL)

console.log(mutatedData)

// 7. rename
const renameData = rename({ open: 'o', high: 'h' }, AAPL)
console.log(renameData)

// 8. summarize
const summarData = summarize({
  avgClose: (arr: Bar[]) => r.mean(getCol('close', arr)),
  minOpen: (arr: Bar[]) => min(getCol('open', arr)),
  maxOpen: (arr: Bar[]) => max(getCol('open', arr))
}, AAPL)
console.log(summarData)

// 9. rolling
const tst = rolling({ window: 2, partial: false }, (arr) => {
  return {
    date: r.last(getCol('date', arr)),
    mean2: r.mean(getCol('close', arr))
  }
}, AAPL)
console.log(tst)
