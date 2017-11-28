import api from './api'

import { savePerson } from './modules/persons'

import configureStore from './store/configure-store'

const store = configureStore()

describe('testing asyncronous storing of people', () => {
  it('Recreate the bug scenario', async done => {
    store.dispatch(savePerson(-1, '')) // trigger a save person request for new user
    store.dispatch(savePerson(-1, 'John')) // trigger second save person request with a name

    // check if person got updated
    expect(store.getState()).toEqual({
      persons: [{ id: -1, name: 'John' }]
    })

    // wait for both async requests to be ready
    setTimeout(() => {
      try {
        // check if two users are added (error scenario)
        expect(store.getState()).toEqual({
          persons: [{ id: 0, name: '' }, { id: 1, name: 'John' }]
        })
        done()
      } catch (err) {
        done.fail(err)
      }
    }, 1100)
  })
})
