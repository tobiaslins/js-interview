// action constants
export const SAVE_PERSON = 'SAVE_PERSON'
export const SAVE_PERSON_REQUEST = 'SAVE_PERSON_REQUEST'
export const SAVE_PERSON_SUCCESS = 'SAVE_PERSON_SUCCESS'

// initial state
const initialState = []

const personsAlreadySynced = state => state.filter(p => p.id !== -1)

// persons reducer, transforms a state into a new state! needs to be immutable
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_PERSON_REQUEST:
      return [
        ...personsAlreadySynced(state),
        { id: -1, name: action.payload.name }
      ]
    case SAVE_PERSON_SUCCESS:
      // filter out person with id -1 and from response
      const p = personsAlreadySynced(state).filter(
        p => p.id !== action.payload.id
      )
      return [...p, action.payload]
    default:
      return state
  }
}

// action creator to save a person with id
export const savePerson = (id, name) => ({
  type: SAVE_PERSON,
  payload: { id, name }
})
