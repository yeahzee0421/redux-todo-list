import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Todos from '../components/Todos';
import {changeInput, insert, toggle, remove} from "../modules/todos";
import {increase, decrease} from '../modules/counter'; //counter 함수에서 increase, decrease 함수 불러옴.

const TodosContainer = ({input, todos, changeInput, insert, toggle, remove}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove} />
    );
};

export default connect(
    //비구조화 할당을 통해 todos 분리
    //state.todos.input 대신 todos.input 사용
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer);
