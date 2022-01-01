const initialState = []
const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [
        ...state,
        { id: state.length + 1, name: action.payload.HabitName }
      ]
    default:
      return state
  }
}

export default habitReducer
