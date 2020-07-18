const mousestate = {
    top:0,
    left:0
}
const mouseReducer = (state = mousestate, action) => {
    if(action.type === 'mouseTop') {
        return{...state,top:action.value}
    }
    if(action.type === 'mouseLeft'){
        return {...state,left:action.value}
    }
    return state
}
export default mouseReducer