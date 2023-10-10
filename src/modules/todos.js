import {createAction, handleActions} from 'redux-actions';
import { produce } from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값 변경
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, input => input);
let id = 3; //insert 호출될 때마다 1씩 증가

export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

//토글 작업과 삭제 작업은 모두 id를 파라미터로 가진다.
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);


//초기 상태 및 리듀서 함수. 선언하지 않으면 에러 발생
const initialState = {
    input: '',
    todos:[
        {
            id: 1,
            text: 'tired',
            done: true
        },
        {
            id: 2,
            text: 'hungry',
            done: true
        }
    ],
};

//리듀서 함수 작성 + immer
//handleActions 함수 & 객체 비구조화 문법 사용
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: input}) =>
            produce(state, draft => {
                draft.input = input;
            }),
        [INSERT]: (state, {payload: todo}) =>
            produce(state, draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, {payload: id}) =>
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),
        //     ({
        //     ...state,
        //     todos: state.todos.map(todo =>
        //     todos.id === id ? {...todo, done: !todo.done} : todo),
        // }),
        [REMOVE]: (state, {payload: id}) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            }),
        //     ({
        //     ...state,
        //     todos: state.todos.filter(todos => todos.id !== id),
        // }),
    },
    initialState,
);

export default todos;