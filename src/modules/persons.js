export const ADD_PERSON = 'ADD_PERSON'

const initialState = [{ id: 0, name: 'Peter' }, { id: 1, name: 'John' }]

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, { id: -1, name: action.payload.name }]
    default:
      return state
  }
}

export const addPerson = name => ({
  type: ADD_PERSON,
  payload: { name }
})
