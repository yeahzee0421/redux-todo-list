import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter'; //counter함수에서 increase, decrease 함수 불러옴.

const CounterContainer = ({number, increase, decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>;
};

/*
const mapStateToProps = state => ({
    number: state.counter.number, //상태의 카운터의 number
});

const mapDispatchToProps = dispatch => ({
    increase: () => {
        // console.log('increase');
        dispatch(increase());
    },
    decrease: () => {
        // console.log('decrease');
        dispatch(decrease());
    },
});
*/

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {increase, decrease},
)(CounterContainer);