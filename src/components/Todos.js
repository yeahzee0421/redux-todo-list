const TodoItem = ({todo, onToggle, onRemove}) => {
    return(
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done} //체크하면 완료
                readOnly={true}
            />
            <span style={{
                textDecoration: todo.done ? 'line-through': 'none'
            }}>{todo.text}</span>
            {/*modules/todos.js의 insert함수에서 text를 파라미터로 받아옴*/}
            <button onClick={() => onRemove(todo.id)}>delete</button>
        </div>
    )
};

const Todos = ({
    input, //인풋에 입력되는 텍스트
    todos, //할일 목록이 들어있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput(''); //등록 후 input 초기화
    };

    const onChange = e => onChangeInput(e.target.value);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>

            <div>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))};
            </div>
        </div>
    )
}
export default Todos;