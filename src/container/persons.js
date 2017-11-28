import React from 'react'
import { connect } from 'react-redux'

import { savePerson } from '../modules/persons'

const renderPerson = (p, setName) => (
  <div style={{ borderBottom: '1px solid grey', padding: 5 }}>
    Name '{p.name}'
    <button style={{ marginLeft: 5 }} onClick={() => setName(p.id, 'Johnny')}>
      Set my name
    </button>
  </div>
)

// a stateless component which renders the list of persons and allows to add new
const Persons = ({ persons, addPerson, setName }) => (
  <div>
    <button style={{ margin: 10 }} onClick={addPerson}>
      Add Person
    </button>
    <div style={{ border: '1px solid grey' }}>
      {persons.map(person => renderPerson(person, setName))}
    </div>
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
