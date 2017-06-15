// // // namespace helper utility
//
// export default (types) => {
//   let newObj = {}
//   types = map(types)
//   types.forEach((names, type) => {
//     newObj[type] = {}
//     names.forEach((val) => { newObj[type][val] = type + '/' + val })
//   })
//   return newObj
// }
//
// function map (obj) {
//   return Object.keys(obj).reduce((map, key) => map.set(key, obj[key]), new Map())
// }
