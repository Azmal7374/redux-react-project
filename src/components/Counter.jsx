import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/CounterAction";

const Counter = () => {

    const count = useSelector(state=>state.count)
    console.log(count)

    const dispatch = useDispatch()

    const handeIncrement =() =>{
         dispatch(incrementCounter())
    }

    const handeDecrement =() =>{
        dispatch(decrementCounter ())
   }

   const handeReset =() =>{
    dispatch( resetCounter())
}
    return (
        <div>

        <h2>Counter App</h2>
        <h3>Count: {count}</h3>

        <button onClick={handeIncrement}>Increment</button>
        <button onClick={handeDecrement}>Decrement</button>

        <button onClick={handeReset}>Reset</button>
        </div>
    );
};

export default Counter;

//Counter --> Counter2 --> Counter3--> Counter4


// step2:  State -- count: 0
// step2:  action -- increment, decrement, action
// step3:  reducers -- increment --> count => count + 1
// reducers -- decrement --> count => count - 1
// reducers -- reset --> count => 0

// step4: store --

// step5: providing store in react
// step6: use store


// index.js --> App.js --> Counter.js