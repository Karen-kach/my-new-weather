import React from 'react';
import './Form.css';

const Form = () => {
    return(
        <form >
            <div className='form'>
                <input className='inpt' type='text' name='city'/>
                <button className='btn'> Click</button>
            </div>
        </form>
    )
}
export default Form