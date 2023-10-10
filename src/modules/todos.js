/*
액션 타입 정의
투두리스트에서 어떤 액션이 필요한가?
input 작성 중 수정, 삽입, 체크, 삭제
해당 액션들을 const로 정의하고 시작하자.
 */
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋값 변경
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

/*
그리고 뭘 해야할까? 정의한 액션에 대한 함수를 작성하자.
 */
export const changeInput = input => ({
    type: CHANGE_INPUT, //위에서 정의한 액션 타입과
    input //파라미터
});
let id = 3; //insert 호출될 때마다 1씩 증가

export const insert = text => ({
    type: INSERT,
    todo:{
        id: id++,
        /*
        todo 항목마다 id 붙여줘야 toggle이나 remove와 같은 작업 처리 가능
        즉 id 값은 각 todo 개체가 들고 있게 될 고유값.
        */
        text,
        done: false
    }
});

//토글 작업과 삭제 작업은 모두 id를 파라미터로 가진다.
export const toggle = id => ({
    type: TOGGLE,
    id
})

export const remove = id => ({
    type: REMOVE,
    id
})


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

//리듀서 함수 작성
function todos(state = initialState, action){
    switch (action.type){
        case CHANGE_INPUT:
            return{
                ...state,
                input: action.input
            };
        case INSERT:
            return{
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return{
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done: !todo.done} : todo)
            };
        case REMOVE:
            return{
                ...state,
                todos: state.todos.filter(todo =>
                    todo.id !== action.id)
            };
        default:
            return {
                ...state
            }
    }
}
export default todos;