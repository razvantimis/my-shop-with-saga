import React from 'react';
import { useSelector } from 'react-redux';

type Props = {
    onIncrement: () => void;
    onDecrement: () => void;
    onIncrementAsync: () => void;
}
const Counter: React.FC<Props> = ({ onIncrement, onDecrement, onIncrementAsync }) => {
    const value = useSelector(state => state)
    return (
    <div>
        <button onClick={onIncrementAsync}>
            Increment after 1 second
        </button>
        {' '}
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>
    );

}

export default Counter;