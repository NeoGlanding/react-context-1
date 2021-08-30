import React from 'react';
import {GlobalData} from './../store/context'

const HomePage = () => {
    const context = React.useContext(GlobalData);
    return (
        <div>
            <h1>Counter - {context.counter}</h1>
            <button onClick={() => context.setCounter(counter => counter + 1)}>Add</button>
        </div>
    )
}

export default HomePage
