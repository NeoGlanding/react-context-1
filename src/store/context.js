import React, {createContext} from 'react';

export const GlobalData = createContext();

const Provider = props => {
    const [counter, setCounter] = React.useState(0);
    return (
        <GlobalData.Provider value={{counter, setCounter}}>
            {props.children}
        </GlobalData.Provider>
    )
}

export default Provider;