import React from 'react';
import {GlobalData} from './../store/context'

const HomePage = () => {
    const context = React.useContext(GlobalData);
    // console.log(context);
    return (
        <div>
            <h1>Counter - {context.state.counter}</h1>
            <button onClick={() => context.dispatch({type: 'INCREMENT'})}>Add</button>
        </div>
    )
}

export default HomePage
