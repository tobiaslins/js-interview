let currentUserId = 0

const post = (delay, value) =>
  new Promise(resolve => setTimeout(resolve, delay, value))

// simulate a async post request (create person)
const simulatePost = data => {
  let id = currentUserId
  currentUserId += 1
  return post(1000, { id, name: data.name })
}

// simulate a async post request (update person)
const simulatePatch = data => post(500, { id: data.id, name: data.name })

export default { simulatePost, simulatePatch }
