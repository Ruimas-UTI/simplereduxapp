const userReducer = (state=[], action) => {
    switch(action.type){
        case "FETCH_ USERS":
            return [...state, action.payload];
        default:
            return state;    
    }
}
export default userReducer;