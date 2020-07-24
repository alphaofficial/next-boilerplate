import Cookie from 'js-cookie'

const authReducer = (state, action) => {
    //console.log(state)
    switch (action.type) {
        case 'toggle_login':
            /**Authentication requests done here */
            Cookie.set("loggedIn", !state.isLoggedIn, { expires: 0.04 })

            /** Always return state */
            return {...state, isLoggedIn: !state.isLoggedIn}
            break;
        default:
            /** Always return state */
            return state;
    }
}

export default authReducer