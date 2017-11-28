import React from 'react'
import { connect } from 'react-redux'

import { savePerson } from '../modules/persons'

const renderPerson = (p, setName) => (
  <li>
    {p.name}
    <button onClick={() => setName(p.id, 'Johnny')}>Set my name</button>
  </li>
)

// a stateless component which renders the list of persons and allows to add new
const Persons = ({ persons, addPerson, setName }) => (
  <div>
    <button onClick={addPerson}>Add Person</button>
    <ul>{persons.map(person => renderPerson(person, setName))}</ul>
  </div>
)

// get the list of persons out of the redux store
// often contains selectors
const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

// allows to trigger other redux actions with dispatch
// is used to do something on user interaction
const mapDispatchToProps = (dispatch, prevState) => ({
  addPerson: () => dispatch(savePerson(-1, '')),
  setName: (id, name) => {
    dispatch(savePerson(id, name))
  }
})

// connecting the two functions above to the component -> the component can access these functions via props
export default connect(mapStateToProps, mapDispatchToProps)(Persons)
