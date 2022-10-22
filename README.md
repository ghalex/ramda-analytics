## ramda-analytics

Data analysis library for javascript. ramda-analytics is a data manipulation and analysis library written in JavaScript offering the convenience of pandas or R

## Install

```
npm install zebras --save
```


### Examples

```js
// AAPL = [{high: 123, close: 128, ....}....]

// 1. getCol
// [128, 122, ....]
const price = getCol('close', AAPL)

// 2. addCol
const withId: Array<Bar & { id: number }> = addCol('id', [1, 2, 3, 4, 5], AAPL)

// 3. distinct
// remove dublicate objects
const distinctData = distinct((x: any) => x.open, AAPL)

// 4. dot path
let res = dotPath('user.fname', obj)
res = dotPath('user.missfield.name', obj)

// 5. drop col
res = dropCol('id', withId)

// 5. groupby
// group by month and count them
const groupedData = groupBy(x => dayjs(x.date).format('MM-YYYY'), r.length, AAPL)

// 6. mutate
const mutatedData = mutate({
  // date: (val) => dayjs(val),
  volume: (val: Bar) => (val.volume / 1000).toFixed(0) + ' K',
  newKey: (val: Bar) => `${val.volume}  test`
},
AAPL)
```