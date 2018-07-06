export let constant1 = {
  count: 1
}

setTimeout(() => {
  console.log('b.js-1', constant1.count)
}, 1000)