import React, {createContext} from 'react';

export const GlobalData = createContext();

const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    return state;
}

const Provider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <GlobalData.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalData.Provider>
    )
}

export default Provider;