const TodoReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TODO': 
        return [action.payload,...state];
        case 'DELETE_TODO':
            return state.filter((val) => val.id !== action.id);
        default:
            return state;
    }
}

export default TodoReducer;