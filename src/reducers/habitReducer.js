const initialState = [
  {
    id: 1,
    name: 'Duolingo çalış'
  }
]
const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [
        ...state,
        { id: state.length + 1, name: action.payload.HabitName }
      ]
    case 'REMOVE_HABIT':
      return state.filter((habit) => habit.id !== action.payload.id)
    default:
      return state
  }
}

export default habitReducer
