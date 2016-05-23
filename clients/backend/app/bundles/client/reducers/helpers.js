import Immutable from 'immutable'

// Finds the matching entry for an immutable-js list and a given value

const byComparing = (elementValue, comparisonElementKey = 'id') => {
  const search = (comparisonElement) => {
    return comparisonElement.get(comparisonElementKey) === elementValue
  }
  return search
}

export {
  byComparing,
}
