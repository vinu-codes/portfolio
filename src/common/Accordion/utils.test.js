import { checkForNameOnArray, getActiveItem, updateArrayByName } from './utils'

describe('test utils for checkForNameOnArray', () => {
  it('should return a boolean true / false', () => {
    const state = []
    const name = 'acc1'
    expect(checkForNameOnArray(state, name)).toEqual(false)
  })
  it('should return a boolean false when provided the following arguments', () => {
    const state = [{ name: 'abc', value: false }]
    const name = 'zxc'
    expect(checkForNameOnArray(state, name)).toEqual(false)
  })
  it('should return a boolean true when provided the following arguments', () => {
    const state = [{ name: 'abc', value: true }]
    const name = 'abc'
    expect(checkForNameOnArray(state, name)).toEqual(true)
  })
})

describe('test utils for getActiveItem', () => {
  it('should return a boolean true / false', () => {
    const state = []
    const name = 'acc1'
    expect(getActiveItem(state, name)).toEqual(false)
  })

  it('should return true when provided the following args', () => {
    const state = [{ name: 'acc1', value: true }]
    const name = 'acc1'
    expect(getActiveItem(state, name)).toEqual(true)
  })
  it('should return true when provided the following args', () => {
    const state = [{ name: 'acc1', value: true }]
    const name = 'acc2'
    expect(getActiveItem(state, name)).toEqual(false)
  })
  it('should return true when provided the following args', () => {
    const state = [{ name: 'acc1', value: false }]
    const name = 'acc1'
    expect(getActiveItem(state, name)).toEqual(false)
  })
})

describe('test utils for updateArrayByName', () => {
  it('should return an empty array when no state is provided or undefined / empty', () => {
    const state = []
    const name = 'acc1'
    expect(updateArrayByName(state, name)).toEqual([])
  })
  it('should return an array with updated value key on a matching object based on name arg', () => {
    const state = [
      { name: 'abc', value: false },
      { name: 'cde', value: false },
    ]
    const name = 'abc'
    expect(updateArrayByName(state, name)).toEqual([
      { name: 'abc', value: true },
      { name: 'cde', value: false },
    ])
  })
  it('should return an array with no updates as the name arg does not match any keys on the object', () => {
    const state = [
      { name: 'abc', value: false },
      { name: 'cde', value: false },
    ]
    const name = 'efg'
    expect(updateArrayByName(state, name)).toEqual([
      { name: 'abc', value: false },
      { name: 'cde', value: false },
    ])
  })
})
