import React from 'react';
import Weather from './weather/Weather';
import Form from './form/Form';


const App = () => {
    return(
        <div className='app'>
            <Form />
            <Weather />
        </div>
    )
}
export default App