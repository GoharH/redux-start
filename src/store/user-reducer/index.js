const initialState = {
    users: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload] }
        case 'DEL_USER':
            return {...state, users: state.users.filter((item, i) => i !== action.payload) }
        case 'EDIT_USER':
            const newUpdatedUsers = state.users.map((item, i) => {
                if (action.payload.index === i) {
                    item = action.payload.userData
                }
                return item
            })
            return {...state, users: newUpdatedUsers }

        default:
            return state
    }
}
export default UserReducer