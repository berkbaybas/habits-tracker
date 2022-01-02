export const addHabit = (habit) => {
  return { type: 'ADD_HABIT', payload: habit }
}

export const removeHabit = (id) => {
  return { type: 'REMOVE_HABIT', payload: { id: id } }
}

export const handleChain = (id, date) => {
  return { type: 'HANDLE_CHAIN', payload: { id: id, date: date } }
}
