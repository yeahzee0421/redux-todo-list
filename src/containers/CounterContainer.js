import {connect, useDispatch} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';
import { useSelector } from "react-redux";
import {useCallback} from "react";

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    //컴포넌트 리렌더링 될 때마다 증가, 감소함수 각각 새롭게 만들어짐.
    //useCallback을 사용하여 컴포넌트 최적화 필요
    const onIncrease = useCallback(() => dispatch(increase()),[dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return <Counter
        number={number}
        onIncrease={onIncrease()}
        onDecrease={onDecrease()}
    />;
};

export default CounterContainer;