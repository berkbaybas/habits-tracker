const initialState = [
  {
    id: 1,
    name: 'Duolingo çaliş',
    chain: ['2022-01-01', '2022-01-02', '2022-01-03']
  }
]

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [
        ...state,
        { id: state.length + 1, name: action.payload.HabitName, chain: [] }
      ]
    case 'REMOVE_HABIT':
      return state.filter((habit) => habit.id !== action.payload.id)
    case 'HANDLE_CHAIN':
      let habitInState = state.find((habit) => habit.id === action.payload.id)
      let IsExist = habitInState.chain.includes(action.payload.date)
      if (IsExist) {
        let chainInHabit = habitInState.chain.filter(
          (h) => h !== action.payload.date
        )
        habitInState = { ...habitInState, chain: chainInHabit }
        let removedState = state.filter(
          (habit) => habit.id !== action.payload.id
        )
        return [...removedState, habitInState]
      } else {
        let habitInState = state.find((habit) => habit.id === action.payload.id)
        let removedState = state.filter(
          (habit) => habit.id !== action.payload.id
        )
        habitInState = {
          ...habitInState,
          chain: [...habitInState.chain, action.payload.date]
        }
        return [...removedState, habitInState]
      }
    default:
      return state
  }
}

export default habitReducer
