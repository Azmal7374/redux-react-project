// step3:  reducers -- increment --> count => count + 1
// reducers -- decrement --> count => count - 1
// reducers -- reset --> count => 0

import { DECREMENT, INCREMENT, RESET } from "../constants/CounterConstant"

const initialCouter = {count: 0}

  const counterReducers = (state = initialCouter, action) =>{
 switch (action.type) {
    case INCREMENT:
        return {
            ...state,
            count: state.count + 1
        }
    case DECREMENT:
        return {
            ...state,
            count: state.count - 1
        }
    case RESET:
        return {
            ...state,
            count: 0,
        }

    default:
        return state
 }
}

export default counterReducers