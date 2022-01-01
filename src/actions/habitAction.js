export const addHabit = (habit) => {
  return { type: 'ADD_HABIT', payload: habit }
}

export const removeHabit = (id) => {
  return { type: 'REMOVE_HABIT', payload: { id: id } }
}
