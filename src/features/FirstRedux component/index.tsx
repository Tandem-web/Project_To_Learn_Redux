import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decrement, decrementByAmount, increment, incrementByAmount } from "./counterSlice";

function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
            </div>
        </>
    );
}

export default Counter;