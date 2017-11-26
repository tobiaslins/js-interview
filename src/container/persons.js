import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addPerson } from '../modules/persons'

const renderPerson = p => <li id={p.id}>{p.name}</li>

class Persons extends Component {
  render() {
    const { persons, addPerson } = this.props
    return (
      <div>
        <button onClick={() => addPerson()}>Add Person</button>
        <ul>{persons.map(renderPerson)}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => ({
  addPerson: () => dispatch(addPerson('test'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
