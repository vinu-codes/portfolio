/**
 * Checking for matching name on array and return value
 * @param  {Array} state The  array of objs
 * @param  {String} name The name of component
 * @return {Boolean}
 */
const checkForNameOnArray = (state, name) => {
  if (!state || !name) {
    return false
  }
  // trying to see if name ('abc') matches any object within the array so: [{ name: 'abc', value: false }] -> true -> what is result ? { name: 'abc', value: false }
  const result = state.find((item) => {
    return item.name.toUpperCase().includes(name.toUpperCase())
  })

  return !!result
}

/**
 * Checking for matching name on array and true on value property
 * @param  {Array} state The  array of objs
 * @param  {String} name The name of component
 * @return {Boolean}
 */
const getActiveItem = (state, name) => {
  if (!state || !state.length) return false

  const result = state.find((item) =>
    item.name.toUpperCase().includes(name.toUpperCase()),
  )

  if (!!result) {
    return result.value
  }

  return false
}
/**
 * Updating array based on name arg
 * @param  {Array} state The  array of objs
 * @param  {String} name The name of component
 * @return {Array}
 */
const updateArrayByName = (state, name) => {
  if (!state || !state.length) return []

  const result = state.map((item) => {
    if (item.name === name) {
      return { ...item, value: !item.value }
    }
    return { ...item, value: false }
  })
  return result
}

export { checkForNameOnArray, getActiveItem, updateArrayByName }
