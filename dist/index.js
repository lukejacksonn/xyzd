var obj
var clense = function(a, b) {
  return !b ? a : typeof b[0] === 'string' ? a.concat([b]) : a.concat(b)
}
var factory = function(schema) {
  return function(node) {
    return !!node && typeof node[1] === 'object' && !Array.isArray(node[1])
      ? ((obj = {}),
        (obj[schema[0]] = node[0]),
        (obj[schema[1]] = node[1]),
        (obj[schema[2]] = Array.isArray(node[2])
          ? node[2].reduce(clense, []).map(factory(schema))
          : node[2] + ''),
        obj)
      : factory(schema)([node[0], {}, node[1] || ''])
  }
}
var h = factory(['name', 'props', 'children'])
var p = factory(['nodeName', 'attributes', 'children'])

export { h, p }
//# sourceMappingURL=index.js.map
